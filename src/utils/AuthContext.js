import React, { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebase";
export const AuthContext = createContext();

   export const AuthContextProvider = ({ children }) => {
     const auth = getAuth(app.app);
     const [user, loading, error] = useAuthState(auth);


   
     
   
     return(
         <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
     )
   };