import React from "react";
import {Project, ProjectConnection} from "@prisma/client";
import ProjectCard from "@/app/projects/projectCard";

export default function ProjectCategory({title, projects}: {
    title: string,
    projects: (Project & { connections: ProjectConnection[] })[]
}) {
    return (
        <div className='flex flex-col items-center w-full gap-2 max-w-[120rem]'>
            <h1 className="text-5xl font-bold divider my-6 px-3">{title}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 mb-6 w-full'>
                {
                    projects.map(project => (
                        <ProjectCard item={project} key={project.id}/>
                    ))
                }
            </div>
        </div>
    )
}