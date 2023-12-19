import {MongoClient} from "mongodb";

export default async function getMongo(): Promise<MongoClient> {
    // @ts-ignore
    if (!global.client) {
        // @ts-ignore
        global.client = new MongoClient(process.env.MONGO);

        // @ts-ignore
        await global.client.connect();
    }

    // @ts-ignore
    return global.client;
}

export async function getDRMRecords() {
    return (await getMongo()).db(process.env.DATABASE).collection('drm');
}
