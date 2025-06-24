'use client'

import { MedicineInfo } from '@/app/common/types/medicine.types'
import MedicineInfoModal from '@/components/ui/custom/modal-medicine'
import { BASE_URL } from '@/config/server.config'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface TypeMedicineData {
	medicine_id: string
	scanned_at: string
	medicine_details: MedicineInfo
}
interface TypeReceivedData {
	_id: string
	email: string
	scanned_medicines: Array<TypeMedicineData>
}

export default function ScannedMedicineList() {
	const [selectedMed, setSelectedMed] = useState<TypeMedicineData | null>(null)
	const [isMedicineInfoModalOpen, setIsMedicineInfoModalOpen] = useState(false)
	const [medicineData, setMedicineData] = useState<TypeReceivedData | null>()

	const { data } = useSession()

	const handleClick = (medicine: TypeMedicineData) => {
		setSelectedMed(medicine)
		setIsMedicineInfoModalOpen(true)
	}

	useEffect(() => {
		const userId = data?.user?.id
		fetch(`${BASE_URL}/user-scan-history/${userId}`)
			.then((response) => response.json())
			.then((data) => setMedicineData(data))
			.catch((err) => console.log('something failed: ', err))
	}, [data?.user?.id])

	return (
		<div className='max-w-2xl mx-auto p-4'>
			<h2 className='text-2xl font-semibold text-purple-700 mb-4'>
				Your Past Medicines
			</h2>

			<div className='bg-white shadow rounded-lg divide-y divide-gray-200'>
				{medicineData?.scanned_medicines?.map((medicine) => (
					<button
						key={medicine.medicine_details.commonName}
						onClick={() => handleClick(medicine)}
						className='w-full text-left px-4 py-3 hover:bg-purple-50 transition'
					>
						<div className='flex justify-between items-center'>
							<span className='text-purple-800 font-medium'>
								{medicine.medicine_details.commonName}
							</span>
							<span className='text-sm text-gray-500'>
								{new Date(medicine.scanned_at).toDateString()}
								{new Date(medicine.scanned_at).toLocaleTimeString()}
							</span>
						</div>
					</button>
				))}
			</div>
			{selectedMed ? (
				<MedicineInfoModal
					isOpen={isMedicineInfoModalOpen}
					onClose={() => setIsMedicineInfoModalOpen(false)} // Close modal function
					medicineInfo={selectedMed.medicine_details}
				/>
			) : null}
		</div>
	)
}
