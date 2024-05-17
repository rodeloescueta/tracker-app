import React from "react";
import DOMPurify from "isomorphic-dompurify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

type Article = {
  article_id: string;
  title: string;
  content: string;
  topic: string;
  strategy_name: string;
  created_at: string;
};

export default function ArticleCard(article: Article) {
  return (
    <div className="rounded-lg">
      <Link
        href={{
          pathname: `/article/${article.article_id}`,
          query: {
            id: article.article_id,
            // title: article.title,
          },
        }}
      >
        <Card className="h-80">
          <CardHeader>
            <CardTitle>{article.topic}</CardTitle>
            <CardDescription>{article.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article.content),
              }}
            />
          </CardContent>
          <CardFooter>{article.created_at}</CardFooter>
        </Card>
      </Link>
    </div>
  );
}
