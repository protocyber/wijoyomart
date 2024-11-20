import type {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from 'next';
import type { NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from './prisma';

export const config = {
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	providers: [
		// CredentialsProvider({
		// 	// The name to display on the sign in form (e.g. "Sign in with...")
		// 	name: 'Credentials',
		// 	// `credentials` is used to generate a form on the sign in page.
		// 	// You can specify which fields should be submitted, by adding keys to the `credentials` object.
		// 	// e.g. domain, username, password, 2FA token, etc.
		// 	// You can pass any HTML attribute to the <input> tag through the object.
		// 	credentials: {
		// 		username: { label: 'Username', type: 'text', },
		// 		password: { label: 'Password', type: 'password' },
		// 	},
		// 	async authorize(credentials, req) {
		// 		// Add logic here to look up the user from the credentials supplied
		// 		const user = {
		// 			id: '1',
		// 			name: 'J Smith',
		// 			email: 'jsmith@example.com',
		// 		};

		// 		if (user) {
		// 			// Any object returned will be saved in `user` property of the JWT
		// 			return user;
		// 		} else {
		// 			// If you return null then an error will be displayed advising the user to check their details.
		// 			return null;

		// 			// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
		// 		}
		// 	},
		// }),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
	...args:
		| [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return getServerSession(...args, config);
}
