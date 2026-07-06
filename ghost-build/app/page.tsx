import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#09090B] overflow-hidden">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <Dashboard />

      </div>

    </div>
  );
}