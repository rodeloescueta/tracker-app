"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Papa from "papaparse";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRecordStore } from "@/store";

// const acceptableCSVFileTypes: string =
//   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, csv";

type TRecord = {
  keyword: string;
  url: string;
  headers: string;
  topic: string;
  strategy_name: string;
  n_times: string;
  n_articles: string;
  insert_kws: string;
  check_copyscape: string;
  add_to_private: string;
  ai_model: string;
};

export default function Upload() {
  const [uploadData, setUploadData] = useState<TRecord[]>([]);
  const addRecord = useRecordStore((state) => state.addRecord);

  const onSend = async () => {
    if (uploadData.length === 0) return alert("No data to send");
    await addRecord(uploadData);
    setUploadData([]);
  };
  const onCancel = () => {
    setUploadData([]);
  };

  const onFileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const csvfile: any = event?.target?.files?.[0];

    Papa.parse<TRecord>(csvfile, {
      skipEmptyLines: true,
      header: true,
      dynamicTyping: true,
      complete: async function (results) {
        console.log("finished:", results.data);
        setUploadData(results.data);
      },
    });
  };
  return uploadData.length > 0 ? (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Button onClick={onSend}>Send</Button>
      <Button variant="destructive" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  ) : (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="upload">Upload</Label>
      <Input id="upload" type="file" onChange={onFileChangeHandler} />
    </div>
  );
}
