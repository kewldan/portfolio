'use client';

import React from "react";
import Image from "next/image"
import {
    ProjectLanguage,
    projectLanguages,
    ProjectLocale,
    projectLocales,
    ProjectStatus,
    projectStatusColors
} from "@/app/projects/types";
import SegmentedProgress from "@/components/segmentedProgress";
import {twMerge} from "tailwind-merge";

const phrases: Record<string, string> = {
    0: 'Easy peasy',
    1: 'Easy',
    2: 'Normal',
    3: 'Quite difficult',
    4: 'Hard',
    5: 'Impossible',
}

export type ProjectCardItem = {
    title: string;
    language: ProjectLanguage;
    localization: ProjectLocale;
    image: string;
    difficulty: number;
    description: React.ReactNode;
    connections: React.ReactNode[];
    status: ProjectStatus;
    cost?: number;
    gold?: boolean;
}

export default function ProjectCard({item}: { item: ProjectCardItem }) {
    return (
        <div
            className={twMerge(`flex flex-col items-center justify-between gap-y-4 w-full outline outline-neutral-300 dark:outline-neutral-900 outline-1 p-4 rounded-xl`, item.gold ? 'outline-yellow-500 outline-2 dark:outline-yellow-500' : '')}>
            <div className="text-2xl flex flex-row flex-wrap items-center gap-x-4 justify-between w-full">
                <div className="flex flex-row items-center justify-center font-semibold">
                    {item.title}
                </div>

                <div className="flex flex-row items-center justify-center gap-x-2 text-sm">
                    {
                        item.status && (
                            <span style={{backgroundColor: projectStatusColors[item.status]}}
                                  className='rounded-full px-4 py-0.5 text-center text-white font-bold select-none'>
                        {item.status.toUpperCase()}
                    </span>
                        )
                    }
                    {projectLanguages[item.language]}
                    {projectLocales[item.localization]}
                    <span className="font-medium tracking-tighter text-lg">{item.cost && `$${item.cost}`}</span>
                </div>
            </div>

            {
                item.image &&
                <Image src={item.image} alt={item.title} width={500} height={280} className="rounded-xl w-full"/>
            }

            {item.description}

            <div className='w-full justify-between flex flex-col items-center gap-4'>
                <div className='flex flex-col items-start w-full gap-0.5'>
                    <span>Difficulty</span>
                    <SegmentedProgress value={item.difficulty} phrases={phrases} invertColor={true}/>
                </div>

                <div className='flex flex-row items-center gap-x-2 w-full'>
                    {item.connections.map((connection, index) =>
                        <div key={`${item.title}-connection-${index}`} className='grow w-full'>
                            {connection}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}