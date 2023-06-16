import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useModalContext } from '@/context/ModalContext'

import { Modal } from '@/interfaces/Modal'

import { ApiProductResponse } from '@/interfaces/Response'
import { Product } from '@/interfaces/Product'


// import { Response } from '../api/products'

// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

function setError(message: string, status: number): Modal {
    let errData: Modal;
    errData = {
        message: message,
        status: status,
        modalState: "failed",
        cancelHandler: () => {
            console.log("oh shit")
        },
        continueHandler: () => {
            console.log("oh shit")
        }
    }
    return errData
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const { setFailed, resetModal } = useModalContext();

    useEffect(() => {
        const controller = new AbortController();
        controller.signal

        fetch('/api/products')
            .then((response: Body) => response.json())
            .then((response: ApiProductResponse) => {
                if (response.products.length) setProducts(response.products)
                if (response.error) {
                    throw { message: response.error.message, status: response.error.status }
                }
            })
            .catch(err => {
                const errData = setError(err.message, err.status);
                setFailed(errData)
            });

        return () => {
            controller.abort()
            resetModal()
        };
    }, [])
    return (
        <>
            <Head>
                <title>Products</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className='text-4xl'>Products</h1>
        </>
    )
}