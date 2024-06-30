import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {prisma} from "@/lib/prisma";
import {z} from "zod";
import {
    ProjectCategory,
    ProjectLanguage,
    ProjectLocalization,
    ProjectMonetization,
    ProjectStatus
} from "@prisma/client";

const updateProjectBody = z.object({
    data: z.object({
        title: z.string(),
        category: z.custom<ProjectCategory>(),
        difficulty: z.number().min(1).max(5),
        language: z.custom<ProjectLanguage>(),
        localization: z.custom<ProjectLocalization>(),
        primary: z.boolean(),
        status: z.custom<ProjectStatus>(),
        monetization: z.custom<ProjectMonetization>(),
        description: z.string()
    })
})


export async function POST(request: NextRequest, {params}: { params: { id: string } }) {
    const session = await getServerSession();

    if (!session)
        return NextResponse.json({type: 'error'}, {status: 403});

    const bodyRaw = await request.json();
    const {data: body, success} = await updateProjectBody.safeParseAsync(bodyRaw);
    if (!success)
        return NextResponse.json({type: 'error'}, {status: 400});

    const {data} = body;

    await prisma.project.update({
        where: {
            id: params.id
        },
        data: {
            title: data.title,
            category: data.category,
            description: data.description,
            difficulty: data.difficulty,
            language: data.language,
            status: data.status,
            monetization: data.monetization,
            localization: data.localization,
            primary: data.primary
        }
    });

    return NextResponse.json({type: 'success'});
}

export async function DELETE({params}: { params: { id: string } }) {
    const session = await getServerSession();

    if (!session)
        return NextResponse.json({type: 'error'}, {status: 403});

    await prisma.project.delete({
        where: {
            id: params.id
        }
    });

    return NextResponse.json({type: 'success'});
}