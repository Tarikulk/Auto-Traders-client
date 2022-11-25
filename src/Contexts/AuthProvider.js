import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
      setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }

      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }

    const signIn = (email, password) => {
      setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email)
    }

    const logout = () => {
      localStorage.removeItem("autoTraders")
      return signOut(auth)
    }
    
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        setLoading(false)
      }) 
    return () => {
      unsubscribe()
    }
  }, [])
  

    const authInfo = {user, createUser, updateUserProfile, signIn, resetPassword, signInWithGoogle, logout, loading}
 
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;