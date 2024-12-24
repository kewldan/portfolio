import React from "react";
import {getTranslations} from "next-intl/server";

export default async function Stats() {
    const t = await getTranslations('Stats');

    return (
        <section className='outline-neutral-700 flex flex-col items-center p-8 justify-between w-full max-w-7xl gap-4'>
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl lg:self-start">
                {t('title')}
            </h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://raw.githubusercontent.com/kewldan/kewldan/main/github-metrics.svg" alt='statistics svg'
                 className="max-w-md w-full"/>
        </section>
    )
}