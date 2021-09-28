import { ActionTypes } from "../constants/action-types";

export const setRestrauntInfo = (info) => {
  return {
    type: ActionTypes.SET_RESTRAUNT,
    payload: info,
  };
};
