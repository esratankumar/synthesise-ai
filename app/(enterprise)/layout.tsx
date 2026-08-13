import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";

export default function EnterpriseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black text-white">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <TopBar />

        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}
