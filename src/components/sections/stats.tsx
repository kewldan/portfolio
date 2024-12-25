import React from "react";
import {getTranslations} from "next-intl/server";

export default async function Stats() {
    const t = await getTranslations('Stats');

    return (
        <div className="max-w-7xl w-full p-4">
            <section
                className='outline-neutral-700 flex flex-col items-center p-4 justify-between w-full gap-4 border rounded-2xl'>
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl lg:self-start">
                    {t('title')}
                </h1>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://raw.githubusercontent.com/kewldan/kewldan/main/github-metrics.svg"
                     alt='statistics svg'
                     className="max-w-md w-full"/>
            </section>

        </div>
    )
}