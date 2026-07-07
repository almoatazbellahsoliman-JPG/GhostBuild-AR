"use client";

import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-slate-800 bg-[#0F1115] px-8 flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back, Moataz.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search projects..."
            className="w-80 rounded-2xl border border-slate-700 bg-[#151922] py-3 pl-11 pr-4 text-sm text-white outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* New Project */}
        <button className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
          + New Project
        </button>

        {/* Notifications */}
        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-[#151922] transition hover:border-blue-500 hover:bg-blue-500/10">
          <Bell size={20} className="text-white" />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-blue-500"></span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-[#151922] px-3 py-2 transition hover:border-blue-500">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/30">
            M
          </div>

          <div className="text-left">
            <p className="font-semibold text-white">
              Moataz
            </p>

            <p className="text-xs text-slate-400">
              Founder
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}