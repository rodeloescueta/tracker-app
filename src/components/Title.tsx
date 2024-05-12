import React from "react";

export default function Title() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[8px] px-2">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 font[700] flex items-center justify-center">
        <p>TH</p>
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Test title</p>
      </div>
    </div>
  );
}
