import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "1f2e4d1c-b79b-4c1e-a3e7-97e2c1e4f654",
            userName: "thierry",
            name: "Thierry",
            password: process.env.ADMIN_USER_PASSWORD,
            email: "johndoe@example.com",
          },
          {
            id: "3a5e4c9b-82c9-4f4d-a3a8-57e2b1c3d234",
            userName: "delo",
            name: "Rodelo Escueta",
            password: process.env.DEV_USER_PASSWORD,
            email: "janesmith@example.com",
          },
        ];
        const user = users.find(
          (user) =>
            user.userName === credentials?.username &&
            user.password === credentials?.password
        );
        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),
  ],
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
