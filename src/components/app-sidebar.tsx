'use client'

import { ListCheckIcon, Search } from 'lucide-react'
import * as React from 'react'

import { NavMain } from '@/components/nav-main'
import { NavSecondary } from '@/components/nav-secondary'
import { NavUser } from '@/components/nav-user'
import { Sidebar, SidebarContent, SidebarFooter } from '@/components/ui/sidebar'

import {
	LINK_ANALYSER,
	LINK_HOME,
	LINK_PREVIOUS_RECORDS,
} from '@/constant/link.constant'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	navMain: [
		{
			title: 'Medicine analyser',
			url: LINK_ANALYSER,
			icon: Search,
			isActive: true,
			items: [],
		},
		{
			title: 'Previous records',
			url: LINK_PREVIOUS_RECORDS,
			icon: ListCheckIcon,
			items: [],
		},
	],
	navSecondary: [],
	projects: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const session = useSession()

	const user = session.data?.user

	if (!session || !session.data?.user) redirect(LINK_HOME)

	return (
		<Sidebar
			className='top-(--header-height) h-[calc(100svh-var(--header-height))]!'
			{...props}
		>
			<SidebarContent>
				<NavMain items={data.navMain} />
				{/* <NavProjects projects={data.projects} /> */}
				<NavSecondary items={data.navSecondary} className='mt-auto' />
			</SidebarContent>
			<SidebarFooter>
				{/* @ts-expect-error User session is available */}
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	)
}
