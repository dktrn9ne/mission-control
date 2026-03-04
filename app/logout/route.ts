import { NextResponse } from "next/server";
import { AUTH_COOKIE } from "@/lib/auth";

export async function GET(req: Request) {
  const url = new URL(req.url);
  url.pathname = "/login";
  url.search = "";

  const res = NextResponse.redirect(url);
  res.cookies.set(AUTH_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
