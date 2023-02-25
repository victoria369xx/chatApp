import {auth} from '../../firebase/index';

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";



export const signUpUserThunk = (email, password)=> async () => {
    try {

     await auth.createUserWithEmailAndPassword(email, password); 

    } catch (e) {
        console.log(e)
    }
}

export const logInUserThunk = (email, password) => async () => {
    try {
        await auth.signInWithEmailAndPassword(email,password);
    } catch (e) {
        console.log(e)
    }
}

export const logOutUserThunk = async () => {
    await auth.signOut()
}

export const logInUser = (user) => ({
    type: LOGIN_USER,
    payload: user
});

export const logOutUser = () => ({
    type: LOGOUT_USER,
});


export const initAuthAction = (dispatch) => {
    auth.onAuthStateChanged((user)=> {
        if (user){
            dispatch(logInUser(user))
        } else {
            dispatch(logOutUser())
        }
    })
};

