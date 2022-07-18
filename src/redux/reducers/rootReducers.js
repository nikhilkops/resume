import documentReducer from "./documentReducers";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer"
import authReducer from './authReducer';
import { combineReducers } from 'redux' ;

 
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase' ;
console.log(educationReducer) ;

const rootReducer = combineReducers({

  firestore:firestoreReducer,
  firebase:firebaseReducer,
  documentReducer: documentReducer,
  contactReducer: contactReducer,
  educationReducer: educationReducer,
  authReducer: authReducer,
});
export default rootReducer;
