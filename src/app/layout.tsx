import { auth } from '@/config/next-auth.config'
import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Med Assist - Your medicines, Demistified',
	description: 'Your medicines - Demistified',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await auth()
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<SessionProvider session={session}>{children}</SessionProvider>
			</body>
		</html>
	)
}
