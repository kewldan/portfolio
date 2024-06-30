import {z} from "zod";
import {
    ProjectCategory,
    ProjectLanguage,
    ProjectLocalization,
    ProjectMonetization,
    ProjectStatus
} from "@prisma/client";

export const projectData = z.object({
    title: z.string(),
    image: z.string(),
    imageName: z.string(),
    category: z.custom<ProjectCategory>(),
    difficulty: z.number().min(1).max(5),
    language: z.custom<ProjectLanguage>(),
    localization: z.custom<ProjectLocalization>(),
    primary: z.boolean(),
    status: z.custom<ProjectStatus>(),
    monetization: z.custom<ProjectMonetization>(),
    description: z.string()
});