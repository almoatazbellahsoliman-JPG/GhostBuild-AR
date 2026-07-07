export default function RecentActivity() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-[#151922] p-6">
      <h2 className="mb-5 text-xl font-semibold text-white">
        Recent Activity
      </h2>

      <ul className="space-y-4 text-slate-300">
        <li>📐 Uploaded Villa Blueprint</li>
        <li>🤖 Generated 3D Model</li>
        <li>👷 Shared project with Site Engineer</li>
      </ul>
    </section>
  );
}