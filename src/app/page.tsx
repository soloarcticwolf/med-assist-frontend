import { LoginForm } from '@/components/login-form'

export default async function Home() {
	return (
		<div className='bg-slate-200 flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
			<div className='w-full max-w-sm md:max-w-3xl'>
				<LoginForm />
			</div>
		</div>
	)
}
