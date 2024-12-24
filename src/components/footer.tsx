'use client';

import React, {ReactNode} from "react";
import {useTranslations} from "next-intl";
import {FaGithub, FaNpm, FaStackOverflow, FaTelegram, FaTwitter, FaVk} from "react-icons/fa6";

const socials: { href: string; icon: ReactNode }[] = [
    {href: '/telegram', icon: <FaTelegram size={24}/>},
    {href: '/vk', icon: <FaVk size={24}/>},
    {href: '/github', icon: <FaGithub size={24}/>},
    {href: '/npm', icon: <FaNpm size={24}/>},
    {href: '/stack-overflow', icon: <FaStackOverflow size={24}/>},
    {href: '/x', icon: <FaTwitter size={24}/>},
]

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer
            className="w-full flex justify-center border-t-[1px]">
            <div className="max-w-7xl w-full flex flex-col md:flex-row gap-2 items-center justify-between p-4 px-4">
                <span className='text-muted-foreground w-full text-sm'>
                {t('copyright', {year: new Date().getFullYear()})}
            </span>
                <div className="flex flex-row items-center justify-center gap-1">
                    {
                        socials.map(social => (
                            <a href={social.href} key={social.href}
                               className="transition-colors hover:text-muted-foreground p-1">
                                {social.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}