"use client";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

const LogMessage = () => {
  const { toast } = useToast();

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5555/logs");
    eventSource.onmessage = function (event) {
      console.log(event.data);
      toast({
        title: "Backend log:",
        description: event.data,
      });
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      {/* <h1>Log Viewer</h1>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>{log.message}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default LogMessage;
