import React from "react";
import {useTranslations} from "next-intl";

export default function Stats() {
    const t = useTranslations('Stats');

    return (
        <section className='outline-neutral-700 flex flex-col items-center p-8 justify-between w-full lg:w-[80%] gap-4'>
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl lg:self-start">
                {t('title')}
            </h1>
            <img src="https://raw.githubusercontent.com/kewldan/kewldan/main/github-metrics.svg" alt='statistics svg'
                 className="max-w-md w-full"/>
        </section>
    )
}