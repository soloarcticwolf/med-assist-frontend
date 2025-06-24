'use client'

import { FC } from 'react'
import { login } from '../../lib/actions/auth.action'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	provider: 'github' | 'google' | 'email'
}

const CustomButton: FC<Props> = ({ provider }) => {
	return (
		<button onClick={async () => await login(provider)}>
			Sign in with {provider}
		</button>
	)
}

export default CustomButton
