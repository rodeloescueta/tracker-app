import { Metadata } from "next";
import Upload from "@/components/Upload";

export const metadata: Metadata = {
  title: "Thierry App",
  description: "AI Tools",
};

export default async function DashboardPage() {
  return (
    <div className="px-2 md:px-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight hidden md:block">
          Dashboard
        </h2>
        <div className="flex items-center space-x-2">
          <Upload />
        </div>
      </div>
    </div>
  );
}
