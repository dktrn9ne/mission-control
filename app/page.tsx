import Link from "next/link";
import { requireAuth } from "@/lib/auth";

export default async function Home() {
  await requireAuth();
  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-10 text-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Mission Control</h1>
          <p className="text-sm text-zinc-600">
            Home base for projects, dashboards, and what’s running.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm text-zinc-500">Projects</div>
            <div className="text-lg font-semibold">Everything we’ve built</div>
            <p className="mt-2 text-sm text-zinc-700">
              Repo links, deployed URLs, and notes.
            </p>
            <Link className="mt-3 inline-block text-blue-600 hover:underline text-sm" href="/projects">
              Open Projects →
            </Link>
          </div>

          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm text-zinc-500">Docs</div>
            <div className="text-lg font-semibold">Links & references</div>
            <p className="mt-2 text-sm text-zinc-700">Dashboards, repos, and docs.</p>
            <Link className="mt-3 inline-block text-blue-600 hover:underline text-sm" href="/docs">
              Open Docs →
            </Link>
          </div>

          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm text-zinc-500">Memories</div>
            <div className="text-lg font-semibold">Context & notes</div>
            <p className="mt-2 text-sm text-zinc-700">
              Quick pointers to ongoing context.
            </p>
            <Link className="mt-3 inline-block text-blue-600 hover:underline text-sm" href="/memories">
              Open Memories →
            </Link>
          </div>

          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm text-zinc-500">Job Hunter</div>
            <div className="text-lg font-semibold">Applications pipeline</div>
            <p className="mt-2 text-sm text-zinc-700">
              Use the Job Hunter dashboard for CRM + tailoring.
            </p>
            <a className="mt-3 inline-block text-blue-600 hover:underline text-sm" href="https://job-hunter-bot-two.vercel.app" target="_blank" rel="noreferrer">
              Open Job Hunter →
            </a>
          </div>

          <div className="rounded-lg border bg-white p-4">
            <div className="text-sm text-zinc-500">MySpace Resume</div>
            <div className="text-lg font-semibold">Public site</div>
            <p className="mt-2 text-sm text-zinc-700">
              Deployed personal brand page.
            </p>
            <a className="mt-3 inline-block text-blue-600 hover:underline text-sm" href="https://myspace-resume.vercel.app" target="_blank" rel="noreferrer">
              Open site →
            </a>
          </div>
        </div>

        <div className="mt-8 text-sm text-zinc-600">
          <div className="font-semibold">Next</div>
          <ul className="list-disc pl-5">
            <li>Connect service health endpoints (job hunter bot, polymarket bot)</li>
            <li>Add alerts (tunnel changed, bot offline, 401 token mismatch)</li>
            <li>Centralize resume outputs + quick downloads</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
