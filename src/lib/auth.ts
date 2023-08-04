// Arquivo: pages/api/auth/[...nextauth].js
import type { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { TypeUser } from "@/app/@types/dadosLogin";
import { TypeJWT } from "@/app/@types/JWT";
import { User } from 'next-auth';

interface RequestInternal {
  body: any;
  query: any;
  headers: any;
  method: string;
  // Outras propriedades que você precisa...
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
      name: 'Sign in',
      credentials: {
        userName: { label: "userName", type: "text" },
        password: { label: "password", type: "password" }
      },
      async authorize(credentials :Record<"userName" | "password", string>,  req: Pick<RequestInternal, "body" | "query" | "headers" | "method">):Promise<User> {
        const res = await fetch("http://localhost:3004/login/signIn", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: credentials.userName,
            password: credentials.password
          })
        });
        const response = await res.json();

        // Verifique se a resposta indica erro ou não é bem-sucedida
        if (response?.ok || response?.error) {
          // Lance um erro com a mensagem do erro retornado pela API ou uma mensagem personalizada
          return null
        }
        return response 
      }
    })
  ],
  callbacks: {
    jwt: async ({token, user}:{token:JWT; user:User;} ):Promise<TypeJWT|JWT> =>{
      if(user){
        token.id = user.id
      }
      if (user) {
        const data:TypeUser = user as unknown as any;
        return {
          ...token,
          id: data.id,
          userName:data.userName,
          token: data.token,
        } as TypeJWT;
      }
      return token as JWT;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          userName: token.userName,
          token:token.token
        },
      };
    },

  }
}
