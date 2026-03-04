import docsData from "@/data/docs.json";
import { requireAuth } from "@/lib/auth";

type DocItem = { label: string; url: string };
type DocGroup = { key: string; name: string; items: DocItem[] };

export default async function DocsPage() {
  await requireAuth();
  const groups = (docsData as any).docs as DocGroup[];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-10 text-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Docs</h1>
          <p className="text-sm text-zinc-600">
            Quick links to documentation, dashboards, and reference material.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {groups.map((g) => (
            <div key={g.key} className="rounded-lg border bg-white p-4">
              <div className="text-lg font-semibold">{g.name}</div>
              <ul className="mt-3 list-disc pl-5 text-sm">
                {g.items.map((it) => (
                  <li key={it.url}>
                    <a className="text-blue-600 hover:underline" href={it.url} target="_blank" rel="noreferrer">
                      {it.label}
                    </a>
                    <span className="text-zinc-500"> — {it.url}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          Source: <span className="font-mono">data/docs.json</span>
        </div>
      </div>
    </div>
  );
}
