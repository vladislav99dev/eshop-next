export interface Modal {
    message: string,
    status: number,
    modalState: 'success' | 'failed' | 'none',
    cancelHandler: () => void,
    continueHandler: () => void,
}