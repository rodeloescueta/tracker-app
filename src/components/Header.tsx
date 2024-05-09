import React from "react";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import NavMenu from "./NavMenu";
import { currentUser } from "@clerk/nextjs/server";

export default async function Header() {
  const user = await currentUser();
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="md:mx-6 mx-2">TeamIcon</div>
        {user && (
          <div className="mx-2 md:mx-10">
            <NavMenu />
          </div>
        )}
        <div className="flex items-center space-x-4">
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
