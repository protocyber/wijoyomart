import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import React from 'react';
import { auth } from '@/lib/auth';

async function Layout({ children }: { children: React.ReactNode; }) {
    // const [user, setUser] = useState<User>();
    const session = await auth();
    const user: User = session!.user as User

    if (!session) {
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
            {<Sidebar user={user} />}
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/images/logo.png" width={30} height={30} alt="logo" />
                    <div>
                        {<MobileNav user={user} />}
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
