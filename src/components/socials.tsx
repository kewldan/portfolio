import {FaGithub, FaNpm, FaStackOverflow, FaTelegram, FaVk} from "react-icons/fa6";
import React from "react";

export default function Socials({children}: { children: React.ReactNode }) {
    return (
        <div className='w-full flex flex-col justify-between items-center grow h-full pb-4'>
            {children}
            <div className="flex flex-row items-center justify-center text-neutral-600 gap-x-4">
                <a href="/telegram" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    <FaTelegram size={26}/>
                </a>
                <a href="/github" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    <FaGithub size={26}/>
                </a>
                <a href="/stack-overflow" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    <FaStackOverflow size={26}/>
                </a>
                <a href="/vk" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    <FaVk size={26}/>
                </a>
                <a href="/npm" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    <FaNpm size={26}/>
                </a>
            </div>
        </div>
    )
}