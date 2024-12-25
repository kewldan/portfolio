import React from "react";
import Image from "next/image";
import {StackCard} from "./stackCard";
import {technologies, Technology} from "@/lib/technologies";
import {getTranslations} from "next-intl/server";

const languages = [
    {name: 'Python', icon: 'python.svg', value: 5},
    {name: 'Typescript', icon: 'typescript.svg', value: 5},
    {name: 'C++', icon: 'cpp.svg', value: 3},
    {name: 'Java', icon: 'java.svg', value: 2},
    {name: 'Kotlin', icon: 'kotlin.svg', value: 1},
]

export default async function Skills() {
    const t = await getTranslations('Skills');

    return (
        <section
            className='w-full max-w-7xl relative'>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-2xl">
                    <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                        {t('hard')}
                    </h1>
                    <ul className="my-6 ml-6 list-disc space-y-2">
                        {
                            languages.sort((a, b) => b.value - a.value).map(lang => (
                                <li key={lang.name}>
                                    <Image src={`/icons/langs/${lang.icon}`} alt={`${lang.name} logo`}
                                           width={24}
                                           height={24} className="w-6 h-6 inline ml-1"/>
                                    <span className="ml-2 text-lg font-bold">{lang.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-4 border rounded-2xl">
                    <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                        {t('soft')}
                    </h1>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        {
                            t('soft-skills').split(',').map(v => (
                                <li key={v}>{v}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-4 xl:col-span-2 flex flex-col gap-8 border rounded-2xl md:col-span-2">
                    <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
                        {t('tech')}
                    </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center">
                        {
                            Object.keys(technologies).map(k => technologies[k as Technology]).sort((a, b) => a.type.localeCompare(b.type)).map(item => (
                                <StackCard item={item} key={item.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}