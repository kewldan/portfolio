import Image from "next/image";
import React from 'react';

export default function Hero() {
    return (
        <main className='flex flex-col items-center gap-y-3 p-2'>
            <div className="flex flex-row items-center justify-between flex-wrap gap-6">
                <div className="flex flex-col items-center grow">
                    <Image src='/avatar.jpg' alt="alt" width={348} height={348} className="rounded-2xl" priority/>
                </div>

                <div className="flex flex-col items-center grow">
                    <h1 className="text-3xl md:text-5xl font-medium">👋Hi there</h1>
                    <span className="mt-10 text-md md:text-xl max-w-lg">
                        My name is Daniil. I{'\''}m a 16 year-old developer from Saint-Petersburg, Russia.

                        Today, I work as a indie developer. And focusing on my own projects and POCs
                    </span>
                </div>
            </div>
        </main>
    )
}