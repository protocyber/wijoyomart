import React from 'react'
import {NextRequest, NextResponse} from 'next/server'

const middleware = (request: NextRequest) => {
    const res = NextResponse.next()
    const router = useRouter()
    const {user} = useContext(FirebaseContext)

    if (!user) {
        return NextResponse.redirect(new URL('/login', req.url))
    }

    return res
}

export default middleware