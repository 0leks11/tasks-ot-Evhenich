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
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token;
      }
      return token;
    },
  },
});

export { handler as GET, handler as POST };
