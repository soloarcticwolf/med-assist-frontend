import { MedicineInfoModalProps } from '@/app/common/types/medicine.types'

// Separate MedicineInfoModal Component (re-added here for self-contained immersive)
const MedicineInfoModal: React.FC<MedicineInfoModalProps> = ({
	isOpen,
	onClose,
	medicineInfo,
}) => {
	if (!isOpen || !medicineInfo) {
		return null // Don't render if not open or no details
	}

	return (
		<div className='fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4'>
			<div className='bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative'>
				<button
					onClick={onClose}
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

				<h2 className='text-2xl font-bold text-gray-900 mb-4 border-b pb-2'>
					{medicineInfo.commonName || 'Medicine Details'}
				</h2>

				<div className='space-y-4 text-gray-700'>
					{/* Display Overview if available */}
					{medicineInfo.overview && medicineInfo.overview !== 'N/A' && (
						<div>
							<p className='font-semibold text-lg mb-1'>Overview:</p>
							<p className='bg-blue-50 p-3 rounded-lg border border-blue-200 text-base'>
								{medicineInfo.overview}
							</p>
						</div>
					)}

					<div>
						<p className='font-semibold text-lg mb-1'>Uses:</p>
						{medicineInfo.uses && medicineInfo.uses.length > 0 ? (
							<ul className='list-disc list-inside ml-4 space-y-1'>
								{medicineInfo.uses.map((use, index) => (
									<li key={index}>{use}</li>
								))}
							</ul>
						) : (
							<p className='text-gray-500'>N/A</p>
						)}
					</div>

					<div>
						<p className='font-semibold text-lg mb-1'>Commonly Known As:</p>
						{medicineInfo.commonlyKnownAs &&
						medicineInfo.commonlyKnownAs.length > 0 ? (
							<ul className='list-disc list-inside ml-4 space-y-1'>
								{medicineInfo.commonlyKnownAs.map((aka, index) => (
									<li key={index}>{aka}</li>
								))}
							</ul>
						) : (
							<p className='text-gray-500'>N/A</p>
						)}
					</div>

					<div>
						<p className='font-semibold text-lg mb-1'>Doses Commonly Given:</p>
						{medicineInfo.dosesCommonlyGiven &&
						medicineInfo.dosesCommonlyGiven.length > 0 ? (
							<ul className='list-disc list-inside ml-4 space-y-1'>
								{medicineInfo.dosesCommonlyGiven.map((dose, index) => (
									<li key={index}>{dose}</li>
								))}
							</ul>
						) : (
							<p className='text-gray-500'>N/A</p>
						)}
					</div>

					<div>
						<p className='font-semibold text-lg mb-1'>Side Effects:</p>
						{medicineInfo.sideEffects && medicineInfo.sideEffects.length > 0 ? (
							<ul className='list-disc list-inside ml-4 space-y-1'>
								{medicineInfo.sideEffects.map((effect, index) => (
									<li key={index}>{effect}</li>
								))}
							</ul>
						) : (
							<p className='text-gray-500'>N/A</p>
						)}
					</div>

					<div>
						<p className='font-semibold text-lg mb-1'>Common Brands:</p>
						{medicineInfo.commonBrands &&
						medicineInfo.commonBrands.length > 0 ? (
							<ul className='list-disc list-inside ml-4 space-y-1'>
								{medicineInfo.commonBrands.map((brand, index) => (
									<li key={index}>{brand}</li>
								))}
							</ul>
						) : (
							<p className='text-gray-500'>N/A</p>
						)}
					</div>

					<div>
						<p className='font-semibold text-lg mb-1'>Average Price:</p>
						<p>{medicineInfo.averagePrice || 'N/A'}</p>
					</div>

					<div>
						<p className='font-semibold text-lg mb-1'>Important Notes:</p>
						{medicineInfo.importantNotes &&
						medicineInfo.importantNotes.length > 0 ? (
							<ul className='list-disc list-inside ml-4 space-y-1'>
								{medicineInfo.importantNotes.map((note, index) => (
									<li key={index}>{note}</li>
								))}
							</ul>
						) : (
							<p className='text-gray-500'>N/A</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default MedicineInfoModal
