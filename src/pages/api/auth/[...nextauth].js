import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export default NextAuth(
  GithubProvider({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    scope: ["user:email"],
  })
);
