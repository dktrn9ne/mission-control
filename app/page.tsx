import Link from "next/link";

import servicesData from "@/data/services.json";
import activityData from "@/data/activity.json";
import { StatusPill } from "@/app/components/StatusPill";

type Service = {
  key: string;
  name: string;
  type: string;
  status: string;
  primaryUrl: string;
  notes?: string;
};

type ActivityEvent = { ts: string; title: string; detail?: string };

export default function Home() {
  const services = (servicesData as any).services as Service[];
  const events = (activityData as any).events as ActivityEvent[];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_320px]">
      <div>
        <div className="mb-4">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Overview</h1>
          <p className="mt-1 text-sm text-zinc-400">
            Status tiles first. Kanban lives under <span className="font-mono text-zinc-300">Tasks</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <div key={s.key} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-zinc-400">{s.type}</div>
                  <div className="mt-1 text-lg font-semibold text-zinc-100">{s.name}</div>
                </div>
                <StatusPill status={s.status} />
              </div>

              {s.notes ? <div className="mt-2 text-sm text-zinc-400">{s.notes}</div> : null}

              <a
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-950/60"
                href={s.primaryUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open
              </a>
            </div>
          ))}
        </div>
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
