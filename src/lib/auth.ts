// Arquivo: pages/api/auth/[...nextauth].js
import type { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { use } from "react";
import { AdapterUser } from 'next-auth/adapters'
import async from '../app/processo/page';
import { JWT } from "next-auth/jwt";
type User = {
  teste:string,
  id:'string'
  email:'string'  //
  emailVerified:Date
};
interface CustomUser extends AdapterUser {
  teste: string;
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
      async authorize(credentials :Record<"userName" | "password", string>):Promise<any> {
        console.log(credentials)
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
        console.log(response)

        // Verifique se a resposta indica erro ou não é bem-sucedida
        if (response?.ok || response?.error) {
          // Lance um erro com a mensagem do erro retornado pela API ou uma mensagem personalizada
          throw new Error(response.error || "Credenciais inválidas");
        }
        
        const user: CustomUser = {
          teste: 'oi2',
          id: "oi2",
          email: 'oiiias',
          emailVerified: new Date()
        };
        return user

      }
    })
  ],
  callbacks: {
    jwt: async ({token, user:User} ) =>{
      if(User){
        token.id = User.id
      }
      console.log(('oi'))
      console.log(User)
      console.log('teste aki')
      if (User) {
        const u:User = User as unknown as any;
        console.log(u)
        return {
          ...token,
          id: u.id,
          randomKey2: u.teste,
        };
      }
      console.log('aki tenho dados do token')
      console.log(token)
      return token;
    },

  }
  //   callbacks: {
  //   session: ({ session, user}) => {
  //     console.log(user + 'oi')
  //     return {
  //       ...session,
  //       user: {
  //         ...session.user,
  //       },
  //     };
  //   },
  // }
}
