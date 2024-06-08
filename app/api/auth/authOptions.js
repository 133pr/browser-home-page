import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/prisma/client";

export const authOptions = {
  pages: {
    error: "/",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        let user = null;
        if (!credentials?.email || !credentials.password) return null;

        user = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (user) {
          const passwordsMatch = await bcrypt.compare(
            credentials.password,
            user?.hashedPassword,
          );

          return passwordsMatch ? user : null;
        } else {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const isExist = await prisma.user.findMany({
            where: { email: credentials.email },
          });
          if (isExist.length > 0) return null;
          user = await prisma.user.create({
            data: {
              name: credentials.email,
              email: credentials.email,
              hashedPassword: hashedPassword,
            },
          });
          return user;
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ user, token, trigger, session }) => {
      if (user) {
        token.uid = user.id;
      }
      if (trigger === "update" && session.name) {
        token.name = session.name;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

export default NextAuth(authOptions);
