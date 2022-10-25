import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from '../../Firbase/Fribase.config';



export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)

    }
    const signout = () => {
        return signOut(auth)

    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {

            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubcribe()
        }

    }, [])

    const authInfo = { user, providerLogin, signout }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;