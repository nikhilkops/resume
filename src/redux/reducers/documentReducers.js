import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";

export default function documentReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_SKIN:
      return {
        ...action.document,
      };

    case actionTypes.UPDATE_SKIN:
      return {
        ...action.document,
      };

    default:
      return state;
  }
}
