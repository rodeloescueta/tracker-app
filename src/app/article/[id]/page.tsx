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
import { BackgroundBeams } from "@/components/ui/background-beams";
// import { useRouter } from "next/navigation";

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
      <div className="h-full w-full rounded-md relative flex flex-col items-center justify-center antialiased">
        <Card className="h-full bg-neutral-100">
          <CardContent className="p-8 ">
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.content),
              }}
            />
          </CardContent>
        </Card>
        {/* <BackgroundBeams /> */}
      </div>
    </div>
  );
}
