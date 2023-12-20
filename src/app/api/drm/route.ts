import {getDRMRecords} from "@/lib/Database";

export async function POST(request: Request) {
    const data = await request.json();
    if (!data || !data.uuid || !data.telemetry)
        return Response.json({type: 'error'});

    const uuid = data.uuid;
    const telemetry = data.telemetry;

    telemetry.remote_ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

    const records = await getDRMRecords();
    const record = await records.findOne({uuid});

    if (!record)
        return Response.json({type: 'error'});

    if (!record.sessions)
        await records.updateOne({uuid}, {
            $set: {'sessions': []}
        });

    await records.updateOne({uuid}, {
        $push: {
            'sessions': telemetry
        }
    });

    return Response.json({type: 'success', name: record.name});
}