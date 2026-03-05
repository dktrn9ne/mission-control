import activityData from "@/data/activity.json";

type ActivityEvent = { ts: string; title: string; detail?: string };

type Task = {
  id: string;
  title: string;
  detail?: string;
};

const COLUMNS: { key: string; name: string; tasks: Task[] }[] = [
  {
    key: "backlog",
    name: "Backlog",
    tasks: [
      { id: "mc-1", title: "Add service health polling", detail: "Standardize /status endpoints + tunnel URLs." },
      { id: "mc-2", title: "Add Resume vault page", detail: "Link latest PDFs + quick download." },
    ],
  },
  {
    key: "inprogress",
    name: "In Progress",
    tasks: [{ id: "mc-3", title: "Mission Control UI theme", detail: "Dark glass + sidebar + feed." }],
  },
  {
    key: "blocked",
    name: "Blocked",
    tasks: [{ id: "mc-4", title: "Browser Relay attach", detail: "Gateway token + extension attach reliability." }],
  },
  {
    key: "done",
    name: "Done",
    tasks: [{ id: "mc-5", title: "Projects/Docs/Memories pages", detail: "JSON-driven pages." }],
  },
];

export default function TasksPage() {
  const events = (activityData as any).events as ActivityEvent[];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {COLUMNS.map((col) => (
          <section key={col.key} className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-zinc-200">{col.name}</h2>
              <span className="text-xs text-zinc-400">{col.tasks.length}</span>
            </div>
            <div className="space-y-2">
              {col.tasks.map((t) => (
                <div key={t.id} className="rounded-xl border border-white/10 bg-zinc-950/40 p-3">
                  <div className="text-sm font-semibold text-zinc-100">{t.title}</div>
                  {t.detail ? <div className="mt-1 text-xs text-zinc-400">{t.detail}</div> : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <aside className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm font-semibold text-zinc-200">Activity</div>
        <div className="mt-3 space-y-3">
          {events.map((e) => (
            <div key={e.ts + e.title} className="rounded-xl border border-white/10 bg-zinc-950/40 p-3">
              <div className="text-xs text-zinc-500">{new Date(e.ts).toLocaleString()}</div>
              <div className="mt-1 text-sm font-semibold text-zinc-100">{e.title}</div>
              {e.detail ? <div className="mt-1 text-xs text-zinc-400">{e.detail}</div> : null}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
