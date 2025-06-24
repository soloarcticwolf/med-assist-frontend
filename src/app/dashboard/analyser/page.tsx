'use client'
import { MedicineInfo } from '@/app/common/types/medicine.types'
import AnalysisFeedback from '@/components/ui/custom/analysis-feedback'
import MedicineInfoModal from '@/components/ui/custom/modal-medicine'
import { BASE_URL } from '@/config/server.config'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

export default function MedicineStripAnalyzer() {
	const [selectedFile, setSelectedFile] = useState<Blob | null>(null)
	const [loading, setLoading] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [llmAnalyzedResult, setLlmAnalyzedResult] = useState<{
		medicineName: string
		probability: number
	} | null>(null)
	const [showFeedbackSection, setShowFeedbackSection] = useState(false)

	const { data: sessionData } = useSession()

	// States for the MedicineInfoModal
	const [isMedicineInfoModalOpen, setIsMedicineInfoModalOpen] = useState(false)
	const [currentMedicineInfo, setCurrentMedicineInfo] =
		useState<MedicineInfo | null>(null)

	const [message, setMessage] = useState<{
		text: string
		isError: boolean
	} | null>(null)
	const messageTimeoutRef = useRef<NodeJS.Timeout>(null)
	const [previewImage, setPreviewImage] = useState<ArrayBuffer | string | null>(
		null
	)

	const showMessageBox = (msg: string, isError = false) => {
		setMessage({ text: msg, isError: isError })
		if (messageTimeoutRef.current) {
			clearTimeout(messageTimeoutRef.current)
		}
		messageTimeoutRef.current = setTimeout(() => {
			setMessage(null)
		}, 3000)
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) return console.log('No files attached')

		const file = event.target.files[0]

		setSelectedFile(file)
		setErrorMessage('')
		setLlmAnalyzedResult(null) // Clear previous analysis results
		setShowFeedbackSection(false)
		const reader: FileReader = new FileReader()
		reader.onloadend = () => setPreviewImage(reader.result)
		reader.readAsDataURL(file)
	}

	const handleAnalyze = async () => {
		if (!selectedFile) {
			return showMessageBox('Please select an image file first.', true)
		}
		setLoading(true)
		setErrorMessage('')
		setLlmAnalyzedResult(null)
		setShowFeedbackSection(false)

		const formData = new FormData()
		formData.append('file', selectedFile)

		try {
			const response = await fetch(
				`${BASE_URL}/analyze-medicine-strip/?apply_preprocessing=true`,
				{
					method: 'POST',
					body: formData,
				}
			)

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.detail || 'Failed to analyze image.')
			}
			const data = await response.json()
			setLlmAnalyzedResult(data) //
			setShowFeedbackSection(true)
		} catch (error) {
			// @ts-expect-error error is of type unknown
			setErrorMessage(`Error: ${error.message}`)
			setLlmAnalyzedResult(null)
		} finally {
			setLoading(false)
		}
	}

	const handleRescan = () => {
		setSelectedFile(null)
		setPreviewImage(null)
		setLlmAnalyzedResult(null)
		setShowFeedbackSection(false)
		setErrorMessage('')
		showMessageBox(
			'Please select a new image to rescan, or upload the current one again.',
			false
		)
		setIsMedicineInfoModalOpen(false)
		setCurrentMedicineInfo(null)
	}

	// Function to fetch full medicine details from the new backend API
	const fetchMedicineDetails = async (
		medicineName: string
	): Promise<MedicineInfo | null> => {
		try {
			const encodedMedicineName = encodeURIComponent(medicineName) // Encode name for URL
			const response = await fetch(
				`${BASE_URL}/medicine-details/${encodedMedicineName}?user_id=${sessionData?.user.userId}`
			)

			if (!response.ok) {
				const errorData = await response.json()
				throw new Error(errorData.detail || 'Failed to fetch medicine details.')
			}
			const data: MedicineInfo = await response.json()
			return data
		} catch (error) {
			console.error('Error fetching medicine details from backend:', error)
			return null
		}
	}

	const handleConfirmCorrect = async (identifiedMedicineName: string) => {
		// Only proceed if userId is available
		if (!sessionData?.user.userId) {
			showMessageBox(
				'Please wait, user session is not ready yet. Try again in a moment.',
				true
			)
			return
		}

		showMessageBox('Analysis confirmed! Fetching medicine details...', false)
		setLoading(true)
		try {
			const details = await fetchMedicineDetails(identifiedMedicineName)
			if (details) {
				setCurrentMedicineInfo(details)
				setIsMedicineInfoModalOpen(true)
			} else {
				showMessageBox(
					'Could not retrieve detailed information for this medicine.',
					true
				)
			}
		} catch (error) {
			// @ts-expect-error : error type is unknown
			showMessageBox(`Failed to fetch medicine details: ${error.message}`, true)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='flex justify-center items-start min-h-screen p-5 box-border bg-gray-100'>
			<div className='container bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl flex flex-col gap-5'>
				<h1 className='text-3xl font-bold text-center text-gray-800'>
					Medicine Strip Analyzer
				</h1>

				<div className='flex flex-col gap-2'>
					<label htmlFor='imageUpload' className='text-gray-700 font-medium'>
						Upload Medicine Strip Image:
					</label>
					<p className='text-sm text-gray-500 mb-2'>
						For best results, please upload a clear photo of the **back** of the
						medicine strip, ensuring all text is visible.
					</p>
					<input
						type='file'
						id='imageUpload'
						accept='image/*'
						className='rounded-lg border-2 border-dashed border-gray-300 p-4 bg-gray-50 text-center cursor-pointer hover:border-gray-400'
						onChange={(e) => handleFileChange(e)}
					/>
				</div>

				<div className='flex justify-center items-center h-48 w-full bg-gray-50 border border-gray-200 rounded-lg overflow-hidden'>
					{previewImage ? (
						<Image
							src={previewImage as string}
							alt='Image Preview'
							className='max-h-full max-w-full object-contain'
							width={400}
							height={200}
						/>
					) : (
						<Image
							src='https://placehold.co/400x200/F0F4F8/1F2937?text=Upload+Back+of+Medicine+Strip' // New placeholder image
							alt='Placeholder: Back of medicine strip'
							className='w-full h-full object-cover text-gray-500 flex items-center justify-center text-center p-4'
							width={400}
							height={200}
						/>
					)}
				</div>

				<button
					onClick={handleAnalyze}
					disabled={loading || !selectedFile}
					className={`btn bg-indigo-600 text-white p-3 rounded-lg font-semibold cursor-pointer transition-colors duration-200 shadow-md hover:bg-indigo-700
            ${loading || !selectedFile ? 'opacity-50 cursor-not-allowed' : ''}`}
				>
					{loading ? (
						<div className='loading-spinner w-6 h-6 border-4 border-white border-l-indigo-300 rounded-full animate-spin mx-auto'></div>
					) : (
						'Analyze Image'
					)}
				</button>

				{errorMessage && (
					<div className='error-message text-red-600 font-medium mt-2'>
						{errorMessage}
					</div>
				)}

				{showFeedbackSection && llmAnalyzedResult && (
					<AnalysisFeedback
						analyzedResult={llmAnalyzedResult} // Pass the single LLM result
						onConfirmCorrect={handleConfirmCorrect}
						onRescanRequest={handleRescan}
					/>
				)}
			</div>

			{message && (
				<div
					className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-xl text-white z-50 transition-opacity duration-300 ${
						message.isError ? 'bg-red-600' : 'bg-blue-600'
					}`}
				>
					{message.text}
				</div>
			)}

			<MedicineInfoModal
				isOpen={isMedicineInfoModalOpen}
				onClose={() => setIsMedicineInfoModalOpen(false)} // Close modal function
				medicineInfo={currentMedicineInfo}
			/>
		</div>
	)
}
