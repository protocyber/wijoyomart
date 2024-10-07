'use client'

import React, {useEffect, useState} from 'react'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'
import {useRouter} from 'next/navigation'
import {auth} from '@/lib/firebase'
import {User as FirebaseUser} from 'firebase/auth'

function Layout({children}: { children: React.ReactNode }) {
    const [firebaseUser, setUser] = useState<FirebaseUser | null>(null)
    const router = useRouter()
    const user = {} as User

    useEffect(() => {
        // Listen to auth state changes
        const unsubscribe = auth.onAuthStateChanged((user: FirebaseUser | null) => {
            console.log('auth state changed bro')
            if (user) {
                setUser(user) // Set user if logged in
            } else {
                // Redirect to login if not authenticated
                router.push('/login')
            }
        })

        // Cleanup the listener
        return () => unsubscribe()
    }, [router])


    if (!firebaseUser) {
        // You can show a loading state while checking authentication
        return <div>Loading...</div>
    }

    return (
        <div className="flex h-screen w-full">
            <Sidebar user={user}/>
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/images/logo.png" width={30} height={30} alt="logo"/>
                    <div>
                        <MobileNav user={user}/>
                    </div>
                </div>
                {children}
            </div>
        </div>

    )
}

export default Layout