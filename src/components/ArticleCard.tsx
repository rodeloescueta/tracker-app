import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function ArticleCard(post: Post) {
  return (
    <div className="rounded-lg">
      <Link
        href={{
          pathname: `/article/${post.id}`,
          query: {
            id: post.id,
            title: post.title,
          },
        }}
      >
        <Card className="h-80">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
            <CardDescription>Sub title</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{post.body}</p>
          </CardContent>
          <CardFooter>
            <div>December 24, 2023</div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
