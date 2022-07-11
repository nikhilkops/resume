import documentReducer from "./documentReducers";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  documentReducer: documentReducer,
  contactReducer: contactReducer,
  educationReducer: educationReducer,
});
export default rootReducer;
