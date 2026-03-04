import projectsData from "@/data/projects.json";

type ProjectUrl = { label: string; url: string };
type Project = {
  key: string;
  name: string;
  type: string;
  repo: string;
  urls?: ProjectUrl[];
  notes?: string;
};

export default function ProjectsPage() {
  const projects = (projectsData as any).projects as Project[];

  return (
    <div className="min-h-screen bg-zinc-50 p-6 md:p-10 text-zinc-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
          <p className="text-sm text-zinc-600">
            Source of truth: <span className="font-mono">data/projects.json</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div key={p.key} className="rounded-lg border bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm text-zinc-500">{p.type}</div>
                  <div className="text-lg font-semibold">{p.name}</div>
                </div>
              </div>

              <div className="mt-3 text-sm">
                <div className="text-zinc-600">Repo</div>
                <div className="break-all">
                  {p.repo.startsWith("http") ? (
                    <a className="text-blue-600 hover:underline" href={p.repo} target="_blank" rel="noreferrer">
                      {p.repo}
                    </a>
                  ) : (
                    <span className="font-mono text-xs">{p.repo}</span>
                  )}
                </div>
              </div>

              {p.urls && p.urls.length ? (
                <div className="mt-3 text-sm">
                  <div className="text-zinc-600">Links</div>
                  <ul className="list-disc pl-5">
                    {p.urls.map((u) => (
                      <li key={u.url}>
                        <a className="text-blue-600 hover:underline" href={u.url} target="_blank" rel="noreferrer">
                          {u.label}
                        </a>
                        <span className="text-zinc-500"> — {u.url}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {p.notes ? (
                <div className="mt-3 text-sm text-zinc-700">{p.notes}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
