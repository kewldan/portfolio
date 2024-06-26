import {GB, RU} from "country-flag-icons/react/3x2";
import {TbBrandCpp, TbBrandPython, TbBrandTypescript} from "react-icons/tb";
import React from "react";

export type ProjectStatus = {
    name: string,
    color: `#${string}`
}

export const PAUSED: ProjectStatus = {name: 'Paused', color: '#af782d'};
export const DEVELOPMENT: ProjectStatus = {name: 'In development', color: '#32a229'};
export const RELEASED: ProjectStatus = {name: 'Released', color: '#661bb7'};
export const MAINTAINED: ProjectStatus = {name: 'Maintained', color: '#149b9b'};
export const CLOSED: ProjectStatus = {name: 'Closed', color: '#a93030'};

export const RUS = <RU className='w-8 rounded-sm'/>;
export const ENG = <GB className='w-8 rounded-sm'/>;

export const PYTHON = <TbBrandPython size={26}/>;
export const CXX = <TbBrandCpp size={26}/>;
export const TS = <TbBrandTypescript size={26}/>;