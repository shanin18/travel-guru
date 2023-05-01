import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const signUpWithFacebook = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const signUpWithGoogle = () =>{
        return facebookProvider(auth, googleProvider)
    }

    const authInfo ={
        signUpWithFacebook,
        signUpWithGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;