'use client';

import React from "react";
import {Button} from "./ui/button";
import {signIn, signOut, useSession} from "next-auth/react";
import {useTranslations} from "next-intl";

export default function Footer() {
    const t = useTranslations('Footer');
    const {data: session} = useSession();

    return (
        <footer className="w-full p-4 px-20 flex flex-row flex-wrap gap-2 items-center justify-between max-w-[120rem]">
            <span className='dark:text-neutral-700'>
                {t('copyright')}
            </span>
            <div className="flex flex-row items-center justify-center text-neutral-600 gap-x-4">
                <a href="/telegram" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    {/*<FaTelegram size={26}/>*/}
                </a>
                <a href="/github" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    {/*<Github size={26}/>*/}
                </a>
                <a href="/stack-overflow" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    {/*<FaStackOverflow size={26}/>*/}
                </a>
                <a href="/vk" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    {/*<FaVk size={26}/>*/}
                </a>
                <a href="/npm" className='hover:text-gray-900 dark:hover:text-gray-300 transition-colors'>
                    {/*<FaNpm size={26}/>*/}
                </a>
            </div>
            {
                session ? (
                    <Button variant="link" onClick={() => signOut()}>
                        {t('sign-out')}
                    </Button>
                ) : (
                    <Button variant="link" onClick={() => signIn()}>
                        {t('sign-in')}
                    </Button>
                )
            }
        </footer>
    )
}