import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "../../db/db";

interface PlayerState {
  player: {
    username: string;
    id: string;
    experience: number;
    itemID: string;
    level: number;
    money: number;
    power: number;
    skillPoints: number;
    skill: {
      luck: number;
      intellect: number;
      strength: number;
      antiLuck: number;
      training: number;
    };
  };
}

interface ISetSkill {
  payload: {
    amount: number;
    skillType: string;
    skillPointAction: number;
  };
}

const initialState: PlayerState = {
  player: {
    username: "",
    id: "",
    experience: 0,
    itemID: "",
    level: 1,
    money: 0,
    power: 0,
    skillPoints: 5,
    skill: {
      luck: 0,
      antiLuck: 0,
      strength: 0,
      training: 0,
      intellect: 0,
    },
  },
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayer: (state, action): any => {
      state.player = action.payload.player;
    },
    pveBattle: (state, action): any => {
      const playerS = state.player;
      const payload = action.payload;
      if (action.payload.levelUp) {
        playerS.experience = payload.experience;
        playerS.level = payload.level;
        playerS.money = payload.money;
        playerS.power = payload.power;
        playerS.skillPoints = payload.skillPoints;
      } else {
        playerS.experience = payload.experience;
        playerS.money = payload.money;
        playerS.power = payload.power;
      }
    },
    setSkill: (state, action: ISetSkill) => {
      const playerS = state.player;
      const payload = action.payload;
      switch (action.payload.skillType) {
        case "LUCK":
          playerS.skill.luck = payload.amount;
          playerS.skillPoints += payload.skillPointAction;
          return;
        case "TRAINING":
          playerS.skill.training = payload.amount;
          playerS.skillPoints += payload.skillPointAction;
          return;
        case "INTELLECT":
          playerS.skill.intellect = payload.amount;
          playerS.skillPoints += payload.skillPointAction;
          return;
        case "ANTI-LUCK":
          playerS.skill.antiLuck = payload.amount;
          playerS.skillPoints += payload.skillPointAction;
          return;
        case "STRENGTH":
          playerS.skill.strength = payload.amount;
          playerS.skillPoints += payload.skillPointAction;
          return;
        default:
          return state;
      }
    },
    playerLogout: (state): any => {
      state = initialState;
    },
  },
});

