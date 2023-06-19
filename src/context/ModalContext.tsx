import { createContext, useContext, useReducer } from "react";
import { Modal } from "@/interfaces/Modal";
import { Action } from "@/interfaces/Action";

interface ModalAction extends Action {
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
    buttonHandler: () => { },
    buttonText: "",
}

type Props = {
    children: JSX.Element | JSX.Element[]
}

const reducerFn = (state: Modal, action: ModalAction) => {
    const { message, status, modalState, buttonHandler, buttonText }
        = action.payload;

    switch (action.type) {
        case "success":
        case "failed":
            return {
                message: message,
                status: status,
                modalState: modalState,
                buttonHandler: buttonHandler,
                buttonText: buttonText
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
        dispatch({ type: "failed", payload: data })
    }
    const resetModal = () => {
        dispatch({ type: "", payload: initialState })
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