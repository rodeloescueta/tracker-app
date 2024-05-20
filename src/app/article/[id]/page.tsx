import { Avatar } from "@/components/ui/avatar";
import {
  CardHeader,
  CardContent,
  Card,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ExamplImage from "../../../../public/example.svg";
import axios from "axios";
import { format } from "date-fns";
import DOMPurify from "isomorphic-dompurify";
// import { useRouter } from "next/navigation";

async function getArticle(article_id: string) {
  const res = await axios.get(
    `http://165.227.110.109:5555/article/${article_id}`
  );
  console.log("+++++++++++res.data", res.data);
  return res.data;
}

export default async function Articles({ params }: { params: { id: string } }) {
  // const router = useRouter();
  // const { article_id } = router.query;
  const article = await getArticle(params.id);

  return (
    <article className="p-4 mx-auto">
      <div className="space-y-2 text-center  not-prose py-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem] capitalize">
          {article.topic}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {format(article.created_at, "PP")}
        </p>
      </div>
      <Card className="h-full">
        <CardContent className="p-4 dark:bg-dot-white/[0.1] bg-dot-black/[0.1]">
          <div className="relative pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(article.content),
            }}
          />
        </CardContent>
      </Card>
    </article>
  );
}
