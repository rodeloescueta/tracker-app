import { Metadata } from "next";
import { currentUser } from "@clerk/nextjs/server";
import Upload from "@/components/Upload";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default async function DashboardPage() {
  const user = await currentUser();
  return (
    <div className="px-2 md:px-6">
      {user && (
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight hidden md:block">
            Dashboard
          </h2>
          <div className="flex items-center space-x-2">
            <Upload />
          </div>
        </div>
      )}
    </div>
  );
}
