import { VariantProps } from 'class-variance-authority'
import React from 'react'
import { Button, buttonVariants } from '../../button'

export function BtnUploadPill({
	children,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	async function handleLoginButton(e: React.MouseEvent) {
		e.preventDefault()
	}

	return (
		<Button {...props} onClick={(e) => handleLoginButton(e)}>
			{children}
		</Button>
	)
}

export default BtnUploadPill
