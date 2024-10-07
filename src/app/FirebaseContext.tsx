'use client'

import React, {useEffect, useState} from 'react'
import {onAuthStateChanged, User} from '@firebase/auth'
import {auth} from '@/lib/firebase'

export type FirebaseContextType = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isLoading: boolean;
}

const FirebaseContext = React.createContext<FirebaseContextType>({} as FirebaseContextType)

export const FirebaseProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            setUser(user)
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    return (
        <FirebaseContext.Provider value={{user, setUser, isLoading}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseContext