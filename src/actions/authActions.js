
import * as actionTypes from './actionTypes';

export const register = (userData) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: actionTypes.REGISTER_REQUEST })
        const firebase = getFirebase();
        // /firestore
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            userData.email,
            userData.password
        ).then(async (data) => {
            // console.log(data);
            const res = await firestore.collection('users').doc(data.user.uid).set({
                email: userData.email,
                resumeIds: []
            });
            dispatch({ type: actionTypes.REGISTER_SUCCESS })
        }).catch((err) => {
            dispatch({ type: actionTypes.REGISTER_FAILED, error: err })
            setTimeout(() => {
                dispatch({ type: actionTypes.REMOVE_ERROR })
            }, 2000)
        });
    }



} 
export function signout() {
    return (dispatch, getState, { getFirebase,getFirestore }) => {
        console.log('signing out')
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: actionTypes.SIGN_OUT })
        }).catch((err) => {
            dispatch({ type: actionTypes.SIGN_OUT_FAILED, error: err })
        });
    }
}
export const signIn = (userData) => {
    return async (dispatch, getState, { getFirebase, getFirestore }) => {
        //   loading on 
        dispatch({ type: actionTypes.SIGN_IN_REQUEST })
        const firebase = getFirebase();
        try {
            console.log(userData);
            let data = await firebase.auth().signInWithEmailAndPassword
                (userData.email, userData.password)
            // console.log(data.user.uid);
            // success   
            dispatch({ type: actionTypes.SIGN_IN_SUCCESS })
        }
        catch (err) {
            console.log("Error is ", err)
            dispatch({
                 type: actionTypes.SIGN_IN_FAILED, 
                 error: err })
            setTimeout(() => {
                dispatch({ type: actionTypes.REMOVE_ERROR })
            }, 2000)
        };
    }
}