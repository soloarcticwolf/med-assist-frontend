'use client'
import { login } from '@/lib/actions/auth.action'
import { VariantProps } from 'class-variance-authority'
import { Button, buttonVariants } from '../../button'

interface TypeLoginButton {
	provider: 'google' | 'github' | 'credential'
}

export function BtnLogin({
	children,
	provider,
	...props
}: TypeLoginButton &
	React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	async function handleLoginButton(e: React.MouseEvent, provider: string) {
		e.preventDefault()
		await login(provider)
	}

	return (
		<Button {...props} onClick={(e) => handleLoginButton(e, provider)}>
			{children}
		</Button>
	)
}
