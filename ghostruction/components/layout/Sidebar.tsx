"use client";

import {
  LayoutDashboard,
  FolderOpen,
  Upload,
  Box,
  Share2,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Projects", icon: FolderOpen },
  { name: "Upload Blueprint", icon: Upload },
  { name: "3D Viewer", icon: Box },
  { name: "Share", icon: Share2 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#0F1115] border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-[#151922] border border-slate-700 flex items-center justify-center shadow-lg">

            <span className="text-2xl font-black tracking-tight">
              <span className="text-white">G</span>
              <span className="text-blue-500">B</span>
            </span>

          </div>

          <div>

            <h1 className="text-3xl font-black tracking-tight text-white">
              Ghost<span className="text-blue-500">Build</span>
            </h1>

            <p className="text-slate-400 text-sm mt-1">
              From Blueprint to Reality.
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 px-5 py-6 space-y-3">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`w-full rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 border
              ${
                item.active
                  ? "bg-blue-600/10 border-blue-600"
                  : "border-transparent hover:border-blue-600 hover:bg-blue-600/10"
              }`}
            >
              <Icon
                size={20}
                className={`${
                  item.active ? "text-blue-500" : "text-slate-400"
                }`}
              />

              <span
                className={`font-medium ${
                  item.active ? "text-white" : "text-slate-300"
                }`}
              >
                {item.name}
              </span>
            </button>
          );
        })}

      </div>

      {/* Bottom Card */}

      <div className="p-6 border-t border-slate-800">

        <div className="rounded-2xl border border-slate-800 bg-[#151922] p-5">

          <h3 className="text-white font-bold text-lg">
            GhostBuild
          </h3>

          <p className="text-slate-400 text-sm mt-2">
            From Blueprint to Reality.
          </p>

          <div className="mt-5 h-2 rounded-full bg-slate-800 overflow-hidden">

            <div className="h-full w-[22%] rounded-full bg-blue-500"></div>

          </div>

          <p className="text-xs text-slate-500 mt-2">
            Development Progress • 22%
          </p>

        </div>

      </div>

    </aside>
  );
}