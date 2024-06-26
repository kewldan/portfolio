import React from 'react';
import PhotoGallery from "@/components/PhotoGallery";


export default function Hero() {
    return (
        <main className='flex flex-col items-center gap-y-3 p-8 min-h-[40rem] w-full relative'>
            <h1 className="absolute -z-10 text-6xl font-extrabold bottom-4 left-4 tracking-tight lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background hidden lg:block">
                I LOVE<br/>PROGRAMMING
            </h1>
            <h1 className="absolute -z-10 text-6xl font-extrabold top-4 right-4 tracking-tight lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background hidden md:block">
                CODING IS<br/> MY <span className='text-red'>PASSION</span>
            </h1>
            <div className="flex flex-row items-center justify-between flex-wrap gap-6">
                <PhotoGallery/>

                <div className="flex flex-col items-center grow">
                    <h1 className="text-3xl md:text-5xl font-medium">👋Hi there</h1>
                    <span className="mt-10 text-md md:text-xl max-w-lg">
                        My name is Daniil. I{'\''}m a <span className='font-extrabold'>16 year-old</span> developer from Saint-Petersburg, Russia.

                        Today, I work as a indie developer. And focusing on my own projects and POCs
                    </span>
                </div>
            </div>
        </main>
    )
}