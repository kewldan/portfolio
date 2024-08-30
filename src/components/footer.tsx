'use client';

import React from "react";
import {useTranslations} from "next-intl";
import Image from "next/image";

const socials = [
    {href: '/telegram', icon: '/logos/telegram.svg'},
    {href: '/vk', icon: '/logos/vk.svg'},
    {href: '/github', icon: '/logos/github.svg'},
    {href: '/npm', icon: '/logos/npm.svg'},
    {href: '/stack-overflow', icon: '/logos/stack-overflow.svg'},
    {href: '/x', icon: '/logos/x.svg'},
]

export default function Footer() {
    const t = useTranslations('Footer');

    return (
        <footer className="w-full p-4 px-4 flex flex-col md:flex-row gap-2 items-center justify-between max-w-[120rem]">
            <span className='text-muted-foreground w-full text-sm'>
                {t('copyright')}
            </span>
            <div className="flex flex-row items-center justify-center gap-x-2 w-full">
                {
                    socials.map(social => (
                        <a href={social.href} key={social.href}>
                            <Image src={social.icon} alt={social.icon} width={32} height={32} className="w-8 h-8"/>
                        </a>
                    ))
                }
            </div>
            <span className="w-full">

            </span>
        </footer>
    )
}