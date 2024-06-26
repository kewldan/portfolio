'use client';

import React from "react";
import Image from "next/image"
import {FaCoins} from "react-icons/fa6";
import {ProjectStatus} from "@/app/projects/types";


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
            className={`flex flex-col items-center justify-between gap-y-4 w-full outline outline-neutral-300 dark:outline-neutral-900 outline-1 p-4 rounded-xl`}>
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
                image &&
                <Image src={image} alt={title} width={500} height={280} className="rounded-xl w-full"/>
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