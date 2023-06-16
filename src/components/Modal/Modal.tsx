import React from 'react'
import { useModalContext } from '@/context/ModalContext'
import { CloseIcon, BigCloseIcon, BigSuccessIcon } from "@/assets/icons/icons"

const Modal = () => {
    const { state, resetModal } = useModalContext();
    const closeModal = (e: React.MouseEvent) => {
        e.currentTarget.parentElement
            ?.parentElement?.classList.remove('!translate-x-[-50%]');
        setTimeout(() => {
            resetModal()
        }, 400)
    }
    const color = `${state.modalState === 'success' ? 'bg-green-400' : 'bg-red-400'}`
    const btnStyles = `rounded-2xl py-2 px-12 text-base text-white font-semibold ${color}`

    return (
        <div className={`h-[400px] w-[350px]
        sm:h-[400px] sm:w-[400px]
        md:h-[400px] md:w-[600px] 
        top-[50vh] left-[50%]
        absolute  translate-y-[-50%] translate-x-[-100vw]
        flex flex-col items-center
        rounded-md
        shadow-2xl
        transition ease-in-out duration-700
         ${state.modalState !== 'none' && '!translate-x-[-50%]'}
        `}>
            <div className={`flex flex-col w-full pt-4 pb-6 rounded-t-md ${color}`}>
                <div onClick={closeModal} className='self-end px-4 cursor-pointer'>
                    <CloseIcon />
                </div>
                <div className='self-center'>
                    {state.modalState === "failed" &&
                        <BigCloseIcon />
                    }
                    {state.modalState === "success" &&
                        <BigSuccessIcon />
                    }
                </div>
            </div>
            <div className='flex flex-col justify-center items-center my-6 gap-y-4'>
                <div className='flex justify-center items-center gap-x-2 text-4xl font-semibold text-gray-700'>
                    {state.modalState === "failed" &&
                        <p className=''>Ooops!</p>
                    }
                    <p>{state.status}</p>
                </div>
                <h3 className='text-2xl'>{state.message}</h3>

            </div>
            <div className='flex gap-x-8'>
                <button className={`${btnStyles} `}>{state.buttonText}</button>
            </div>
        </div>
    )
}

export default Modal