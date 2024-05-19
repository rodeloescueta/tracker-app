import React from "react";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import NavMenu from "./NavMenu";
import { currentUser } from "@clerk/nextjs/server";

export default async function Header() {
  const user = await currentUser();
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between md:px-4 px-2">
        <div className="md:mx-6 mx-2">{` `}</div>
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
    </div>
  );
}
