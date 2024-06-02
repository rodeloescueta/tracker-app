"use client";
import { Button } from "@/components/ui/button";
// import Editor from "@/components/editor";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";
import { Pencil, Save, StepBack } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { toast } from "sonner";

const Editor = dynamic(() => import("@/components/editor"), { ssr: false });

export default function Content({ ...article }) {
  const [articleContent, setArticleContent] = useState(article.content);
  const [editMode, setEditMode] = useState(false);
  const onSave = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_TOOL_BASE_URL}/article`,
        { content: articleContent, article_id: article.article_id }
      );
      if (res.status === 200) {
        setEditMode(false);
        toast("Successfully Saved!", {
          description: res.data?.message,
        });
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  return (
    <div className="h-full w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <Card
        className={`h-full w-4/5 rounded-none ${
          editMode ? "bg-[#020817]" : "bg-neutral-100"
        }`}
      >
        <CardContent className="p-8 ">
          <CardHeader>
            {!editMode ? (
              <div className="flex w-full flex-row-reverse gap-4">
                <Button
                  className="bg-gray-200 border-gray-900 dark:bg-gray-900"
                  variant="outline"
                  onClick={() => setEditMode(true)}
                >
                  <span className="pr-2">Edit</span>{" "}
                  <Pencil className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="flex w-full flex-row-reverse gap-4">
                <Button
                  className="bg-gray-200 border-gray-50 dark:bg-gray-900"
                  variant="outline"
                  onClick={onSave}
                >
                  <span className="pr-2">Save</span>{" "}
                  <Save className="w-4 h-4" />
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => setEditMode(false)}
                >
                  <span className="pr-2">Cancel</span>{" "}
                  <StepBack className="w-4 h-4" />
                </Button>
              </div>
            )}
          </CardHeader>
          {editMode ? (
            <Editor
              content={DOMPurify.sanitize(articleContent)}
              setArticleContent={setArticleContent}
            />
          ) : (
            <div
              className="prose !max-w-none"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(articleContent),
              }}
            />
          )}
        </CardContent>
      </Card>
      {/* <BackgroundBeams /> */}
    </div>
  );
}
