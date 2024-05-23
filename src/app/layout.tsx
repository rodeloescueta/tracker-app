import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
// import SidebarMenu from "@/components/SidebarMenu";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark,
        signIn: { baseTheme: neobrutalism },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} flex items-start jsutify-between`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="hidden lg:flex min-w-[300px] min-h-screen">
              <Sidebar />
            </div>
            <main className="w-full h-full">
              <Header />
              {children}
              <Toaster />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
