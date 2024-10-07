'use client'

import React, {useContext} from 'react'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import MobileNav from '@/components/MobileNav'
import FirebaseContext from '@/app/FirebaseContext'
import {useRouter} from 'next/navigation'

function Layout({children}: { children: React.ReactNode }) {
    const user = {} as User
    const router = useRouter()
    const {user: firebaseUser} = useContext(FirebaseContext)

    if (!firebaseUser) {
        router.push('/login')
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