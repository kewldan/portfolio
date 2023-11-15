import Image from "next/image";
import {FaGithub, FaNetworkWired, FaStackOverflow, FaTelegram} from "react-icons/fa6";
import {SiNextdotjs, SiTelegram, SiUnrealengine} from "react-icons/si";
import React from 'react';

const focuses = [
    {icon: <SiTelegram size={26}/>, name: 'Telegram web apps', value: 78},
    {icon: <SiNextdotjs size={26}/>, name: 'Next.JS', value: 64},
    {icon: <FaNetworkWired size={26}/>, name: 'Highly loaded networks', value: 2},
    {icon: <SiUnrealengine size={26}/>, name: 'Unreal Engine 5', value: 1},
]

export default function Hero() {
    return (
        <main className='flex flex-col items-center gap-y-3 p-2'>
            <div className="flex flex-row items-center justify-between flex-wrap gap-6">
                <div className="flex flex-col items-center grow">
                    <Image src="/avatar.jpg" alt="alt" width={348} height={348} className="rounded-2xl" priority/>
                </div>

                <div className="flex flex-col items-center grow">
                    <h1 className="text-5xl font-medium">👋Hi there</h1>
                    <span className="mt-10 text-xl max-w-lg">
                        My name is Daniil. I{'\''}m a 16 year-old developer from Saint-Petersburg, Russia.

                        Today, I work as a indie developer. And focusing on my own projects and POCs
                    </span>
                </div>
            </div>
            <h2 className='font-medium text-2xl mt-4'>Currently learning</h2>
            <div className='flex flex-col items-center gap-y-4 w-full'>
                {
                    focuses.map((focus, index) => (
                        <div className='flex flex-row items-center w-full gap-x-3' key={index}>
                            <span className=''>{focus.icon}</span>
                            <span className='w-[18rem]'>{focus.name}</span>
                            <progress value={focus.value} max={100} className='progress progress-primary w-full'/>
                            <span className='w-[4rem]'>{focus.value}%</span>
                        </div>
                    ))
                }
            </div>
            <div className="divider"></div>
            <div className="flex flex-row items-center justify-center gap-x-4">
                <a href="/telegram" className='hover:text-gray-300 transition-all'>
                    <FaTelegram size={26}/>
                </a>
                <a href="/github" className='hover:text-gray-300 transition-all'>
                    <FaGithub size={26}/>
                </a>
                <a href="/stack-overflow" className='hover:text-gray-300 transition-all'>
                    <FaStackOverflow size={26}/>
                </a>
            </div>
        </main>
    )
}