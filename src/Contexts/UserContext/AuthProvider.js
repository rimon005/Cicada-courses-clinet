import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { useEffect } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    // const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const gitHubProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubSignIn = () =>{
        return signInWithPopup(auth , gitHubProvider)
    }

    const signIn = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        // setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser)
            // if (currentUser === null || currentUser.emailVerified) {
            //     setUser(currentUser);
            // }
            // setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = { user,setUser, googleSignIn, gitHubSignIn,signIn, createUser, logOut, 
        // loading,setLoading, 
        updateUserProfile, verifyEmail }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;