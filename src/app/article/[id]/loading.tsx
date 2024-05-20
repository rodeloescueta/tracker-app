import { Loader } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader className="w-16 h-16 animate-spin" />
    </div>
  );
}
