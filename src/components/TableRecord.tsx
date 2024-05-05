"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useRecordStore } from "@/store";

export default function TableRecord() {
  const isLoading = useRecordStore((state) => state.isLoading);
  const records = useRecordStore((state) => state.records);
  return (
    <Table>
      <TableCaption>
        {isLoading ? "loading...." : "A list of your recent uploads."}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Keyword</TableHead>
          <TableHead>url</TableHead>
          <TableHead>Headers</TableHead>
          <TableHead className="text-right">Topic</TableHead>
          <TableHead className="text-right">Strategy Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {records.map((el, i) => {
          return (
            <TableRow key={i}>
              <TableCell className="font-medium">{el.keyword}</TableCell>
              <TableCell>{el.url}</TableCell>
              <TableCell>{el.headers}</TableCell>
              <TableCell className="text-right">{el.topic}</TableCell>
              <TableCell className="text-right">{el.strategy_name}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
