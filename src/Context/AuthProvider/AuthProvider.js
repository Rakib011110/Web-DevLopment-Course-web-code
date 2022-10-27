import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth";
import app from '../../Firbase/Fribase.config';



export const AuthContext = createContext()
const auth = getAuth(app)
/* ------------------------------------- */


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const providerLogin = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider)

    }

    const githublogin = (githubProvider) => {
        return signInWithPopup(auth, githubProvider)
    }


    const signout = () => {
        setLoader(true)
        return signOut(auth)
    }

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (profile) => {
        return updateProfile(auth.currentUser, profile)

    }


    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {

            console.log(currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubcribe()
        }

    }, [])

    const authInfo = { user, providerLogin, signout, createUser, login, loader, profileUpdate, githublogin }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;