export const setPlayerAction = () => {
  return async (dispatch: any, getState: any) => {
    const userReducer = getState().user;
    const { id, username } = userReducer.currentUser;

    let result = await getDocs(
      query(collection(db, "Player"), where("player.id", "==", id))
    );

    if (result.docs.length == 0) {
      const player: PlayerState["player"] = {
        username: username,
        id: id,
        level: 1,
        itemID: "",
        experience: 0,
        money: 0,
        power: 0,
        skillPoints: 5,
        skill: {
          luck: 0,
          intellect: 0,
          strength: 0,
          antiLuck: 0,
          training: 0,
        },
      };
      addDoc(collection(db, "Player"), {
        player,
      });
    } else if (result.docs.length) {
      let resultMap = result.docs.map((item) => ({
        ...item.data(),
      }));
      resultMap = Object.assign({}, ...resultMap);
      dispatch(setPlayer(resultMap));
    }
  };
};
export const pveBattleAction = (battleType: string) => {
  return async (dispatch: any, getState: any) => {
    const player = getState();
    let { experience, money, power, id, level, skillPoints } =
      player.player.player;
    let skillPointsAB = skillPoints + 5;
    let levelAB = level + 1;
    let moneyAB = money + 50;
    let powerAB = power + 15;
    let experienceAB = experience + 1;

    await getDocs(query(collection(db, "Player"), where("player.id", "==", id)))
      .then((snap) => {
        if (experienceAB == level * 10) {
          updateDoc(doc(db, "Player", snap.docs[0].id), {
            "player.experience": experienceAB,
            "player.money": moneyAB,
            "player.power": powerAB,
            "player.level": levelAB,
            "player.skillPoints": skillPointsAB,
          });
        } else {
          updateDoc(doc(db, "Player", snap.docs[0].id), {
            "player.experience": experienceAB,
            "player.money": moneyAB,
            "player.power": powerAB,
          });
        }
      })

      .then(() => {
        if (experienceAB == level * 10) {
          const payload = {
            levelUp: true,
            experience: experienceAB,
            power: powerAB,
            money: moneyAB,
            level: levelAB,
            skillPoints: skillPointsAB,
          };
          dispatch(pveBattle(payload));
        } else {
          dispatch(
            pveBattle({
              levelUp: false,
              experience: experienceAB,
              power: powerAB,
              money: moneyAB,
            })
          );
        }
      });
  };
};
export const setSkillAction = (
  skillToChange: string,
  operation: string,
  id: string
) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    let skillPointsOperationPlus = state.player.player.skillPoints + 1;
    let skillPointsOperationMinus = state.player.player.skillPoints - 1;
    let playerId = "";
    await getDocs(
      query(collection(db, "Player"), where("player.id", "==", id))
    ).then((snap) =>
      snap.docs.forEach((doc) => {
        playerId = doc.id;
      })
    );
    switch (skillToChange) {
      case "LUCK":
        switch (operation) {
          case "+":
            let mathOperationPlus = state.player.player.skill.luck + 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.luck": mathOperationPlus,
              "player.skillPoints": skillPointsOperationMinus,
            });
            dispatch(
              setSkill({
                amount: mathOperationPlus,
                skillType: skillToChange,
                skillPointAction: -1,
              })
            );

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.luck - 1;
            console.log(mathOperationMinus);
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.luck": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch(
              setSkill({
                amount: mathOperationMinus,
                skillType: skillToChange,
                skillPointAction: +1,
              })
            );

            return;
          default:
            return;
        }
      case "STRENGTH":
        switch (operation) {
          case "+":
            let mathOperationPlus = state.player.player.skill.strength + 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.strength": mathOperationPlus,
              "player.skillPoints": skillPointsOperationMinus,
            });
            dispatch(
              setSkill({
                amount: mathOperationPlus,
                skillType: skillToChange,
                skillPointAction: -1,
              })
            );

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.strength - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.strength": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch(
              setSkill({
                amount: mathOperationMinus,
                skillType: skillToChange,
                skillPointAction: +1,
              })
            );
            return;
          default:
            return;
        }
      case "ANTI-LUCK":
        switch (operation) {
          case "+":
            let mathOperationPlus = state.player.player.skill.antiLuck + 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.antiLuck": mathOperationPlus,
              "player.skillPoints": skillPointsOperationMinus,
            });
            dispatch(
              setSkill({
                amount: mathOperationPlus,
                skillType: skillToChange,
                skillPointAction: -1,
              })
            );

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.antiLuck - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.antiLuck": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch(
              setSkill({
                amount: mathOperationMinus,
                skillType: skillToChange,
                skillPointAction: +1,
              })
            );

            return;
          default:
            return;
        }
      case "TRAINING":
        switch (operation) {
          case "+":
            let mathOperationPlus = state.player.player.skill.training + 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.training": mathOperationPlus,
              "player.skillPoints": skillPointsOperationMinus,
            });
            dispatch(
              setSkill({
                amount: mathOperationPlus,
                skillType: skillToChange,
                skillPointAction: -1,
              })
            );

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.training - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.training": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch(
              setSkill({
                amount: mathOperationMinus,
                skillType: skillToChange,
                skillPointAction: +1,
              })
            );

            return;
          default:
            return;
        }
      case "INTELLECT":
        switch (operation) {
          case "+":
            let mathOperationPlus = state.player.player.skill.intellect + 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.intellect": mathOperationPlus,
              "player.skillPoints": skillPointsOperationMinus,
            });
            dispatch(
              setSkill({
                amount: mathOperationPlus,
                skillType: skillToChange,
                skillPointAction: -1,
              })
            );

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.intellect - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.intellect": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch(
              setSkill({
                amount: mathOperationMinus,
                skillType: skillToChange,
                skillPointAction: +1,
              })
            );
            return;
          default:
            return;
        }
    }
  };
};
export const { setPlayer, pveBattle, setSkill, playerLogout } =
  playerSlice.actions;

export default playerSlice.reducer;
