import initialState from './initialState.json' ;
import * as actionTypes from '../actionTypes' ;

export default function contactReducer(state= initialState.contactSection, action) {

    switch(action.type) {
        case actionTypes.ADD_CONTACT:
            //ADD contact First entry 
        return {
            ...action.contact
        }

         case actionTypes.UPDATE_CONTACT:
            //UpdateEntry
            return {
                ...action.contact
            }
        default:
            return state ;
    }
}