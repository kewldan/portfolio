'use client';

import Image from "next/image";
import React from "react";
import Tilt from 'react-parallax-tilt';
import {twMerge} from "tailwind-merge";

export interface StackCardItem {
    type: 'framework' | 'lib' | 'os' | 'service' | 'software' | 'ide' | 'db';
    name: string;
    icon: string;
    needToInvert?: boolean;
}

/**
 * Renders a StackCard component based on the provided StackCardItem.
 *
 * @param {StackCardItem} item - The StackCardItem object containing information for rendering the card.
 * @return {JSX.Element} The rendered StackCard component.
 */
export function StackCard({item}: { item: StackCardItem }): React.ReactNode {
    return (
        <Tilt glareEnable={true} scale={1.2} perspective={500}
              className="outline outline-1 outline-border rounded-md parallax-effect-img">
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