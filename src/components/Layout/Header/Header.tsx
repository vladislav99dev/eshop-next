import { useRef, useState } from "react";
import { HearthIcon, MenuIcon, CartIcon, UserPlusIcon, UserMinusIcon } from "@/assets/icons/icons";
import Link from "next/link";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const mobileNavLinks = useRef<HTMLDivElement>(null)

    const mobileLinksStyle = 'bg-primary-dark-100 w-full flex flex-col items-center gap-y-4 left-0 absolute top-[-100%] transition-all ease-in-out duration-[1200ms] lg:hidden py-6'
    const desktopLinksStyle = 'hidden lg:flex gap-x-6 items-center text-white'

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

    return (
        <nav className="flex justify-between items-center bg-primary-dark-100 h-[80px] p-4">
            {/* WebsiteIcon */}
            <div className="w-[150px]">

            </div>

            <div ref={mobileNavLinks} className={`${mobileLinksStyle} font-dynaPuff`}>
                <Link href={"#"}>Orders</Link>
                <Link href={"#"}>Men</Link>
                <Link href={"#"}>Women</Link>
                <Link href={"#"}>Boys</Link>
                <Link href={"#"}>Girls</Link>
                <Link href={"#"}>SALE</Link>
                <Link href={"#"}>Brands</Link>
            </div>
            <div className={`${desktopLinksStyle}`}>
                <Link href={"#"}>Orders</Link>
                <Link href={"#"}>Men</Link>
                <Link href={"#"}>Women</Link>
                <Link href={"#"}>Boys</Link>
                <Link href={"#"}>Girls</Link>
                <Link href={"#"}>SALE</Link>
                <Link href={"#"}>Brands</Link>
            </div>

            <div className="flex items-center gap-x-4">
                <HearthIcon />
                <CartIcon />
                <div>
                    <UserPlusIcon />
                </div>
                <div onClick={mobileMenuHandler} className="lg:hidden cursor-pointer">
                    <MenuIcon />
                </div>
            </div>
        </nav>
    )
}


export default Header;


{/* <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-y-4 gap-x-10 p-4 text-xl lg:text-2xl">
<div className="w-[80px] h-[80px]"></div>
<ul className="flex flex-col lg:flex-row items-center gap-y-4 gap-x-8">
    <li>Orders</li>
    <li>Men</li>
    <li>Women</li>
    <li>Boys</li>
    <li>Girls</li>
    <li>SALE</li>
    <li>Brands</li>
</ul>

<div className="flex gap-x-2">
    <HearthIcon />
    <MenuIcon />
    <CartIcon />
</div>
<div className="flex flex-col lg:flex-row items-center gap-y-4 gap-x-4">
    <p>Login</p>
    <p>Register</p>
</div>
</div> */}