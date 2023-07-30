// Arquivo: pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      id: 'api',
      name: 'API',
      credentials: {
        userName: { label: "userName", type: "text" },
        password: {  label: "password", type: "password" }
      },
      authorize: async (credentials) => {
        const res = await fetch("http://localhost:3004/verifyToken", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials)
        })
        const user = await res.json()
        
        if (res.ok && user) {
          return Promise.resolve(user)
        } else {
          return Promise.reject(new Error(user.error || 'Falha na autenticação'))
        }
      }
    })
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.accessToken
      }
      return token
    },
    async session(session, token) {
      session.accessToken = token.accessToken
      return session
    },
  },
})
