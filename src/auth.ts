import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import NextAuth, {NextAuthOptions} from "next-auth";
import {env} from "@/lib/env";


export default NextAuth({
    debug: env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    providers: [
        ...(
            env.NODE_ENV === 'development' ? [
                Credentials({
                    name: 'Credentials',
                    credentials: {
                        username: {label: "Username", type: "text"},
                        password: {label: "Password", type: "password"}
                    },
                    authorize: async () => {
                        return {id: 'test_user', name: 'John Doe', email: 'john.doe@example.com'}
                    }
                }),
            ] : []
        ),
        Github({
            clientId: env.NEXT_GITHUB_ID,
            clientSecret: env.NEXT_GITHUB_SECRET
        })
    ],
} satisfies NextAuthOptions);
