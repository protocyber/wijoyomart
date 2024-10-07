import {type NextRequest, NextResponse} from 'next/server'

export function middleware(request: NextRequest) {
    const nextResponse = NextResponse.next()

    // if (!user) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }

    return nextResponse
}

// export const config = {
//   matcher: '/',
// }