import { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import type { AppProps } from "next/app";
import Modal from "../Modal/Modal";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
    return (
        <div className="">
            <Header />
            <Modal />
            <div className="min-h-[64vh]">
                {children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout;