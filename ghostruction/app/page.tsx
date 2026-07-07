import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight, Layers, Upload, ShieldCheck, MapPin } from "lucide-react";

export default async function HomePage() {
  const { userId } = await auth();
  const isSignedIn = Boolean(userId);

  return (
    <main className="min-h-screen bg-[#05080f] text-white">
      <header className="border-b border-slate-800 px-6 py-5 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white">
              G
            </div>
            <div>
              <p className="text-lg font-semibold">GhostRuction</p>
              <p className="text-sm text-slate-400">
                Blueprint AI for construction teams
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            {isSignedIn ? (
              <>
                <Link
                  href="/"
                  className="rounded-2xl px-4 py-2 text-sm text-slate-200 transition hover:text-white"
                >
                  Dashboard
                </Link>
                <Link
                  href="/upload"
                  className="rounded-2xl border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 transition hover:bg-blue-500/15"
                >
                  Upload
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="rounded-2xl px-4 py-2 text-sm text-slate-200 transition hover:text-white"
                >
                  Sign in
                </Link>
                <Link
                  href="/sign-up"
                  className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_20%)]" />
        <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 xl:grid-cols-[1.2fr_0.9fr] xl:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
              GhostRuction turns blueprints into construction-ready workflows.
            </div>

            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl">
                Build smarter with AI-powered blueprint scanning and project
                automation.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Upload your architectural drawings, let GhostRuction analyze
                structure and walls, and manage every project stage from one
                secure workspace.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {isSignedIn ? (
                <>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-blue-500"
                  >
                    Open dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/upload"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-white/5 px-7 py-3 text-base font-semibold text-slate-200 transition hover:border-blue-500 hover:text-white"
                  >
                    Upload blueprint
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-3 text-base font-semibold text-white transition hover:bg-blue-500"
                  >
                    Sign in to upload
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/sign-up"
                    className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-white/5 px-7 py-3 text-base font-semibold text-slate-200 transition hover:border-blue-500 hover:text-white"
                  >
                    Create account
                  </Link>
                </>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-[#0f1320] p-6">
                <p className="text-3xl font-bold text-white">Fast</p>
                <p className="mt-2 text-sm text-slate-400">
                  Upload blueprints and get AI insights in minutes.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-[#0f1320] p-6">
                <p className="text-3xl font-bold text-white">Connected</p>
                <p className="mt-2 text-sm text-slate-400">
                  Manage plans, uploads, and models from one dashboard.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-[#0f1320] p-6">
                <p className="text-3xl font-bold text-white">Secure</p>
                <p className="mt-2 text-sm text-slate-400">
                  Private project workspaces with user-based access.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-xl sm:max-w-2xl">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
              <div className="flex items-center justify-between rounded-3xl bg-[#0c1220] p-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                    Live preview
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    Blueprint scan in progress
                  </p>
                </div>
                <div className="rounded-2xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                  AI
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="rounded-3xl border border-slate-800 bg-[#0e1628] p-5">
                  <span className="text-sm text-slate-400">Project</span>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    Northview Residence
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Blueprint uploaded and analyzed for walls, rooms, and zones.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-[#111827] p-5">
                    <p className="text-sm text-slate-400">Blueprints</p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      4 files
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-[#111827] p-5">
                    <p className="text-sm text-slate-400">Processing</p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      68%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}