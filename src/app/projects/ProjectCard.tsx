import React from "react";
import LanguageTag from "@/components/LanguageTag";
import Tag from "@/app/projects/Tags";
import Image from "next/image"

export default function ProjectCard({children, title, image, tags}: {
    children: React.ReactNode,
    title: string,
    image: string | undefined,
    tags: Tag[]
}) {
    return (
        <div
            className={`flex flex-col items-center justify-between gap-y-2 w-full max-w-2xl bg-[#15191e] p-4 rounded-xl`}>
            <div className="text-2xl flex flex-row flex-wrap items-center gap-x-4 justify-between w-full">
                <div className="flex flex-row items-center justify-center font-semibold">
                    {title}
                </div>

                <div className="flex flex-row items-center justify-center gap-x-1 text-sm">
                    {tags.map(tag => (
                        <LanguageTag tag={tag} key={tag.name}/>
                    ))}
                </div>
            </div>

            {
                image ? (<Image src={image} alt={title} width={1024} height={400} className="rounded-xl"/>) : (
                    <h1></h1>)
            }

            {children}
        </div>
    )
}