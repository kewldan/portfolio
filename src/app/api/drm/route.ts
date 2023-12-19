const allowed: Record<string, { name: string }> = {
    '03560274-043C-0535-2906-1C0700080009': {name: '@kewldan'},
    'D37E5897-83CA-EB11-80DE-088FC3027302': {name: '@kalkof'},
    '03C00218-044D-05D8-6D06-CE0700080009': {name: '@kalkof-computer'},
    'D06CC6AA-CE5E-D144-BB1F-B47CC4169849': {name: '@Abonentnezanyat'},
    '0F662900-5BCB-11D9-928F-10BF487202F1': {name: '@tg_vesta'}
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