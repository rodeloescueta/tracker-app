import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DashboardTabs from "@/components/DashboardTabs";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div className="mx-6">TeamIcon</div>
            <div className="ml-auto flex items-center space-x-4">Search</div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Button>Import</Button>
            </div>
          </div>
          <DashboardTabs />
        </div>
      </div>
    </>
  );
}
