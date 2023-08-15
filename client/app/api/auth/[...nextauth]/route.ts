import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { recoverMessageAddress } from 'viem'
import { Address } from "wagmi";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, _req) {

            const msgSigned = 'Validate with Signature'
            const recoveredAddress = await recoverMessageAddress({
              message: msgSigned,
              signature: <Address>credentials?.password || '',
            })
            const matchedAddress = recoveredAddress === credentials?.username
            const user = { id: "1", name: credentials?.username, email: credentials?.username }

            if (matchedAddress) {
              return user
            } else {
              throw new Error('error message') // Redirect to error page
            }
          }
        })
      ],
      pages: {
        signIn: "/siwe",
      }
})

export { handler as GET, handler as POST }