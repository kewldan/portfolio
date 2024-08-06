import React from "react";
import {useTranslations} from "next-intl";
import {StackCard, StackCardItem} from "@/components/sections/skills/stackCard";
import {YouTubeEmbed} from '@next/third-parties/google'
import Image from "next/image";
import {CheckCircle, Dot, ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

const used: StackCardItem[] = [
    {type: 'software', name: 'Git', icon: 'git.svg'},
    {type: 'framework', name: 'OpenGL', icon: 'opengl.svg'},
    {type: 'software', name: 'CLion', icon: 'clion.svg'},
    {type: 'software', name: 'Vcpkg', icon: 'vcpkg.svg'},
    {type: 'framework', name: 'GLFW3', icon: 'glfw3.png'},
    {type: 'service', name: 'Github', icon: 'github.svg', needToInvert: true},
    {type: 'os', name: 'Ubuntu', icon: 'ubuntu.svg'},
    {type: 'os', name: 'Windows', icon: 'windows.svg'},
]

export default function LogicalSystem() {
    const t = useTranslations('LogicalSystem');

    return (
        <div className="grid grid-cols-2 w-full slide" id="LogicalSystem">
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-full max-w-xl flex flex-col items-start gap-4">
                    <div className="flex flex-row items-end gap-2">
                        <Link href="#LogicalSystem" className="font-extrabold tracking-tighter text-7xl">
                            Logical System
                        </Link>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Image src="/icons/stack/github.svg" alt="Open Source" width={32} height={32}
                                           className="dark:invert pb-2"/>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t('osi')}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>

                    <span className="text-xl">
                    {t('description')}
                </span>
                    <span>
                    <Dot className="inline"/> {t('about')}
                </span>
                    <span>
                        <Dot className="inline"/> {t('details')} <CheckCircle className="ml-1 inline"/>
                    </span>
                    <span>
                        <Dot className="inline"/> {t('now')}
                    </span>
                    <span className="text-neutral-400">
                        21.04.2023 - 18.03.2024
                    </span>
                </div>
                <div className="w-full max-w-xl grid grid-cols-2 gap-2">
                    <Button className="w-full" asChild>
                        <Link href="https://github.com/kewldan/LogicalSystemRemaster"
                              className="w-full flex flex-row items-center justify-between">
                            <span className="w-full">
                                <Image src="/icons/stack/github.svg" alt="Open Source" width={28} height={28}
                                       className="inline invert dark:invert-0"/>
                            </span>
                            Github
                            <div className="w-full flex flex-row items-center justify-end">
                                <ExternalLink/>
                            </div>
                        </Link>
                    </Button>
                    <Button className="w-full" asChild>
                        <Link href="https://kewldan.itch.io/logical-system"
                              className="w-full flex flex-row items-center justify-between">
                            <span className="w-full"></span>
                            Itch
                            <div className="w-full flex flex-row items-center justify-end">
                                <ExternalLink/>
                            </div>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className=" flex flex-row items-center justify-center p-2">
                <Image src="https://cdn.kyl-team.ru/projects/125910-LogicalSystem.gif" alt="Project" width={800}
                       height={400} className="object-fill rounded-md"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <div className="w-full max-w-xl flex flex-col items-center gap-4">
                    <h3 className="text-4xl font-bold">
                        {t('mention')}
                    </h3>
                    <div className='w-full p-2'>
                        <YouTubeEmbed videoid="q_ve9SsuyvU" height={300} params="start=1547"/>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <h3 className="text-4xl font-bold">
                    {t('tech')}
                </h3>
                <div className="flex flex-row flex-wrap gap-4 justify-center max-w-2xl">
                    {
                        used.sort((a, b) => a.type.localeCompare(b.type)).map(item => (
                            <StackCard item={item} key={item.name}/>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}