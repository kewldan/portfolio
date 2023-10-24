import React from "react";
import Image from "next/image"
import {BiLockAlt} from "react-icons/bi";
import {FaGithub, FaItchIo, FaLink, FaTelegram} from "react-icons/fa6";
import {GB, RU} from "country-flag-icons/react/3x2";
import {TbBrandCpp, TbBrandPython, TbBrandTypescript} from "react-icons/tb";

export const RUS = (<div className='tooltip' data-tip='Russian only'><RU className='w-8 rounded-sm'/></div>);
export const ENG = (<div className='tooltip' data-tip='English only'><GB className='w-8 rounded-sm'/></div>);

export const PYTHON = (<div className='tooltip' data-tip='Python 3'><TbBrandPython size={26}/></div>)
export const CXX = (<div className='tooltip' data-tip='C++ 20'><TbBrandCpp size={26}/></div>)
export const TS = (<div className='tooltip' data-tip='TypeScript'><TbBrandTypescript size={26}/></div>)

export function getGithubConnection(link: string) {
    return (
        <a className='btn grow btn-primary' href={link}>
            <FaGithub size={26}/>
            Github
        </a>
    )
}

export function getItchConnection(link: string) {
    return (
        <a className='btn grow btn-primary' href={link}>
            <FaItchIo size={26}/>
            Itch.IO
        </a>
    )
}

export function getContactConnection() {
    return (
        <a className='btn grow btn-primary' href='/telegram'>
            <BiLockAlt size={26}/>
            Contact me
        </a>
    )
}

export function getTelegramConnection(link: string) {
    return (
        <a className='btn grow btn-primary' href={link}>
            <FaTelegram size={26}/>
            Telegram
        </a>
    )
}

export function getOpenConnection(link: string) {
    return (
        <a className='btn grow btn-primary' href={link}>
            <FaLink size={26}/>
            Open
        </a>
    )
}

export default function ProjectCard({children, title, language, localization, image, connections}: {
    children: React.ReactNode,
    title: string,
    language: React.ReactNode,
    localization: React.ReactNode,
    image: string,
    connections: React.ReactNode[]
}) {
    return (
        <div
            className={`flex flex-col items-center justify-between gap-y-4 max-w-lg w-full bg-[#15191e] p-4 rounded-xl`}>
            <div className="text-2xl flex flex-row flex-wrap items-center gap-x-4 justify-between w-full">
                <div className="flex flex-row items-center justify-center font-semibold">
                    {title}
                </div>

                <div className="flex flex-row items-center justify-center gap-x-2 text-sm">
                    {language}
                    {localization}
                </div>
            </div>

            {
                image ? (<Image src={image} alt={title} width={1024} height={400} className="rounded-xl"/>) : (
                    <h1></h1>)
            }

            {children}

            <div className='flex flex-row items-center gap-x-2 w-full'>
                {connections.map((connection) =>
                    connection
                )}
            </div>
        </div>
    )
}