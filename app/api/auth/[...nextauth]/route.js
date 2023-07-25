import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {label: "Username", type: "text"},
                password: {label: "Password", type: "text"}
            },

            async authorize(credentials, req) {
                const { username, email, password } = credentials;

                if (!username && !email) {
                    throw new Error('Username or email is required');
                }

                if (!password) {
                    throw new Error('Password is required');
                }

                const formData = {
                    username,
                    email,
                    password,
                };

                try {
                    const response = await axios.post(`http://localhost:3001/api/login`, formData);

                    if (response.status === 200) {
                        const user = response.data.user;
                        return Promise.resolve(user);
                    } else {
                        throw new Error(response.data.error);
                    }
                } catch (error) {
                    throw new Error('Invalid credentials');
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    },

    pages: {
        signIn: '/auth/login'
    },

    secret: process.env.NEXTAUTH_SECRET,

    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}