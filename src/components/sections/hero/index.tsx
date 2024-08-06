import React from 'react';
import PhotoGallery from "./photoGallery";
import {useTranslations} from "next-intl";


export default function Hero() {
    const t = useTranslations('Hero');

    return (
        <main className='flex flex-col items-center justify-between gap-y-3 p-8 w-full relative screen-slide'>
            <h1 className="-z-10 text-6xl font-extrabold select-none text-right tracking-tight self-end lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background max-w-3xl">
                {t('passion')}
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <PhotoGallery photos={[
                    '/photos/1.jpg',
                    '/photos/2.jpg',
                    '/photos/3.jpg',
                    '/photos/4.jpg',
                ]} width={480} height={640}/>

                <div className="flex flex-col items-center grow">
                    <h1 className="text-3xl md:text-5xl font-medium">👋{t('hello')}</h1>
                    <span className="mt-10 text-md md:text-xl max-w-lg">
                        {t('about')}
                    </span>
                </div>
            </div>
            <h1 className="-z-10 text-6xl font-extrabold select-none tracking-tight self-start lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background max-w-3xl">
                {t('love')}
            </h1>
        </main>
    )
}