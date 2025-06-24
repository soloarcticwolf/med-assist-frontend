import { Button } from '@/components/ui/button'
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BtnLogin } from './ui/custom/btn/btn-login'

export function LoginForm({
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card className='overflow-hidden flex-row gap-0 p-0'>
				<div className='cardLeftContent w-full md:w-1/2 p-3'>
					<CardHeader className='text-center gap-1.5'>
						<CardTitle className='text-xl'>Welcome back</CardTitle>
						<CardDescription>Login with your preffered account</CardDescription>
						<form className=''>
							<div className='grid gap-6'>
								<div className='flex flex-col gap-4'>
									<BtnLogin
										variant='outline'
										className='w-full'
										provider='github'
									>
										<Image
											src={'/assets/image/github-mark.svg'}
											alt='github'
											width={20}
											height={20}
										/>
										Login with Github
									</BtnLogin>
									<BtnLogin
										variant='outline'
										className='w-full'
										provider='google'
									>
										<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
											<path
												d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
												fill='currentColor'
											/>
										</svg>
										Login with Google
									</BtnLogin>
								</div>
								<div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
									<span className='bg-card text-muted-foreground relative z-10 px-2'>
										Or continue with
									</span>
								</div>
								<div className='grid gap-6'>
									<div className='grid gap-3'>
										<Label htmlFor='email'>Email</Label>
										<Input
											id='email'
											type='email'
											placeholder='m@example.com'
											required
										/>
									</div>
									<div className='grid gap-3'>
										<div className='flex items-center'>
											<Label htmlFor='password'>Password</Label>
											<a
												href='#'
												className='ml-auto text-sm underline-offset-4 hover:underline'
											>
												Forgot your password?
											</a>
										</div>
										<Input id='password' type='password' required />
									</div>
									<Button type='submit' className='w-full'>
										Login
									</Button>
								</div>
								<div className='text-center text-sm'>
									Don&apos;t have an account?{' '}
									<a href='#' className='underline underline-offset-4'>
										Sign up
									</a>
								</div>
							</div>
						</form>
					</CardHeader>
				</div>
				<div className='cardRightContent w-1/2 bg-muted relative hidden md:block'>
					<Image
						src='/assets/image/med_assist_banner.png'
						alt='Image'
						width={'500'}
						height={'1500'}
						className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
					/>
				</div>
			</Card>
			<div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
				By clicking continue, you agree to our <a href='#'>Terms of Service </a>
				and <a href='#'>Privacy Policy</a>.
			</div>
		</div>
	)
}
