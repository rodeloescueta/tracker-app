import ArticleCard from "@/components/ArticleCard";
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
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10">
      {posts.map((post: Post) => {
        return <ArticleCard key={post.id} {...post} />;
      })}
    </div>
  );
}
