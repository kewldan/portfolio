import React from "react";
import SegmentedProgress from "@/components/SegmentedProgress";

export default function Skills() {
    return (
        <section
            className='w-full min-h-[40rem] relative'>
            <h1 className="absolute -z-10 text-6xl font-extrabold bottom-4 left-4 tracking-tight lg:text-8xl font-outline-neutral-200 dark:font-outline-[#474757] text-background">
                MADE WITH LOVE&NEXT.JS V14
            </h1>
            <div className="p-8 flex flex-col lg:flex-row items-center justify-between">
                <div className="p-8">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Hard Skills
                    </h1>
                    <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                        Levels of knowledge of Programming languages
                    </h3>
                    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                        <li>Python <SegmentedProgress value={5}/></li>
                        <li>TypeScript <SegmentedProgress value={5}/></li>
                        <li>Java <SegmentedProgress value={3}/></li>
                        <li>C++ <SegmentedProgress value={3}/></li>
                        <li>GLSL <SegmentedProgress value={3}/></li>
                    </ul>
                </div>
                <div className="p-8">
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
            </div>
        </section>
    )
}