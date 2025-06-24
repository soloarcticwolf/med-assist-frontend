import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { FC, ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<div className='[--header-height:calc(--spacing(14))]'>
			<SidebarProvider className='flex flex-col'>
				<SiteHeader />
				<div className='flex flex-1'>
					<AppSidebar />
					<SidebarInset className='flex'>{children}</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	)
}

export default Layout
