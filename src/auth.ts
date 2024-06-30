import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import NextAuth, {AuthOptions} from "next-auth";
import {env} from "@/lib/env";


const options: AuthOptions = {
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
    ]
}

const authClient = {
    handler: NextAuth(options),
    options
}

export default authClient;