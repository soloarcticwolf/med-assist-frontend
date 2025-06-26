import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { LINK_PRIVACY_POLICY, LINK_TOS } from '@/constant/link.constant'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { BtnLogin } from './ui/custom/btn/btn-login'

export function LoginForm({
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card className='overflow-hidden flex-row gap-0 p-0'>
				<div className='cardLeftContent w-full md:w-1/2 p-3 min-h-[500]'>
					<CardHeader className='text-center gap-1.5 transform translate-y-1/4'>
						<CardTitle className='text-xl'>Welcome</CardTitle>
						<CardDescription>Login with your account</CardDescription>
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
									{/* <BtnLogin
										variant='outline'
										className='w-full'
										provider='linkedin'
									>
										<Image
											src={'/assets/image/linkedin-logo.svg'}
											alt='github'
											width={15}
											height={15}
										/>
										Login with LinkedIn
									</BtnLogin> */}
								</div>
								<div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4'>
									By clicking continue, you agree to our{' '}
									<Link href={LINK_TOS}>Terms of Service </Link>
									and <Link href={LINK_PRIVACY_POLICY}>Privacy Policy</Link>.
								</div>
							</div>
						</form>
					</CardHeader>
				</div>
				<div className='cardRightContent w-1/2 bg-muted relative hidden md:block'>
					<Image
						src='/assets/image/logo/med_assist_banner.png'
						alt='Image'
						width={'500'}
						height={'1500'}
						className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
					/>
				</div>
			</Card>
		</div>
	)
}
