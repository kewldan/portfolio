import {GB, RU} from "country-flag-icons/react/3x2";
import React from "react";
import Image from "next/image";
import {ProjectLanguage, ProjectLocalization, ProjectStatus} from "@prisma/client";

export const projectStatusColors: Record<ProjectStatus, `#${string}`> = {
    PAUSED: '#af782d',
    WIP: '#32a229',
    RELEASED: '#661bb7',
    ABANDONED: '#149b9b',
    INTERRUPTED: '#a93030',
    PLANNED: '#FFFFFF'
}

export const projectLocales: Record<ProjectLocalization, React.ReactNode> = {
    'RU': <RU className='w-8 rounded-sm'/>,
    'EN': <GB className='w-8 rounded-sm'/>
}

export const projectLanguages: Record<ProjectLanguage, React.ReactNode> = {
    'PYTHON': <Image src="/icons/langs/python.svg" width={26} height={26} alt="Python logo"/>,
    'CPP': <Image src="/icons/langs/cpp.svg" width={26} height={26} alt="C++ logo"/>,
    'TYPESCRIPT': <Image src="/icons/langs/typescript.svg" width={26} height={26} alt="Typescript logo"/>
}
