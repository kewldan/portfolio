import ProjectCategory from "@/app/projects/projectCategory";
import React from "react";
import {prisma} from "@/lib/prisma";
import {
    Project,
    ProjectConnection
} from "@prisma/client";

export default async function Projects() {
    const projects = await prisma.project.findMany({
        include: {
            connections: true
        },
        orderBy: {
            primary: 'desc'
        }
    });

    const categories: Record<string, (Project & { connections: ProjectConnection[] })[]> = {};
    for (const project of projects) {
        if (categories[project.category]) {
            categories[project.category].push(project);
        } else {
            categories[project.category] = [project];
        }
    }

    return (
        <div className="flex flex-col items-center gap-6 py-4 w-full p-4">
            {
                Object.keys(categories).map(category => (
                    <ProjectCategory key={category} title={category} projects={categories[category]}/>
                ))
            }
        </div>
    )
}