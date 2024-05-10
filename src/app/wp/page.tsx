import React from "react";
import { Card, CardContent } from "@/components/ui/card";
const reqUrl = "http://testdomain123533.xyz/wp-json/wp/v2";

export default async function WordpressConnect() {
  const getData = async () => {
    const res = await fetch(reqUrl);
    return res.json();
  };
  const data = await getData();

  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
      <Card className=" pt-4">
        <CardContent>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </CardContent>
      </Card>
    </div>
  );
}
