export default function ProcessingQueue() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-[#151922] p-6">
      <h2 className="mb-5 text-xl font-semibold text-white">
        AI Processing Queue
      </h2>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-sm text-slate-300">
            Hospital Project
          </p>

          <div className="h-3 rounded-full bg-slate-700">
            <div className="h-3 w-2/3 rounded-full bg-blue-600"></div>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            67% Complete
          </p>
        </div>
      </div>
    </section>
  );
}