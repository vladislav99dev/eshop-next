export interface Modal {
    message: string,
    status: number,
    modalState: 'success' | 'failed' | 'none',
    buttonHandler: () => void,
    buttonText:string,
}