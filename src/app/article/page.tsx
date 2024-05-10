import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
async function getPosts() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data.slice(0, 10);
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Articles({}) {
  const posts = await getPosts();

  return (
    <>
      <div className="flex flex-wrap justify-end pt-4">
        <Button disabled>Create Article</Button>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 px-4">
        {posts.map((post: Post) => {
          return <ArticleCard key={post.id} {...post} />;
        })}
      </div>
    </>
  );
}
