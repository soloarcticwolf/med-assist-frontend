'use server'

import { signIn, signOut } from '@/config/next-auth.config'
import { LINK_DASHBOARD, LINK_HOME } from '@/constant/link.constant'

export const login = async (provider: string) =>
	await signIn(provider, { redirectTo: LINK_DASHBOARD })

export const logout = async () => await signOut({ redirectTo: LINK_HOME })
