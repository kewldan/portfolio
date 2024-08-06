'use client';

import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, {useRef} from "react";

/**
 * Renders a photo gallery component.
 *
 * @return {React.ReactNode} The rendered photo gallery component.
 */
export default function PhotoGallery({photos, width, height}: {
    photos: string[];
    width: number;
    height: number
}): React.ReactNode {
    const plugin = useRef(
        Autoplay({delay: 2000, stopOnInteraction: true})
    );

    return (
        <div className="flex flex-col items-center gap-0.5">
            <Carousel className="w-full max-w-xs" opts={{align: "center"}} plugins={[plugin.current]}
                      onMouseEnter={plugin.current.stop}
                      onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {photos.map((photo, index) => (
                        <CarouselItem key={`${photo}-${index}`} className='h-full'>
                            <Image src={photo} alt={photo} width={width} height={height}
                                   className='object-fill rounded-md'/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}