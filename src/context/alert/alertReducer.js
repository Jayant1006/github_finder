import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch ((action, state)) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};
