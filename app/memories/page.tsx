import memoriesData from "@/data/memories.json";

type MemoryItem = { key: string; name: string; path?: string; url?: string };

export default function MemoriesPage() {
  const notes = (memoriesData as any).notes as string;
  const items = (memoriesData as any).memories as MemoryItem[];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-10 text-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Memories</h1>
          <p className="text-sm text-zinc-600">Reference points + links to ongoing context.</p>
        </div>

        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-zinc-700">{notes}</div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((m) => (
            <div key={m.key} className="rounded-lg border bg-white p-4">
              <div className="text-lg font-semibold">{m.name}</div>
              {m.url ? (
                <a className="mt-2 inline-block text-blue-600 hover:underline text-sm" href={m.url} target="_blank" rel="noreferrer">
                  Open →
                </a>
              ) : null}
              {m.path ? (
                <div className="mt-2 text-xs font-mono text-zinc-600 break-all">{m.path}</div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          Source: <span className="font-mono">data/memories.json</span>
        </div>
      </div>
    </div>
  );
}
