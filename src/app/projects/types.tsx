import {GB, RU} from "country-flag-icons/react/3x2";
import {TbBrandCpp, TbBrandPython, TbBrandTypescript} from "react-icons/tb";
import React from "react";


export type ProjectStatus = 'paused' | 'in-dev' | 'released' | 'maintained' | 'closed';

export const projectStatusColors: Record<ProjectStatus, `#${string}`> = {
    paused: '#af782d',
    "in-dev": '#32a229',
    released: '#661bb7',
    maintained: '#149b9b',
    closed: '#a93030'
}

export type ProjectLocale = 'ru' | 'en';

export const projectLocales: Record<ProjectLocale, React.ReactNode> = {
    'ru': <RU className='w-8 rounded-sm'/>,
    'en': <GB className='w-8 rounded-sm'/>
}

export type ProjectLanguage = 'python' | 'cxx' | 'ts';

export const projectLanguages: Record<ProjectLanguage, React.ReactNode> = {
    'python': <TbBrandPython size={26}/>,
    'cxx': <TbBrandCpp size={26}/>,
    'ts': <TbBrandTypescript size={26}/>
}
