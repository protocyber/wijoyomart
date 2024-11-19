// components/Logout.js
import {signOut} from 'firebase/auth'
import {useRouter} from 'next/navigation'
import {auth} from '@/lib/firebase'
import Image from 'next/image'

const Logout = () => {
    const router = useRouter()

    const handleLogout = async () => {
        try {
            await signOut(auth)
            router.push('/api/auth/signout') // Redirect to login page after logging out
        } catch (err) {
            console.error('Failed to log out:', (err as Error).message)
        }
    }

    return (
        <button onClick={handleLogout}>
            <Image src="icons/logout.svg" fill alt="jsm"/>
        </button>
    )
}

export default Logout
