import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
async function getArticles() {
  const res = await axios.get("http://165.227.110.109:5555/articles");
  console.log("++++++++++res", res.data);
  return res.data.articles;
}

type Article = {
  article_id: string;
  title: string;
  content: string;
  topic: string;
  strategy_name: string;
  created_at: string;
};

export default async function Articles({}) {
  const articles = await getArticles();

  return (
    <>
      <div className="flex flex-wrap justify-end pt-4">
        <Button disabled>Create Article</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 px-4">
        {articles.map((article: Article) => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </div>
    </>
  );
}
