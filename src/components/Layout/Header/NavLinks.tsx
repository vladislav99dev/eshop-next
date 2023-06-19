import { Ref } from "react"
import Link from 'next/link'
import { forwardRef } from "react"

const NavLinks = forwardRef((props: {
    styles: string
}, ref: Ref<HTMLDivElement> | null) => {
    return (
        <div ref={ref} className={`${props.styles} font-dynaPuff`}>
            <Link href={"#"}>Orders</Link>
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