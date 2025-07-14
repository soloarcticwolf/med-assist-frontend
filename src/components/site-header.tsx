'use client'

import { Button } from '@/components/ui/button'
import { SidebarMenuButton, useSidebar } from '@/components/ui/sidebar'
import { LINK_DASHBOARD } from '@/constant/link.constant'
import { Separator } from '@radix-ui/react-separator'
import { SidebarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function SiteHeader() {
	const { toggleSidebar } = useSidebar()

	return (
		<header className='bg-background sticky top-0 z-50 flex w-full items-center border-b'>
			<div className='flex h-(--header-height) w-full items-center gap-2 px-4'>
				<Button
					className='h-8 w-8'
					variant='ghost'
					size='icon'
					onClick={toggleSidebar}
				>
					<SidebarIcon />
				</Button>
				<Separator orientation='vertical' className='mr-2 h-4' />
				<SidebarMenuButton size='lg' asChild>
					<Link href={LINK_DASHBOARD}>
						<div className='text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
							<Image
								src={'/assets/image/logo/med-assist-logo-pill.png'}
								alt={'Med assist logo'}
								height={20}
								width={20}
							/>
						</div>
						<div className='grid flex-1 text-left text-sm leading-tight'>
							<span className='truncate font-medium'>Med Assist</span>
							<span className='truncate text-xs'>
								Your Medicine, Demystified
							</span>
						</div>
					</Link>
				</SidebarMenuButton>
			</div>
		</header>
	)
}
