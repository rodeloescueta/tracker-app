import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Article, columns } from "./columns";
import axios from "axios";
import { DataTable } from "./data-table";
async function getArticles() {
  const res = await axios.get("http://165.227.110.109:5555/articles");
  return res.data.articles;
}

export default async function Articles({}) {
  const articles = await getArticles();

  return (
    <div className="p-2">
      <DataTable columns={columns} data={articles} />
    </div>
  );
}
