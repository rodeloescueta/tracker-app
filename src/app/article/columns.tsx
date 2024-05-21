"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, ExternalLink, Pencil, Trash } from "lucide-react";
import Link from "next/link";

export type Article = {
  article_id: string;
  title: string;
  content: string;
  topic: string;
  strategy_name: string;
  created_at: string;
};

export const columns: ColumnDef<Article>[] = [
  {
    accessorKey: "topic",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Topic
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="text-left font-medium capitalize">
          {row.getValue("topic")}
        </div>
      );
    },
  },
  {
    accessorKey: "strategy_name",
    header: "Strategy Name",
  },
  {
    accessorKey: "title",
    header: "Path/Title",
    cell: ({ row }) => {
      return <div className="text-left text-xs">{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "article_id",
    // id: "actions",
    header: "Action",
    cell: ({ row }) => {
      // console.log("+++++row", row);
      // console.log("+++++", row.getValue("article_id"));
      return (
        <div className="flex gap-2">
          <Link href={`/article/${row.getValue("article_id")}`}>
            <ExternalLink className="h-4 w-4 stroke-cyan-500" />
          </Link>
        </div>
      );
    },
  },
];
