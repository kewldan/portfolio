'use client';

import Image from "next/image";
import React from "react";
import Tilt from 'react-parallax-tilt';
import {twMerge} from "tailwind-merge";

export type StackCardItem = {
    type: 'framework' | 'lib' | 'os' | 'service' | 'software' | 'ide' | 'db';
    name: string;
    icon: string;
    needToInvert?: boolean;
}

export function StackCard({item}: { item: StackCardItem }) {
    return (
        <Tilt glareEnable={true} scale={1.2} perspective={500}
              className="outline outline-1 outline-neutral-600 rounded-md parallax-effect-img">
            <div className='inner-element w-full h-full flex flex-col items-center justify-between p-4 gap-2'>
                <div
                    className={twMerge(`grow h-full w-full flex flex-col items-center justify-center`, item.needToInvert ? "dark:invert" : "")}>
                    <Image src={`/icons/stack/${item.icon}`} alt={item.icon} width={72}
                           height={72}/>
                </div>
                <span className="font-medium">{item.name}</span>
            </div>
        </Tilt>
    )
}