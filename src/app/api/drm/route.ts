import {getDRMRecords} from "@/lib/Database";

export async function POST(request: Request) {
    const data = await request.json();
    if (!data || !data.uuid)
        return Response.json({type: 'error'});

    const uuid = data.uuid;

    const records = await getDRMRecords();
    const record = await records.findOne({uuid});

    if (!record)
        return Response.json({type: 'error'});

    return Response.json({type: 'success', name: record.name});
}