// Arquivo: pages/api/auth/[...nextauth].js
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { use } from "react";


async function authorized(credentials: Record<"userName" | "password", string>) {
    console.log(credentials);
    const res = await fetch("http://localhost:3004/login/signIn", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    });
    const user = await res.json();
    console.log(user);
    if (user) {
      return Promise.resolve(user);
    } else {
      return Promise.resolve(null);
    }
  }
  




  export const authOptions: NextAuthOptions = {
    pages: {
      signIn: "/login",
    },
    session: {
      strategy: "jwt",
    },
    providers: [
      CredentialsProvider({
        name: "Sign in",
        credentials: {
          email: {
            label: "Email",
            type: "email",
            placeholder: "example@example.com",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          console.log('oi')
          return {
            id: 'e',
            email: 'user.email',
            name: 'user.name',
            randomKey: "Hey cool",
          };
        },
      }),
    ],
    callbacks: {
      session: ({ session, token }) => {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.id,
            randomKey: token.randomKey,
          },
        };
      },
      jwt: ({ token, user }) => {
        if (user) {
          const u = user as unknown as any;
          return {
            ...token,
            id: u.id,
            randomKey: u.randomKey,
          };
        }
        return token;
      },
    },
  };
  
