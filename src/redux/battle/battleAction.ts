import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../db/db";
import { battleTypes } from "./battleTypes";

export const pveBattle = (battleType: string) => {
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
          dispatch({
            type: battleTypes.PVE_BATTLE,
            payload: {
              experience: experienceAB,
              power: powerAB,
              money: moneyAB,
              level: levelAB,
              skillPoints: skillPointsAB,
            },
          });
        } else {
          dispatch({
            type: battleTypes.PVE_BATTLE,
            payload: {
              experience: experienceAB,
              power: powerAB,
              money: moneyAB,
            },
          });
        }
      });
  };
};
