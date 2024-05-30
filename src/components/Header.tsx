import React from "react";
import { ModeToggle } from "./mode-toggle";
import AuthButton from "@/app/AuthButton.server";

export default async function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between md:px-4 px-2">
        <div className="md:mx-6 mx-2">{` `}</div>
        <div className="flex items-center space-x-4 mx-2">
          <AuthButton />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
