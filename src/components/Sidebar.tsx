"use client";
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
import { BookCheck, Bot, Cable, Newspaper, User } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Sidebar() {
  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen">
      <Title />
      <div className="grow">
        <Command>
          <CommandList style={{ overflow: "visible" }}>
            <CommandGroup heading="Tools">
              <Link href="/">
                <CommandItem className="flex gap-4 py-4">
                  <Bot />
                  SEO AI
                </CommandItem>
              </Link>
              <Link href="/wp">
                <CommandItem className="flex gap-4 py-4">
                  <Cable />
                  Wordpress API
                </CommandItem>
              </Link>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Article">
              <Link href="/article">
                <CommandItem className="flex gap-4 py-4">
                  <Newspaper />
                  List
                </CommandItem>
              </Link>
              <Link href="/editor">
                <CommandItem className="flex gap-4 py-4">
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
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
