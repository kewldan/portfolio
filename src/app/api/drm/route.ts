const allowed: Record<string, { name: string }> = {
    '03560274-043C-0535-2906-1C0700080009': {name: '@kewldan'}
}

export async function POST(request: Request) {
    const data = await request.json();
    if (!data || !data.uuid)
        return Response.json({type: 'error'});

    const uuid = data.uuid;

    if (uuid in allowed) {
        return Response.json({type: 'success', ...allowed[uuid]});
    }

    return Response.json({type: 'error'});
}