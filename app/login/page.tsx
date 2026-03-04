import { loginAction } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const error = typeof sp.error === "string" ? sp.error : "";

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-10 text-zinc-900">
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-bold">Mission Control</h1>
        <p className="mt-2 text-sm text-zinc-600">Enter password to continue.</p>

        {error ? (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error === "invalid" ? "Wrong password." : "Login is misconfigured (missing MC_APP_PASSWORD)."}
          </div>
        ) : null}

        <form action={loginAction} className="mt-6 rounded-lg border bg-white p-4">
          <label className="block text-sm font-medium text-zinc-700">Password</label>
          <input
            name="password"
            type="password"
            autoFocus
            className="mt-2 w-full rounded-md border px-3 py-2 text-sm"
            placeholder="••••••••"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Sign in
          </button>
          <div className="mt-3 text-xs text-zinc-500">
            Tip: set <span className="font-mono">MC_APP_PASSWORD</span> in Vercel Environment Variables.
          </div>
        </form>
      </div>
    </div>
  );
}
