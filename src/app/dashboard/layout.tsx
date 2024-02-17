import { Sidebar } from "../../components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <div className="w-64"> {/* se arreglo el height del sidebard */}
          <Sidebar />
        </div>
        <div className="w-full text-slate-900 flex-1">{children}</div>
      </div>
    </div>
  );
}
