import Image from "next/image";
import React from "react";
import LanguageTag from "@/components/LanguageTag";

export default function ProjectView({children, title, image}: {
    children: React.ReactNode,
    title: string,
    image: string
}) {
    return (
        <div
            className={`flex flex-col items-center justify-between min-h-fit min-w-full mt-12`}>
            <div className="text-2xl font-semibold flex flex-row flex-wrap items-center">
                <div className="flex flex-row items-center">
                    <span className="text-center w-full">
                        {title}
                    </span>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <LanguageTag name="C++" color="bg-red-500"/>
                    <LanguageTag name="Gayme" color="bg-blue-500"/>
                    <LanguageTag name="C++" color="bg-green-500"/>
                </div>
            </div>
            <Image src={image} alt="Logical System" width="600" height="1" className="mt-4 rounded-2xl"/>

            <div className="p-4 max-w-xl">
                {children}
            </div>
        </div>
    )
}