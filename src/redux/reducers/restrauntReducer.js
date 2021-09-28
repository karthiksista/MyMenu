import { ActionTypes } from "../constants/action-types";

const initialState = [];

export const restrauntReducer = (state = initialState, RestrauntPayload) => {
  switch (RestrauntPayload.type) {
    case ActionTypes.SET_RESTRAUNT:
      return { ...state, restInfo: RestrauntPayload.payload };

    default:
      return initialState;
  }
};

export default restrauntReducer;
