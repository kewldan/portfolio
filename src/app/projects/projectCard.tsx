'use client';

import React from "react";
import Image from "next/image"
import {projectLanguages, projectLocales, projectStatusColors} from "@/app/projects/types";
import SegmentedProgress from "@/components/segmentedProgress";
import {twMerge} from "tailwind-merge";
import {useSession} from "next-auth/react";
import ProjectModal from "@/app/projects/projectModal";
import {Project, ProjectConnection} from "@prisma/client";
import {Trash} from "lucide-react";
import {Button} from "@/components/ui/button";
import {deleteProject} from "@/lib/api";

const phrases: Record<string, string> = {
    0: 'Easy peasy',
    1: 'Easy',
    2: 'Normal',
    3: 'Quite difficult',
    4: 'Hard',
    5: 'Impossible',
}

export default function ProjectCard({item}: { item: Project & { connections: ProjectConnection[] } }) {
    const session = useSession();

    return (
        <div
            className={twMerge(`flex flex-col items-center justify-between gap-y-4 w-full outline outline-neutral-300 dark:outline-neutral-900 outline-1 p-4 rounded-xl min-w-[25rem]`, item.primary ? 'outline-yellow-500 outline-2 dark:outline-yellow-500' : '')}>
            <div className="text-2xl flex flex-row items-center gap-x-4 justify-between w-full">
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
                    {/*<span className="font-medium tracking-tighter text-lg">{`$${item.cost}`}</span>*/}
                    {
                        session.status === 'authenticated' && <ProjectModal item={item}/>
                    }
                    {
                        session.status === 'authenticated' && (
                            <Button size="icon" variant="destructive" onClick={() => {
                                deleteProject(item.id).then()
                            }}>
                                <Trash/>
                            </Button>
                        )
                    }
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
                            {connection.icon}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}