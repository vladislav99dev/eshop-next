import { useRef, useState, createRef, useReducer } from "react";
import { HearthIcon, MenuIcon, CartIcon, UserPlusIcon, UserMinusIcon, MenuCloseIcon } from "@/assets/icons/icons";

import { Action } from "@/interfaces/Action";
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";

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

const reducerFn = (state: HeaderState, action: Action) => {
    switch (action.type) {
        case "cart":
            return {
                ...initialState,
                isCartOpen: !state.isCartOpen,
            }
        case "favourites":
            return {
                ...initialState,
                isFavouritesOpen: !state.isFavouritesOpen,
            }
        case "user":
            return {
                ...initialState,
                isUserLinksOpen: !state.isUserLinksOpen,
            }
        case "mobileMenu":
            return {
                ...initialState,
                isMobileMenuOpen: !state.isMobileMenuOpen,
            }
        default:
            return initialState
    }
}

const Header = () => {
    const [headertState, headerReducer] = useReducer(reducerFn, initialState);

    const mobileNavLinks = createRef<HTMLDivElement>()
    const userLinks = createRef<HTMLDivElement>()

    const openCart = () => {
        headerReducer({ type: 'cart' })
    }
    const openFavourites = () => {
        headerReducer({ type: 'favourites' })
    }
    const openUserLinks = () => {
        headerReducer({ type: 'user' })
    }
    const openMobileLinks = () => {
        headerReducer({ type: 'mobileMenu' })
    }
    const closeAll = () => {
        headerReducer({ type: '' })
    }

    return (
        <nav className="flex justify-between items-center bg-primary-dark-800 h-[80px] p-4">
            {/* WebsiteIcon */}
            <div className="w-[150px]">

            </div>

            <NavLinks
                ref={mobileNavLinks}
                isMobileNavigation={true}
                isMobileMenuOpen={headertState.isMobileMenuOpen}
            />
            <NavLinks ref={mobileNavLinks} isMobileNavigation={false} isMobileMenuOpen={null} />


            <div className="flex items-center gap-x-4 mr-4">
                <HearthIcon />
                <CartIcon />
                <div onClick={openUserLinks}>
                    {headertState.isUserLinksOpen ? <UserMinusIcon /> : <UserPlusIcon />}

                </div>
                <div onClick={openMobileLinks} className="lg:hidden cursor-pointer">
                    {headertState.isMobileMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
                </div>
            </div>

            <UserLinks ref={userLinks} isUserLinksOpen={headertState.isUserLinksOpen} />
        </nav>
    )
}

export default Header;