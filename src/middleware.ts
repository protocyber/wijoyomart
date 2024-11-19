// import { type NextRequest, NextResponse } from 'next/server';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		// const nextResponse = NextResponse.next();

		// // if (!user) {
		// //     return NextResponse.redirect(new URL('/login', request.url))
		// // }

		// return nextResponse;
        // console.log(request.nextauth.token);
	},
	{
		// Matches the pages config in `[...nextauth]`
		// pages: {
			// signIn: '/login',
			// error: '/error',
		// },
	}
);
