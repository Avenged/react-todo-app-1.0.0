import { types } from '../types/types';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
});

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}
