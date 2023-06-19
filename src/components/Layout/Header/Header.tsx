import { useRef, useState, createRef, useReducer } from "react";
import { HearthIcon, MenuIcon, CartIcon, UserPlusIcon, UserMinusIcon, MenuCloseIcon } from "@/assets/icons/icons";

import { Action } from "@/interfaces/Action";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";

interface HeaderAction extends Action {
    payload: HeaderState
}

interface HeaderState {
    isCartOpen: boolean,
    isFavouritesOpen: boolean,
    isUserLinksOpen: boolean,
    isMobileMenuOpen: boolean,
}

const initialState: HeaderState = {
    isCartOpen: false,
    isFavouritesOpen: false,
    isUserLinksOpen: false,
    isMobileMenuOpen: false,
}

const reducerFn = (state: HeaderState, action: HeaderAction) => {
    switch (action.type) {
        case "cart":
        case "favourites":
        case "user":
        case "mobileMenu":
            return {
                ...action.payload
            }
        default:
            return initialState
    }
}

const Header = () => {
    const [headertState, headerReducer] = useReducer(reducerFn, initialState);

    const mobileNavLinks = createRef<HTMLDivElement>()
    const userLinks = createRef<HTMLDivElement>()

    const removeStyles = () => {
        mobileNavLinks.current?.classList.remove('!top-[80px]')
    }

    const openCart = () => {
        removeStyles()
        headerReducer({ type: 'cart', payload: { ...initialState, isCartOpen: true } })
    }
    const openFavourites = () => {
        removeStyles()
        headerReducer({ type: 'favourites', payload: { ...initialState, isFavouritesOpen: true } })
    }
    const openUserLinks = () => {
        removeStyles()
        headerReducer({ type: 'user', payload: { ...initialState, isUserLinksOpen: true } })
    }
    const openMobileLinks = () => {
        removeStyles()
        headerReducer({ type: 'mobileMenu', payload: { ...initialState, isMobileMenuOpen: true } })
    }
    const closeAll = () => {
        removeStyles()
        headerReducer({ type: '', payload: { ...initialState } })
    }

    const mobileLinksStyle = 'bg-primary-dark-800 w-full flex flex-col items-center gap-y-6 left-0 absolute top-[-100%] transition-all ease-in-out duration-[400ms] lg:hidden py-6 text-xl text-white'
    const desktopLinksStyle = 'hidden lg:flex gap-x-6 items-center text-white text-2xl'

    const mobileMenuHandler = (): void => {
        if (headertState.isMobileMenuOpen) {
            closeAll()
            mobileNavLinks.current?.classList.remove('!top-[80px]')
        }
        if (!headertState.isMobileMenuOpen) {
            openMobileLinks()
            mobileNavLinks.current?.classList.add('!top-[80px]')
        }
    }

    const userLinksHandler = (): void => {
        if (headertState.isUserLinksOpen) {
            closeAll()
        }
        if (!headertState.isUserLinksOpen) {
            openUserLinks()
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
                    {headertState.isUserLinksOpen ? <UserMinusIcon /> : <UserPlusIcon />}

                </div>
                <div onClick={mobileMenuHandler} className="lg:hidden cursor-pointer">
                    {headertState.isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
                </div>
            </div>

            <UserLinks ref={userLinks} isUserLinksOpen={headertState.isUserLinksOpen} />
        </nav>
    )
}

export default Header;