import Hero from "@/components/sections/Hero";
import React from 'react';
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";

export default function Home() {
    return (
        <main
            className="flex flex-col items-center justify-between w-full">
            <Hero/>
            <Skills/>
            <Stats/>
        </main>
    )
}
