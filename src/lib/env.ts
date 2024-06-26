import {z} from 'zod';

/*eslint sort-keys: "error"*/
const envSchema = z.object({
    DATABASE_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string().url(),
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