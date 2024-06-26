import React from "react";

export default function Stats() {

    return (
        <section className='outline-neutral-700 flex flex-col items-center p-8 justify-between w-full lg:w-[80%] gap-4'>
            <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl lg:self-start">
                My Github statistics
            </h1>
            <img src="https://raw.githubusercontent.com/kewldan/kewldan/main/github-metrics.svg" alt='statistics svg'
                 className="max-w-md"/>
        </section>
    )
}