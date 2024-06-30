import * as Minio from 'minio'
import {env} from "@/lib/env";

export const minioClient = new Minio.Client({
    endPoint: env.MINIO_ENDPOINT,
    useSSL: true,
    accessKey: env.MINIO_ACCESS_KEY,
    secretKey: env.MINIO_SECRET_KEY
});

export async function saveFile(file: Buffer, name: string) {
    return await minioClient.putObject(env.MINIO_BUCKET, name, file)
}