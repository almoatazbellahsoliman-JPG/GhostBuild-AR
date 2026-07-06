"use client";

import {
  CheckCircle2,
  Clock3,
  FileStack,
  Activity,
  HardHat,
  Layers3,
} from "lucide-react";

export default function ActivityPanel() {
  return (
    <div className="space-y-6">

      {/* System Status */}

      <div className="rounded-3xl border border-slate-800 bg-[#111318] p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold text-white">
            System Status
          </h2>

          <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_#10B981]"></div>

        </div>

        <div className="mt-8 space-y-6">

          <div>

            <div className="flex justify-between text-sm">

              <span className="text-slate-400">
                Blueprint Processing
              </span>

              <span className="text-blue-400">
                Ready
              </span>

            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">

              <div className="h-full w-full rounded-full bg-blue-500"></div>

            </div>

          </div>

          <div>

            <div className="flex justify-between text-sm">

              <span className="text-slate-400">
                3D Engine
              </span>

              <span className="text-emerald-400">
                Online
              </span>

            </div>

            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">

              <div className="h-full w-full rounded-full bg-emerald-500"></div>

            </div>

          </div>

        </div>

      </div>

      {/* Project Timeline */}

      <div className="rounded-3xl border border-slate-800 bg-[#111318] p-6">

        <h2 className="mb-6 text-xl font-bold text-white">
          Project Timeline
        </h2>

        <div className="space-y-6">

          <div className="flex gap-4">

            <CheckCircle2 className="mt-1 text-emerald-500" />

            <div>

              <h3 className="font-semibold text-white">
                Workspace Initialized
              </h3>

              <p className="text-sm text-slate-400">
                GhostBuild is ready for a new project.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <Clock3 className="mt-1 text-amber-400" />

            <div>

              <h3 className="font-semibold text-white">
                Awaiting Blueprint
              </h3>

              <p className="text-sm text-slate-400">
                Upload architectural drawings to begin.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <Layers3 className="mt-1 text-blue-500" />

            <div>

              <h3 className="font-semibold text-white">
                3D Generation
              </h3>

              <p className="text-sm text-slate-400">
                Automatic structural reconstruction.
              </p>

            </div>

          </div>

          <div className="flex gap-4">

            <HardHat className="mt-1 text-slate-300" />

            <div>

              <h3 className="font-semibold text-white">
                Construction Review
              </h3>

              <p className="text-sm text-slate-400">
                Inspect the generated model before building.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="rounded-3xl border border-slate-800 bg-[#111318] p-6">

        <h2 className="mb-6 text-xl font-bold text-white">
          Workspace
        </h2>

        <div className="space-y-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <FileStack className="text-blue-500" />

              <span className="text-slate-300">
                Projects
              </span>

            </div>

            <span className="font-semibold text-white">
              0
            </span>

          </div>

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <Activity className="text-emerald-500" />

              <span className="text-slate-300">
                System
              </span>

            </div>

            <span className="font-semibold text-emerald-400">
              Ready
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}