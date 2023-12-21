import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { supabase } from "@/lib/supabase/client";
import bcrypt from "bcryptjs";
import { generateAccessToken } from "@/lib/helpers";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "name@gamil.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { data, error } = await supabase
            .from("profiles")
            .select()
            .eq("email", credentials.email);
          if (error) {
            console.log("erorr while geting the email", error);
            throw new Error(`error: ${error}`);
          }
          if (data) {
            console.log("data", data);
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              data[0].password
            );
            console.log("password is correct?", isPasswordCorrect);
            if (isPasswordCorrect) {
              console.log("password is correct");
              return data[0];
            }
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("signIn:- user", user);
      console.log("signIn:- account", account);
      console.log("signIn:- profile", profile);
      console.log("signIn:- email", email);
      console.log("signIn:- credentials", credentials);
      if (account?.provider == "credentials") {
        return true;
      }
      if (account?.provider == "github") {
        try {
          const { data, error } = await supabase
            .from("profiles")
            .select()
            .eq("email", user.email);
          if (error) {
            console.log("error when gfetching the user", error);
            throw new Error(`error :- ${error}`);
          }
          if (data) {
            console.log("user data from the db", data);
          }
          if (data.length === 0) {
            const newUser = {
              id: user?.id,
              name: user?.name,
              bio: "",
              image: user?.image,
              email: user?.email,
              password: "",
            };
            const { data, error } = await supabase
              .from("profiles")
              .insert(newUser)
              .select();
            if (error) {
              console.log("error saving to db", error);
              return false;
            }
            return true;
          }
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
    },
    // authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl;
    //   if (pathname === "/profile") return !!auth;
    //   return true;
    // },
    async session({ session, token, user }) {
      console.log("session:- token:", token);
      console.log("session:-  session:", session);
      console.log("session:-  user:", user);
      // // Send properties to the client, like an access_token and user id from a provider.
      // session.accessToken = token.accessToken;
      // // session.user.name = user?.name;
      // session.user = { ...user };
      // session.user.id = token?.id;

      // return session;
      // session callback is called whenever a session for that particular user is checked
      // in above function we created token.user=user
      session.user = token.user;
      // you might return this in new version
      return Promise.resolve(session);
    },
    async jwt({ token, account, profile, user }) {
      console.log("jwt:- token:", token);
      console.log("jwt:- accunt:", account);
      console.log("jwt:- profile:", profile);
      console.log("jwt:- user:", user);
      if (user) {
        // token = user;
        // token = user;
        token.user = user;
      }
      return Promise.resolve(token);
      // // Persist the OAuth access_token and or the user id to the token right after signin
      // if (user) {
      //   if (account?.type === "github" || account?.type === "google") {
      //     token.accessToken = account.access_token;
      //     token.id = profile?.id || user?.id;
      //   } else {
      //     token.accessToken = generateAccessToken(user);
      //   }
      // } else {
      //   console.error("User object is undefined in jwt callback");
      // }
      // return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
