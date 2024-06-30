import React from 'react';
import PhotoGallery from "./photoGallery";


export default function Hero() {
    return (
        <main className='flex flex-col items-center justify-between gap-y-3 p-8 w-full relative screen-slide'>
            <h1 className="-z-10 text-6xl font-extrabold w-full text-right tracking-tight lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background">
                CODING IS<br/> MY <span className='text-red'>PASSION</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <PhotoGallery/>

                <div className="flex flex-col items-center grow">
                    <h1 className="text-3xl md:text-5xl font-medium">👋Hi there</h1>
                    <span className="mt-10 text-md md:text-xl max-w-lg">
                        My name is Daniil. I{'\''}m a <span className='font-extrabold'>16 year-old</span> developer from Saint-Petersburg, Russia.

                        Today, I work as a indie developer. And focusing on my own projects and POCs
                    </span>
                </div>
            </div>
            <h1 className="-z-10 text-6xl font-extrabold w-full tracking-tight lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background">
                I LOVE<br/>PROGRAMMING
            </h1>
        </main>
    )
}