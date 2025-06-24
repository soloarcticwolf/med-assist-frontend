import { ReactNode } from 'react'

const NextAuthSessionProviderWrapper = ({
	children,
}: {
	children: ReactNode
}) => {
	return <div>{children}</div>
}

export default NextAuthSessionProviderWrapper
