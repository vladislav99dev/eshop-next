import { useRef, useState, createRef } from "react";
import { HearthIcon, MenuIcon, CartIcon, UserPlusIcon, UserMinusIcon, MenuCloseIcon } from "@/assets/icons/icons";

import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [areUserLinksOpen, setAreUserLinksOpen] = useState(false)

    const mobileNavLinks = useRef<HTMLDivElement>(null)
    const userLinks = createRef<HTMLDivElement>()

    const mobileLinksStyle = 'bg-primary-dark-800 w-full flex flex-col items-center gap-y-6 left-0 absolute top-[-100%] transition-all ease-in-out duration-[800ms] lg:hidden py-6 text-xl text-white'
    const desktopLinksStyle = 'hidden lg:flex gap-x-6 items-center text-white text-2xl'

    const mobileMenuHandler = (): void => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false)
            mobileNavLinks.current?.classList.remove('!top-[80px]')
        }
        if (!isMobileMenuOpen) {
            setIsMobileMenuOpen(true)
            mobileNavLinks.current?.classList.add('!top-[80px]')
        }
    }

    const userLinksHandler = (): void => {
        if (areUserLinksOpen) {
            setAreUserLinksOpen(false)
        }
        if (!areUserLinksOpen) {
            setAreUserLinksOpen(true)
        }
    }

    return (
        <nav className="flex justify-between items-center bg-primary-dark-800 h-[80px] p-4">
            {/* WebsiteIcon */}
            <div className="w-[150px]">

            </div>

            <NavLinks ref={mobileNavLinks} styles={mobileLinksStyle} />
            <NavLinks ref={null} styles={desktopLinksStyle} />


            <div className="flex items-center gap-x-4 mr-4">
                <HearthIcon />
                <CartIcon />
                <div onClick={userLinksHandler}>
                    {areUserLinksOpen ? <UserMinusIcon /> : <UserPlusIcon />}

                </div>
                <div onClick={mobileMenuHandler} className="lg:hidden cursor-pointer">
                    {isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
                </div>
            </div>

            <UserLinks ref={userLinks} />
        </nav>
    )
}

export default Header;