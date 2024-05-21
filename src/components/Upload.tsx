"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Papa from "papaparse";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRecordStore } from "@/store";
import axios from "axios";
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

interface Props {
  email: string;
}

export default function Upload(props: Props) {
  const [uploadData, setUploadData] = useState<TRecord[]>([]);
  const addRecord = useRecordStore((state) => state.addRecord);

  const onSend = async () => {
    if (uploadData.length === 0) return alert("No data to send");
    const res = await axios.post(
      "http://165.227.110.109:5555/process",
      uploadData
    );
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
        Choose File
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
