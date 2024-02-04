import React from "react";
import Image from "next/image"
import {BiLockAlt} from "react-icons/bi";
import {FaCoins, FaGithub, FaItchIo, FaLink, FaTelegram} from "react-icons/fa6";
import {GB, RU} from "country-flag-icons/react/3x2";
import {TbBrandCpp, TbBrandPython, TbBrandTypescript} from "react-icons/tb";
import {SiDocsdotrs} from "react-icons/si";

type ProjectStatus = {
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

function getConnection(link: string, icon: React.ReactNode, text: string) {
    return (
        <a className='btn w-full btn-primary' href={link}>
            {icon}
            {text}
        </a>
    )
}

export const connections = {
    github: (link: string) => getConnection(link, <FaGithub size={26}/>, 'Github'),
    itch: (link: string) => getConnection(link, <FaItchIo size={26}/>, 'Itch.io'),
    contact: getConnection('/telegram', <BiLockAlt size={26}/>, 'Contact me'),
    telegram: (link: string) => getConnection(link, <FaTelegram size={26}/>, 'Telegram'),
    open: (link: string) => getConnection(link, <FaLink size={26}/>, 'Open'),
    docs: (link: string) => getConnection(link, <SiDocsdotrs size={26}/>, 'Docs')
}

export default function ProjectCard({children, title, language, localization, image, connections, status, commercial}: {
    children: React.ReactNode,
    title: string,
    language: React.ReactNode,
    localization: React.ReactNode,
    image: string,
    connections: React.ReactNode[],
    status?: ProjectStatus,
    commercial?: boolean
}) {
    return (
        <div
            className={`flex flex-col items-center justify-between gap-y-4 w-full bg-[#15191e] p-4 rounded-xl`}>
            <div className="text-2xl flex flex-row flex-wrap items-center gap-x-4 justify-between w-full">
                <div className="flex flex-row items-center justify-center font-semibold">
                    {title}
                </div>

                <div className="flex flex-row items-center justify-center gap-x-2 text-sm">
                    {
                        status && (
                            <span style={{backgroundColor: status.color}} className='rounded-full px-4 py-0.5 text-center'>
                        {status.name}
                    </span>
                        )
                    }
                    {commercial && <div><FaCoins size={22}/></div>}
                    {language}
                    {localization}
                </div>
            </div>

            {
                image && <Image src={image} alt={title} width={500} height={280} className="rounded-xl object-fill h-full"/>
            }

            {children}

            <div className='flex flex-row items-center gap-x-2 w-full'>
                {connections.map((connection, index) =>
                    <div key={`${title}-connection-${index}`} className='grow w-full'>
                        {connection}
                    </div>
                )}
            </div>
        </div>
    )
}