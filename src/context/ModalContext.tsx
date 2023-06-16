import { createContext, useContext, useReducer } from "react";
import { Modal } from "@/interfaces/Modal";

interface Action {
    type: string,
    payload: Modal
}

interface ModalManagment {
    state: Modal,
    setSuccess: (data: Modal) => void,
    setFailed: (data: Modal) => void,
    resetModal: () => void,
}

const initialState: Modal = {
    message: "",
    status: 0,
    modalState: "none",
    cancelHandler: () => { },
    continueHandler: () => { },
}

type Props = {
    children: JSX.Element | JSX.Element[]
}

const reducerFn = (state: Modal, action: Action) => {
    const { message, status, modalState, cancelHandler, continueHandler }
        = action.payload;

    switch (action.type) {
        case "success" || "failed" || "none":
            return {
                message: message,
                status: status,
                modalState: modalState,
                cancelHandler: cancelHandler,
                continueHandler: continueHandler
            }
        default:
            return initialState
    }
}

const ModalContext = createContext<ModalManagment>({
    state: initialState,
    setFailed: () => { },
    setSuccess: () => { },
    resetModal: () => { },

});

export const ModalContextWrapper = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducerFn, initialState)

    const setSuccess = (data: Modal) => {
        dispatch({ type: "success", payload: data })
    }
    const setFailed = (data: Modal) => {
        dispatch({ type: "success", payload: data })
    }
    const resetModal = () => {
        dispatch({ type: "resetModal", payload: initialState })
    }

    return (
        <ModalContext.Provider value={{ state, setSuccess, setFailed, resetModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModalContext() {
    return useContext(ModalContext)
}