import React from "react";
import LanguageTag from "@/components/LanguageTag";
import Tag from "@/app/projects/Tags";
import Image from "next/image"

export default function ProjectView({children, title, image, tags}: {
    children: React.ReactNode,
    title: string,
    image: string | undefined,
    tags: Tag[]
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
                    {tags.map(tag => (
                        <React.Fragment key={tag.name}>
                            <LanguageTag tag={tag}/>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {
                image ? (<Image src={image} alt={title} width="600" height="1" className="mt-4 rounded-2xl"/>) : (
                    <h1></h1>)
            }


            <div className="p-4 max-w-xl mt-4 rounded-2xl">
                {children}
            </div>
        </div>
    )
}