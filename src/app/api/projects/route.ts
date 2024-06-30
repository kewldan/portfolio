import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
import {saveFile} from "@/lib/minio";
import {getServerSession} from "next-auth";
import {z} from "zod";
import {projectData} from "@/app/api/projects/types";


const createProjectBody = z.object({
    data: projectData
})

export async function PUT(request: NextRequest) {
    const session = await getServerSession();

    if (!session)
        return NextResponse.json({type: 'error'}, {status: 403});

    const bodyRaw = await request.json();
    const {data: body, success} = await createProjectBody.safeParseAsync(bodyRaw);
    if (!success)
        return NextResponse.json({type: 'error'}, {status: 400});
    const {data} = body;

    const document = await prisma.project.create({
        data: {
            title: data.title,
            image: 'AWAITING CONFIRMATION',
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

    const filename = `projects/${Math.floor(Math.random() * 1000000)}-${data.imageName}`

    await saveFile(Buffer.from(data.image, 'base64'), filename)

    await prisma.project.update({
        where: {
            id: document.id
        },
        data: {
            image: `https://cdn.kyl-team.ru/${filename}`
        }
    });

    return NextResponse.json({type: 'success'});
}
