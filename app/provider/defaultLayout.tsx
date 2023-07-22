'use client'
import { usePathname, useSearchParams } from 'next/navigation'

const pagesWithDefaultLayout:string[] = ['/', '/sobre']

const GetRoute: React.FC=()=>{
    const pathname:string = usePathname()
    const shouldUseDefaultLayout:boolean = pagesWithDefaultLayout.includes(pathname)
    return shouldUseDefaultLayout
}

export default GetRoute