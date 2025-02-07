import NextAuth, {AuthOptions} from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
    debug: !!process.env.NEXTAUTH_DEBUG,
    providers: [
        GithubProvider(
            {
                clientId: process.env.GITHUB_ID ?? "",
                clientSecret: process.env.GITHUB_SECRET ?? ""
            }
        )
    ],
}

export const nextAuth  = NextAuth(authOptions)