import NextAuth from "next-auth";

export default async function auth(req, res) {

	console.log(req)

	return await NextAuth(req, res, {})
}