'use client'

import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import MobileNav from '@/components/MobileNav';
// import {useRouter} from 'next/navigation'
import { auth } from '@/lib/auth';
// import {auth} from '@/lib/firebase'
// import {User as FirebaseUser} from 'firebase/auth'

function Layout({ children }: { children: React.ReactNode; }) {
    // const [firebaseUser, setUser] = useState<FirebaseUser | null>(null)
    // const router = useRouter()
    // const user = {} as User
    const [user, setUser] = useState<User>();
    // const user = (await auth()) as User
    // const { data: session, status } = useSession()

    useEffect(() => {
        const a = async () => {
            const session = await auth();
            console.log(session)
            if (session)
                setUser(session.user as User);
        };
        //     // Listen to auth state changes
        //     const unsubscribe = auth.onAuthStateChanged((user: FirebaseUser | null) => {
        //         console.log('auth state changed bro')
        //         if (user) {
        //             setUser(user) // Set user if logged in
        //         } else {
        //             // Redirect to login if not authenticated
        //             router.push('/login')
        //         }
        a();
    }, []);

    //     // Cleanup the listener
    //     return () => unsubscribe()
    // }, [router])

    if (!user) {
        // You can show a loading state while checking authentication
        return <div className='flex h-screen w-full justify-center items-center'>
            <div className='font-bold'>
                Loading...
            </div>
        </div>
    }
    // console.log(user);

    return (
        <div className="flex h-screen w-full">
            {/* <Sidebar user={user} /> */}
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/images/logo.png" width={30} height={30} alt="logo" />
                    <div>
                        {/* <MobileNav user={user} /> */}
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
