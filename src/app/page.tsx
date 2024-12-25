import Hero from "@/components/sections/hero";
import React from 'react';
import Stats from "@/components/sections/stats";
import Skills from "@/components/sections/skills";
import Donate from "@/components/sections/donate";

export default function Home() {
    return (
        <div
            className="flex flex-col items-center justify-between w-full">
            <Hero/>
            <Skills/>
            <Donate/>
            <Stats/>
        </div>
    )
}
