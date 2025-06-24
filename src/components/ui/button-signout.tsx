'use client'

import { FC } from 'react'
import { logout } from '../../lib/actions/auth.action'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	provider?: 'github' | 'google' | 'email'
}

const SignoutButton: FC<Props> = () => {
	return <button onClick={async () => await logout()}>Signout</button>
}

export default SignoutButton
