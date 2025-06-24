import { MedicineRecordModalProps } from '@/app/dashboard/previous/previous.types'
import { FC } from 'react'

const RecordModal: FC<MedicineRecordModalProps> = ({
	onClose: closeModal,
	recordDetails: selectedRecord,
}) => {
	return (
		<div className='fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4'>
			<div className='flex bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative'>
				<button
					onClick={closeModal}
					className='absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors'
					aria-label='Close modal'
				>
					{/* Using inline SVG for a simple 'X' icon */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='lucide lucide-x'
					>
						<path d='M18 6 6 18' />
						<path d='m6 6 12 12' />
					</svg>
				</button>

				<div>
					<h2 className='text-2xl font-bold text-gray-900 mb-4'>
						Details for {selectedRecord.medicineName}
					</h2>

					<div className='space-y-3 text-gray-700'>
						<p>
							<strong>Medicine Name:</strong> {selectedRecord.medicineName}
						</p>
						<p>
							<strong>Analyzed On:</strong>
							{selectedRecord.timestamp.toLocaleString()}
						</p>
						<p>
							<strong>User ID:</strong> {selectedRecord.userId}
						</p>
						<p>
							<strong>Record ID:</strong> {selectedRecord.id}
						</p>

						{selectedRecord.potentialMedicineNames &&
							selectedRecord.potentialMedicineNames.length > 0 && (
								<div>
									<h3 className='text-lg font-semibold mt-4 mb-2'>
										Potential Names Identified:
									</h3>
									<div className='flex flex-wrap gap-2'>
										{selectedRecord.potentialMedicineNames.map(
											(name, index) => (
												<span
													key={index}
													className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'
												>
													{name}
												</span>
											)
										)}
									</div>
								</div>
							)}

						{selectedRecord.extractedText &&
							selectedRecord.extractedText.length > 0 && (
								<div>
									<h3 className='text-lg font-semibold mt-4 mb-2'>
										Full Extracted Text (OCR):
									</h3>
									<div className='bg-gray-100 p-4 rounded-lg text-sm font-mono whitespace-pre-wrap max-h-48 overflow-y-auto border border-gray-200'>
										{selectedRecord.extractedText.join('\n')}
									</div>
								</div>
							)}
					</div>
				</div>

				{selectedRecord.imageUrl && (
					<div className='mb-4 lg:hidden'>
						<img
							src={selectedRecord.imageUrl}
							alt={`Image of ${selectedRecord.medicineName}`}
							className='w-full h-auto rounded-lg shadow-md max-h-64 object-contain mx-auto'
							width={400}
							height={300}
						/>
					</div>
				)}
			</div>
		</div>
	)
}

export default RecordModal
