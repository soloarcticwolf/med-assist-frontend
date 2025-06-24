import { AnalysisFeedbackProps } from '@/app/common/types/medicine.types'

const AnalysisFeedback: React.FC<AnalysisFeedbackProps> = ({
	analyzedResult,
	onConfirmCorrect,
	onRescanRequest,
}) => {
	if (
		!analyzedResult ||
		!analyzedResult.medicineName ||
		analyzedResult.medicineName === 'N/A'
	) {
		return (
			<div className='mt-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200'>
				<h2 className='text-xl font-semibold text-gray-800 mb-3'>
					Analysis Result:
				</h2>
				<p className='text-lg text-gray-700 mb-4'>
					No potential medicine name was confidently identified from the image.
				</p>
				<p className='text-md text-gray-700 mb-4 font-semibold'>
					Would you like to rescan?
				</p>
				<button
					onClick={onRescanRequest}
					className='w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200'
				>
					Rescan Image
				</button>
			</div>
		)
	}

	const identifiedName = analyzedResult.medicineName
	const probability = analyzedResult.probability
	const probabilityPercent = (probability * 100).toFixed(1)

	return (
		<div className='mt-6 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200'>
			<h2 className='text-xl font-semibold text-gray-800 mb-3'>
				Analysis Result:
			</h2>

			<p className='text-lg text-gray-700 mb-2'>
				Identified Medicine:{' '}
				<span className='font-bold text-indigo-700'>{identifiedName}</span>
			</p>
			<p className='text-sm text-gray-600 mb-4'>
				(Confidence: {probabilityPercent}%)
			</p>

			<p className='text-md text-gray-700 mb-4 font-semibold'>
				Is this correct?
			</p>
			<div className='flex gap-3'>
				<button
					onClick={() => onConfirmCorrect(identifiedName)} // Pass both name and probability
					className='flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200'
				>
					Yes, it&apos;s correct!
				</button>
				<button
					onClick={onRescanRequest}
					className='flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition-colors duration-200'
				>
					No, rescan
				</button>
			</div>
		</div>
	)
}

export default AnalysisFeedback
