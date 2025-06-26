import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import LinkedIn from 'next-auth/providers/linkedin'
import { BASE_URL } from './server.config'

declare module 'next-auth' {
	interface User {
		id?: string | null // Firebase Auth UID / Firestore Document ID
		userId: string // Accept this as the main user id for reference
		name?: string | null
		email?: string | null
		image?: string | null
	}

	interface Session {
		user: User
	}

	interface JWT {
		userId?: string | null // Firebase Auth UID / Firestore Document ID
	}
}

export const { signIn, signOut, auth, handlers } = NextAuth({
	providers: [
		GitHub,
		Google,
		LinkedIn({
			clientId: process.env.AUTH_LINKEDIN_ID,
			clientSecret: process.env.AUTH_LINKEDIN_SECRET,
		}),
	],
	secret: process.env.AUTH_SECRET,
	callbacks: {
		async signIn({ user }) {
			const response = await fetch(
				`${BASE_URL}/get-user-id?email=${user.email}`
			)

			if (!response.ok) return false
			const { userId } = await response.json()

			if (!userId) return false
			user.userId = userId
			return true
		},
		async jwt({ token, user }) {
			if (user) {
				const userId = user.userId
				token.userId = userId
			} // user is passed only once, when user is signin
			return token
		},
		async session({ session, token }) {
			session.user.userId = token.userId as string
			return session
		},
	},
})
