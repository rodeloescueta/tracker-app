"use client";
import { BookCheck, Bot, Cable, Newspaper, User } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import Title from "./Title";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
      <Title />
      <div className="grow">
        <Command className="rounded-lg border shadow-md">
          <CommandList>
            <CommandGroup heading="Tools">
              <Link href="/" className=" ">
                <CommandItem
                  className={`flex gap-4 py-4 ${
                    pathname === "/" ? "!bg-primary" : ""
                  }`}
                >
                  <Bot />
                  SEO AI
                </CommandItem>
              </Link>
              <Link href="/wp">
                <CommandItem
                  className={`flex gap-4 py-4 ${
                    pathname.includes("/wp") ? "!bg-primary" : ""
                  }`}
                >
                  <Cable />
                  Wordpress API
                </CommandItem>
              </Link>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Article">
              <Link href="/article">
                <CommandItem
                  className={`flex gap-4 py-4 ${
                    pathname.includes("/article") ? "!bg-primary" : ""
                  }`}
                >
                  <Newspaper />
                  List
                </CommandItem>
              </Link>
              <Link href="/editor">
                <CommandItem
                  className={`flex gap-4 py-4 ${
                    pathname.includes("/editor") ? "!bg-primary" : ""
                  }`}
                >
                  <BookCheck />
                  Publish
                </CommandItem>
              </Link>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <div className="flex items-center space-x-4 mx-2">
        <ModeToggle />
        <SignedOut>
          {/* <SignInButton /> */}
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
