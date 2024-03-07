"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/util/prismadb";
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  // Verify credentials && get the user
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    if (email && password) {
      console.log(email, password);
      const user = await prisma.merchant.findFirst({
        where: {
          email: email as string,
          password: password as string,
        },
      });
      const userWithoutPassword = { ...user, password: null };
      // Create the session
      const expires = new Date(Date.now() + 60 * 60 * 1000);
      const session = await encrypt({ userWithoutPassword, expires });

      // Save the session in a cookie
      cookies().set("custom_session", session, { expires, httpOnly: true });
    }
  } catch (err) {
    console.log(err);
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("custom_session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("custom_session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("custom_session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "custom_session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
