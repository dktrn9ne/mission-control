"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE } from "@/lib/auth";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") || "");
  const expected = process.env.MC_APP_PASSWORD;

  // Fail closed.
  if (!expected) redirect("/login?error=misconfigured");

  if (password !== expected) redirect("/login?error=invalid");

  const store = await cookies();
  store.set(AUTH_COOKIE, "1", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });

  redirect("/");
}
