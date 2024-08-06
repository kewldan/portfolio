import React from "react";
import Image from "next/image";
import {StackCard} from "./stackCard";
import {useTranslations} from "next-intl";
import {Progress} from "@/components/ui/progress";
import {technologies} from "@/lib/technologies";

const languages = [
    {name: 'Python', icon: 'python.svg', value: 5},
    {name: 'Typescript', icon: 'typescript.svg', value: 5},
    {name: 'C++', icon: 'cpp.svg', value: 3},
    {name: 'Java', icon: 'java.svg', value: 2},
    {name: 'Kotlin', icon: 'kotlin.svg', value: 1},
]

export default function Skills() {
    const t = useTranslations('Skills');

    return (
        <section
            className='w-full min-h-[40rem] relative'>
            <div className="p-4 grid grid-cols-1 xl:grid-cols-4">
                <div className="p-4">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {t('hard')}
                    </h1>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                        {t('hard-about')}
                    </h3>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-3">
                        {
                            languages.sort((a, b) => b.value - a.value).map(lang => (
                                <li key={lang.name}>
                                    <div className="flex flex-col items-center w-full gap-1">
                                        <div className='flex flex-row items-center w-full gap-1 px-1'>
                                            <Image src={`/icons/langs/${lang.icon}`} alt={`${lang.name} logo`}
                                                   width={22}
                                                   height={22}/>
                                            <span>{lang.name}</span>
                                        </div>
                                        <Progress value={lang.value * 20} max={100}/>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-4 h-full">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {t('soft')}
                    </h1>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        {
                            t('soft-skills').split(',').map(v => (
                                <li key={v}>{v}</li>
                            ))
                        }
                    </ul>
                    <span className='text-xs'>{t('soft-more')}</span>
                </div>
                <div className="p-4 xl:col-span-2 flex flex-col gap-8">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {t('tech')}
                    </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center">
                        {
                            Object.keys(technologies).map(k => technologies[k]).sort((a, b) => a.type.localeCompare(b.type)).map(item => (
                                <StackCard item={item} key={item.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <h1 className="-z-10 text-6xl font-extrabold bottom-4 left-4 tracking-tight lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background hidden lg:block select-none">
                {t('love')}
            </h1>
        </section>
    )
}