export interface MedicineRecord {
	id: string
	medicineName: string
	timestamp: Date // Using Date object for local display
	userId: string // Placeholder for user ID
	extractedText?: string[] // Full OCR text from the analysis
	potentialMedicineNames?: string[] // Names identified by the backend heuristic
	imageUrl?: string // Add imageUrl to the record interface
	// You could add more fields here like analysisConfig, confidence scores etc.
}

// Define the props interface for the MedicineRecordModal
export interface MedicineRecordModalProps {
	recordDetails: MedicineRecord
	onClose: () => void // Function to close the modal
}
