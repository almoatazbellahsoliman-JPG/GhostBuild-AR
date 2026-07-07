"use client";

type AnalysisPanelProps = {
  blueprintUrl: string | null;
  onAnalyze: () => void;
  analyzing: boolean;
};

export default function AnalysisPanel({
  blueprintUrl,
  onAnalyze,
  analyzing,
}: AnalysisPanelProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#141419] p-6">

      <h2 className="text-2xl font-bold text-white">
        Blueprint Analysis
      </h2>

      <p className="text-zinc-500 mt-2">
        Analyze the uploaded blueprint before generating a 3D model.
      </p>

      <button
        disabled={!blueprintUrl || analyzing}
        onClick={onAnalyze}
        className={`mt-6 w-full rounded-xl py-4 font-semibold transition
        ${
          blueprintUrl
            ? "bg-[#1E3A8A] hover:bg-[#284DB8] text-white"
            : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
        }`}
      >
        {analyzing ? "Analyzing..." : "Start Blueprint Analysis"}
      </button>

    </div>
  );
}