"use client";

import React from "react";
// import dynamic from "next/dynamic";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import axios from "axios";

// const Editor = dynamic(() => import("../../components/editor"), { ssr: false });

export default function Editor() {
  const formSchema = z.object({
    title: z.string().min(5, { message: "Hey the title is not long enought" }),
    content: z.string().trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("+++++values", values);
  };

  const jsonData = [
    {
      urls: "https://www.parkerandsons.com/tucson/cooling/ac-repair",
      url_topic: "ac repair",
      scraped: "",
      to_scrape: "x",
    },
  ] as const;

  const onSend = async () => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_TOOL_BASE_URL}/process-url`,
      jsonData
    );
  };

  return (
    <>
      <Button onClick={onSend}>test</Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Main title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  {/* <Tiptap content={field.value} onChange={field.onChange} /> */}
                  {/* <TiptapFull content={field.value} onChange={field.onChange}/> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
