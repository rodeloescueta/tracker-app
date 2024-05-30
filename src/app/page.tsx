import { auth } from "@/auth";
import { Metadata } from "next";
import Upload from "@/components/Upload";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import UploadScraper from "@/components/UploadScraper";

export const metadata: Metadata = {
  title: "Thierry App",
  description: "AI Tools",
};

export default async function DashboardPage() {
  const session = await auth();
  return (
    <div className="px-2 md:px-6">
      <div className="flex items-center justify-between space-y-2 p-4">
        {/* {JSON.stringify(session, null, 2)}
        <h2 className="text-3xl font-bold tracking-tight hidden md:block">
          Dashboard
        </h2> */}

        {/* <div className="flex items-center space-x-2">
          <h3>Article</h3>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex "
          >
            <Upload />
          </HoverBorderGradient>
        </div> */}
        <div className="flex items-center space-x-2">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex "
          >
            <UploadScraper />
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
}
