import { forwardRef } from "react"
import { Ref } from "react"
import Link from "next/link"

const UserLinks = forwardRef((props: { isUserLinksOpen: boolean }, ref: Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} className={`absolute transition-all w-full left-0
        ease-in-out duration-[400ms] flex flex-col items-center py-6 text-xl text-white font-dynaPuff gap-y-6 
        ${props.isUserLinksOpen ? 'top-[80px]' : 'top-[-100%]'}
        bg-primary-dark-800
        `}>
            <Link href={""}>Register</Link>
            <Link href={"/users/login"}>Login</Link>
        </div>
    )
})

export default UserLinks
