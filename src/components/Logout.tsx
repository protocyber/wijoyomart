// components/Logout.js
import {getAuth, signOut} from 'firebase/auth'
import {useRouter} from 'next/navigation'
import {useContext} from 'react'
import {auth} from '@/lib/firebase'
import FirebaseContext, {FirebaseContextType} from '@/app/FirebaseContext'
import Image from 'next/image'

const Logout = () => {
    const router = useRouter()
    const {setUser} = useContext(FirebaseContext)

    const handleLogout = async () => {
        try {
            await signOut(auth)
            setUser(null) // Update the user state in the context
            router.push('/login') // Redirect to the login page
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    return (
        <button onClick={handleLogout}>
            <Image src="icons/logout.svg" fill alt="jsm"/>
        </button>
    )
}

export default Logout
