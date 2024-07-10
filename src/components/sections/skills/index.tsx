import React from "react";
import SegmentedProgress from "@/components/segmentedProgress";
import Image from "next/image";
import {StackCard, StackCardItem} from "./stackCard";

const languages = [
    {name: 'Python', icon: 'python.svg', value: 5},
    {name: 'Typescript', icon: 'typescript.svg', value: 5},
    {name: 'C++', icon: 'cpp.svg', value: 3},
    {name: 'Java', icon: 'java.svg', value: 2},
    {name: 'Kotlin', icon: 'kotlin.svg', value: 1},
]

const stack: StackCardItem[] = [
    {type: 'framework', name: 'NextJS', icon: 'nextjs.svg', needToInvert: true},
    {type: 'framework', name: 'FastAPI', icon: 'fastapi.svg'},
    {type: 'software', name: 'Git', icon: 'git.svg'},
    {type: 'framework', name: 'OpenGL', icon: 'opengl.svg'},
    {type: 'framework', name: 'Prisma', icon: 'prisma.svg', needToInvert: true},
    {type: 'framework', name: 'Tailwind', icon: 'tailwind.svg'},
    {type: 'framework', name: 'Vulkan', icon: 'vulkan.svg'},
    {type: 'service', name: 'Cloudflare', icon: 'cloudflare.svg'},
    {type: 'software', name: 'Docker', icon: 'docker.svg'},
    {type: 'service', name: 'Github', icon: 'github.svg', needToInvert: true},
    {type: 'lib', name: 'Intellij', icon: 'intellij.svg'},
    {type: 'db', name: 'MongoDB', icon: 'mongodb.svg'},
    {type: 'software', name: 'Nginx', icon: 'nginx.svg'},
    {type: 'ide', name: 'Pycharm', icon: 'pycharm.svg'},
    {type: 'software', name: 'Traefik', icon: 'traefik.svg'},
    {type: 'os', name: 'Ubuntu', icon: 'ubuntu.svg'},
    {type: 'ide', name: 'WebStorm', icon: 'webstorm.svg'},
    {type: 'os', name: 'Windows', icon: 'windows.svg'}
];

const phrases: Record<string, string> = {
    0: 'IDK',
    1: 'BAD',
    2: 'NORMAL',
    3: 'GOOD',
    4: 'GREAT',
    5: 'IMPECCABLE',
}

export default function Skills() {
    return (
        <section
            className='w-full min-h-[40rem] relative'>
            <div className="p-8 grid grid-cols-1 xl:grid-cols-4">
                <div className="p-8">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Hard Skills
                    </h1>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                        Levels of knowledge of Programming languages
                    </h3>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-3">
                        {
                            languages.sort((a, b) => b.value - a.value).map(lang => (
                                <li key={lang.name}>
                                    <div className="flex flex-col items-center w-full gap-1">
                                        <div className='flex flex-row items-center w-full gap-1 px-1'>
                                            <Image src={`/icons/langs/${lang.icon}`} alt={`${lang.name} logo`}
                                                   width={22}
                                                   height={22}/>
                                            <span>{lang.name}</span>
                                        </div>
                                        <SegmentedProgress value={lang.value} phrases={phrases}/>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-8 h-full">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Soft Skills
                    </h1>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>Communication</li>
                        <li>Teamwork</li>
                        <li>Problem-solving</li>
                        <li>Critical thinking</li>
                        <li>Leadership</li>
                        <li>Creativity</li>
                    </ul>
                    <span className='text-xs'>And more!</span>
                </div>
                <div className="p-8 xl:col-span-2 flex flex-col gap-8">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Tech Stack
                    </h1>
                    <div className="flex flex-row flex-wrap gap-4 justify-center">
                        {
                            stack.sort((a, b) => a.type.localeCompare(b.type)).map(item => (
                                <StackCard item={item} key={item.name}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <h1 className="-z-10 text-6xl font-extrabold bottom-4 left-4 tracking-tight lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background hidden lg:block select-none">
                MADE WITH LOVE&NEXT.JS
            </h1>
        </section>
    )
}