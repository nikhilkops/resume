import initialState from './initialState.json' ;
import * as actionTypes from '../actionTypes' ;

export default function contactReducer(state= initialState.educationSection, action) {

    switch(action.type) {
        case actionTypes.ADD_CONTACT:
            //ADD education First entry 
        return {
            ...action.education
        }

         case actionTypes.UPDATE_CONTACT:
            //UpdateEntry
            return {
                ...action.education
            }
        default:
            return state ;
    }
}