import { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import type { AppProps } from "next/app";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}


export default Layout;