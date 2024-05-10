import { Avatar } from "@/components/ui/avatar";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ExamplImage from "../../../../public/example.svg";

export default function Articles({
  searchParams,
}: {
  searchParams: {
    id: string;
    title: string;
  };
}) {
  return (
    <div>
      <main className="py-6 px-4 md:px-6 lg:py-16 md:py-12">
        <article className="py-4 text-center prose prose-gray mx-auto dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
              {searchParams.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Posted on December 24, 2023
            </p>
          </div>
          <p>
            New York, the city that never sleeps. A city where dreams are made
            and broken, where the hustle never stops.
          </p>
          <div className="flex justify-center">
            <Image
              alt="New York skyline"
              src={ExamplImage}
              width={500}
              height={500}
            />
          </div>
          <p>
            From the towering skyscrapers of Manhattan to the hipster streets of
            Brooklyn, every corner of New York has a story to tell.
          </p>
          <h2 className="mt-4">Comments</h2>
        </article>
        <Card>
          <CardHeader>
            <Avatar className="mr-2" />
            <h3 className="text-lg font-bold">John Doe</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              I love New York! Thanks for sharing this.
            </p>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardHeader>
            <Avatar className="mr-2" />
            <h3 className="text-lg font-bold">Jane Smith</h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Great post! Makes me want to visit New York again.
            </p>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Label htmlFor="comment">Leave a comment</Label>
          <Textarea
            className="mt-2 text-gray-700 w-full h-20"
            id="comment"
            placeholder="Your comment here..."
          />
          <Button className="mt-4" variant="default">
            Submit
          </Button>
        </div>
      </main>
    </div>
  );
}
