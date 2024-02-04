import {FaGithub, FaNpm, FaStackOverflow, FaTelegram, FaVk} from "react-icons/fa6";
import React from "react";
import Link from "next/link";

export default function Socials({children}: { children: React.ReactNode }) {
    return (
        <div className='w-full flex flex-col justify-between items-center grow h-full pb-4'>
            {children}
            <div className="flex flex-row items-center justify-center gap-x-4">
                <Link href="/telegram" className='hover:text-gray-300 transition-all'>
                    <FaTelegram size={26}/>
                </Link>
                <Link href="/github" className='hover:text-gray-300 transition-all'>
                    <FaGithub size={26}/>
                </Link>
                <Link href="/stack-overflow" className='hover:text-gray-300 transition-all'>
                    <FaStackOverflow size={26}/>
                </Link>
                <Link href="/vk" className='hover:text-gray-300 transition-all'>
                    <FaVk size={26}/>
                </Link>
                <Link href="/npm" className='hover:text-gray-300 transition-all'>
                    <FaNpm size={26}/>
                </Link>
            </div>
        </div>
    )
}