export function StatusPill({ status }: { status: string }) {
  const s = status.toLowerCase();
  const cls =
    s === "online"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
      : s === "offline"
        ? "bg-red-500/15 text-red-300 border-red-500/30"
        : "bg-amber-500/15 text-amber-300 border-amber-500/30";

  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] ${cls}`}>
      {status}
    </span>
  );
}
