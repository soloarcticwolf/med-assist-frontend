/**
 * The middleware should be placed in the same location, next auth mandates this location
 * and looks for this file, with this name. middleware.ts or middleware.js
 */

import { auth } from '@/config/next-auth.config'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import {
	LINK_ANALYSER,
	LINK_DASHBOARD,
	LINK_PREVIOUS_RECORDS,
	LINK_RESULT,
} from './constant/link.constant'

const protectedRoutes: string[] = [
	LINK_DASHBOARD,
	LINK_ANALYSER,
	LINK_PREVIOUS_RECORDS,
	LINK_RESULT,
]

export default async function middlware(request: NextRequest) {
	const session = await auth()
	const { pathname } = request.nextUrl
	if (protectedRoutes.includes(pathname) && !session)
		return NextResponse.redirect(new URL('/', request.url))

	// if (session && pathname === LINK_HOME)
	// 	NextResponse.redirect(new URL(LINK_DASHBOARD, request.url))
	return NextResponse.next()
}
