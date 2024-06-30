import {z} from 'zod';

/*eslint sort-keys: "error"*/
const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    MINIO_ACCESS_KEY: z.string(),
    MINIO_BUCKET: z.string(),
    MINIO_ENDPOINT: z.string(),
    MINIO_SECRET_KEY: z.string(),
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string().url(),
    NEXT_GITHUB_ID: z.string(),
    NEXT_GITHUB_SECRET: z.string(),
    NODE_ENV: z.enum(['development', 'test', 'production'])
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    throw new Error(
        '❌ Invalid environment variables: ' +
        JSON.stringify(parsed.error.format(), null, 4),
    );
}
export const env = parsed.data;