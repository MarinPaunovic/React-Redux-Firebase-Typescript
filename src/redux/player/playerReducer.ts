import { playerTypes } from "./playerTypes";

const INITIAL_STATE = {
  player: {
    username: "",
    level: 1,
    money: 0,
    power: 0,
    skillPoints: 5,
    skill: { luck: 0, intellect: 0, strength: 0, antiLuck: 0, training: 0 },
  },
};

const playerReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case playerTypes.SET_PLAYER:
      return { ...state, player: action.payload };
    case playerTypes.PLAYER_LOGOUT:
      return { ...state, player: INITIAL_STATE };
    case playerTypes.SET_SKILL:
      switch (action.skillType) {
        case "LUCK":
          return {
            ...state,
            player: {
              ...state.player,
              skillPoints: state.player.skillPoints + action.skillPointAction,
              skill: { ...state.player.skill, luck: action.payload },
            },
          };
        case "INTELLECT":
          return {
            ...state,
            player: {
              ...state.player,
              skillPoints: state.player.skillPoints + action.skillPointAction,
              skill: { ...state.player.skill, intellect: action.payload },
            },
          };
        case "TRAINING":
          return {
            ...state,
            player: {
              ...state.player,
              skillPoints: state.player.skillPoints + action.skillPointAction,
              skill: { ...state.player.skill, training: action.payload },
            },
          };
        case "STRENGTH":
          return {
            ...state,
            player: {
              ...state.player,
              skillPoints: state.player.skillPoints + action.skillPointAction,
              skill: { ...state.player.skill, strength: action.payload },
            },
          };
        case "ANTI-LUCK":
          return {
            ...state,
            player: {
              ...state.player,
              skillPoints: state.player.skillPoints + action.skillPointAction,
              skill: { ...state.player.skill, antiLuck: action.payload },
            },
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default playerReducer;
