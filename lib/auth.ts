import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const AUTH_COOKIE = "mc_auth";

export async function requireAuth() {
  const store = await cookies();
  const c = store.get(AUTH_COOKIE)?.value;
  if (c !== "1") redirect("/login");
}
