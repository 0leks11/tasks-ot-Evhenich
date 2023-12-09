import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const handler = NextAuth({
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOACK_CLIENT_ID || "",
      clientSecret: process.env.KEYCLOACK_CLIENT_SECRET || "",
      issuer: process.env.KEYCLOACK_ISSUER,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("Successfull sign in", {
        user,
        account,
        profile,
        email,
        credentials,
      });
      return true;
    },
  },
});

export { handler as GET, handler as POST };
