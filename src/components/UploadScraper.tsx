"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Papa from "papaparse";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRecordStore } from "@/store";
import axios from "axios";
import { toast } from "sonner";

type TRecord = {
  urls: string;
  url_topic: string;
  scraped: string;
  to_scrape: string;
};

export default function UploadScraper() {
  const [uploadScraperData, setUploadScraperData] = useState<TRecord[]>([]);

  const onSend = async () => {
    if (uploadScraperData.length === 0) return alert("No data to send");
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TOOL_BASE_URL}/process-url`,
      uploadScraperData
    );
    if (res?.status === 200) {
      toast("File sent!", {
        description: res?.data?.message,
      });
    }
    setUploadScraperData([]);
  };
  const onCancel = () => {
    setUploadScraperData([]);
  };

  const onFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const csvfile: any = event?.target?.files?.[0];

    Papa.parse<TRecord>(csvfile, {
      skipEmptyLines: true,
      header: true,
      dynamicTyping: true,
      complete: async function (results) {
        console.log("finished:", results.data);
        setUploadScraperData(results.data);
      },
    });
  };
  return uploadScraperData.length > 0 ? (
    <div className="flex items-center w-fit rounded-full">
      <div onClick={onSend} className="cursor-pointer px-4 py-2">
        Send
      </div>
      |
      <div onClick={onCancel} className="cursor-pointer px-4 py-2">
        Cancel
      </div>
    </div>
  ) : (
    <div className="grid items-center">
      <Label htmlFor="upload" className="px-4 py-3 cursor-pointer">
        Choose File to Scrape
      </Label>
      <Input
        id="upload"
        type="file"
        onChange={onFileChangeHandler}
        className="hidden"
      />
    </div>
  );
}
