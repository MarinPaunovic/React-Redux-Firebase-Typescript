import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { State } from "history";
import { db } from "../../db/db";
import { playerTypes } from "./playerTypes";

export const setPlayer = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    let result = await getDocs(
      query(collection(db, "Player"), where("player.id", "==", id))
    );
    if (result.docs.length == 0) {
      if (state) {
        const player = {
          username: state.user.currentUser.username,
          id: state.user.currentUser.id,
          level: 1,
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
      }
    } else if (!state.player.player.username && result.docs.length) {
      let resultMap = result.docs.map((item) => item.data());
      const { player } = Object.assign({}, ...resultMap);
      dispatch({ type: playerTypes.SET_PLAYER, payload: player });
    }
  };
};

export const playerLogout = () => ({
  type: playerTypes.PLAYER_LOGOUT,
});

export const setSkill = (
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
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationPlus,
              skillType: skillToChange,
              skillPointAction: -1,
            });

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.luck - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.luck": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationMinus,
              skillType: skillToChange,
              skillPointAction: +1,
            });

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
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationPlus,
              skillType: skillToChange,
              skillPointAction: -1,
            });

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.strength - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.strength": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationMinus,
              skillType: skillToChange,
              skillPointAction: +1,
            });
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
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationPlus,
              skillType: skillToChange,
              skillPointAction: -1,
            });

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.antiLuck - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.antiLuck": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationMinus,
              skillType: skillToChange,
              skillPointAction: +1,
            });

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
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationPlus,
              skillType: skillToChange,
              skillPointAction: -1,
            });

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.training - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.training": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationMinus,
              skillType: skillToChange,
              skillPointAction: +1,
            });

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
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationPlus,
              skillType: skillToChange,
              skillPointAction: -1,
            });

            return;
          case "-":
            let mathOperationMinus = state.player.player.skill.intellect - 1;
            updateDoc(doc(db, "Player", playerId), {
              "player.skill.intellect": mathOperationMinus,
              "player.skillPoints": skillPointsOperationPlus,
            });
            dispatch({
              type: playerTypes.SET_SKILL,
              payload: mathOperationMinus,
              skillType: skillToChange,
              skillPointAction: +1,
            });

            return;
          default:
            return;
        }
    }
  };
};
