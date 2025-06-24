export interface MedicineInfo {
	overview: string
	commonName: string
	commonBrands: string[]
	commonlyKnownAs: string[]
	uses: string[]
	dosesCommonlyGiven: string[]
	sideEffects: string[]
	averagePrice: string
	importantNotes: string[]
}

export interface MedicineInfoModalProps {
	isOpen: boolean
	onClose: () => void
	medicineInfo: MedicineInfo | null
}

export interface AnalysisFeedbackProps {
	analyzedResult: {
		medicineName: string
		probability: number
	} | null
	onConfirmCorrect: (medicineName: string) => void
	onRescanRequest: () => void
}
