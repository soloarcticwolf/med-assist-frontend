import { auth } from '@/config/next-auth.config'
import { BASE_URL } from '@/config/server.config'
import { error } from 'console'
import { Session } from 'next-auth'

export default async function MedicineDashboard() {
	const session: Session | null = await auth()

	const data = await fetch(
		`${BASE_URL}/user-scan-history/${session?.user.userId}`
	).then((response) => response.json())

	const uniqueMeds = [
		...new Set(
			data.scanned_medicines.map(
				(medicine: { CommonName: unknown }) => medicine.CommonName
			)
		),
	]

	console.log('JSON.stringify(uniqueMeds)', JSON.stringify(uniqueMeds))
	if (!error) {
		return (
			<div className='flex justify-center items-center min-h-[calc(100vh-80px)] text-red-600'>
				<p className='text-lg font-medium'>Error: {error}</p>
			</div>
		)
	}

	return (
		<div className='p-6 bg-white rounded-xl shadow-md w-full'>
			<h1 className='text-3xl font-bold text-gray-800 mb-6'>
				Hello, <span className='text-indigo-700'>{session?.user.name}</span>!
			</h1>
			<p className='text-gray-600 text-lg mb-8'>
				Welcome back to your Medicine Analysis Dashboard. Here&apos;s a quick
				overview of your activities.
			</p>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
				<div className='bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-200'>
					<h3 className='text-xl font-semibold text-blue-800 mb-2'>
						Total Medicines Scanned
					</h3>
					<p className='text-5xl font-extrabold text-blue-900'>
						{data.scanned_medicines.length}
					</p>
					<p className='text-sm text-gray-600 mt-2'>
						Overall scans since you started.
					</p>
				</div>

				<div className='bg-green-50 p-6 rounded-lg shadow-sm border border-green-200'>
					<h3 className='text-xl font-semibold text-green-800 mb-2'>
						Unique Medicines Identified
					</h3>
					<p className='text-5xl font-extrabold text-green-900'>
						{uniqueMeds.length}
					</p>
					<p className='text-sm text-gray-600 mt-2'>
						Distinct medicine names in your records.
					</p>
				</div>
			</div>
			<div className='bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200'>
				<h3 className='text-2xl font-bold text-gray-800 mb-4'>
					Activity Overview
				</h3>
				<ul className='flex flex-col space-y-3 text-gray-700'>
					<li>
						<span className='font-semibold'>Last Scan:</span>{' '}
						{data.scanned_medicines.length
							? new Date(
									data.scanned_medicines.reverse()[0].scanned_at
							  ).toLocaleString()
							: 'No scans yet.'}
					</li>
					<li className='inline w-full'>
						<span className='font-semibold'>Next Steps:</span> Continue
						analyzing medicine strips or review your full scan history in the
						&quot;Records&quot; section.
					</li>
				</ul>
			</div>
		</div>
	)
}
