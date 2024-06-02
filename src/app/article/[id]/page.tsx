import axios from "axios";
import { format } from "date-fns";
import Content from "./sections/content";
async function getArticle(article_id: string) {
  const res = await axios.get(
    `http://165.227.110.109:5555/article/${article_id}`
  );
  return res.data;
}

export default async function Articles({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);

  return (
    <div className="p-4 mx-auto">
      <div className="space-y-2 text-center  not-prose py-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] capitalize">
          {article.topic}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {format(article.created_at, "PP")}
        </p>
      </div>
      <Content {...article} />
    </div>
  );
}
