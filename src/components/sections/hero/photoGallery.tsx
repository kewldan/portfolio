'use client';

import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";

/**
 * Renders a photo gallery component.
 *
 * @return {React.ReactNode} The rendered photo gallery component.
 */
export default function PhotoGallery({photos}: {
    photos: string[];
}): React.ReactNode {
    return (
        <div className="flex flex-col items-center gap-0.5">
            <Carousel className="w-[32rem]" opts={{align: "center", loop: true}}
                      plugins={[Autoplay({delay: 5000, stopOnInteraction: true})]}>
                <CarouselContent>
                    {photos.map((photo, index) => (
                        <CarouselItem key={`${photo}-${index}`}>
                            <Image src={photo} alt={photo} width={640} height={640}
                                   className='object-cover rounded-xl w-[32rem] h-[32rem]'/>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}