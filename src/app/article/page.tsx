import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Article, columns } from "./columns";
import axios from "axios";
import { DataTable } from "./data-table";
import LogMessage from "./log";
async function getArticles() {
  const res = await axios.get(`${process.env.TOOL_BASE_URL}/articles`);
  return res.data.articles;
}

export default async function Articles({}) {
  const articles = await getArticles();

  return (
    <div className="p-2">
      <DataTable columns={columns} data={articles} />
      <LogMessage />
    </div>
  );
}
