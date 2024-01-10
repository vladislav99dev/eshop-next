import { Ref, forwardRef } from "react"
import Link from 'next/link'

const NavLinks = forwardRef((props: {
    isMobileNavigation: boolean,
    isMobileMenuOpen: boolean,
}, ref: Ref<HTMLDivElement>) => {

    const mobileLinksStyle = `${props.isMobileMenuOpen ? 'top-[80px]' : 'top-[-100%]'} 
    bg-primary-dark-800 w-full flex flex-col items-center gap-y-6 left-0 absolute -z-10
    top-[-100%] transition-all ease-in-out duration-500 lg:hidden py-6 text-xl text-white`

    const desktopLinksStyle = 'hidden lg:flex gap-x-6 items-center text-white text-2xl'


    return (
        <div ref={ref} className={`${props.isMobileNavigation ? mobileLinksStyle : desktopLinksStyle} font-dynaPuff`}>
            <Link href={"#"}>Men</Link>
            <Link href={"#"}>Women</Link>
            <Link href={"#"}>Boys</Link>
            <Link href={"#"}>Girls</Link>
            <Link className="text-primary-100" href={"#"}>SALE</Link>
            <Link href={"#"}>Brands</Link>
        </div>
    )
})

export default NavLinks