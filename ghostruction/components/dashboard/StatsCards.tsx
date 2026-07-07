export default function StatsCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {[
        ["Projects", "12"],
        ["Ready Models", "8"],
        ["Processing", "3"],
        ["Team Members", "14"],
      ].map(([title, value]) => (
        <div
          key={title}
          className="rounded-2xl border border-slate-800 bg-[#151922] p-6"
        >
          <p className="text-sm text-slate-400">{title}</p>
          <h2 className="mt-2 text-3xl font-bold text-white">{value}</h2>
        </div>
      ))}
    </section>
  );
}