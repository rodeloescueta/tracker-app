"use client";
import { toast } from "sonner";
import { useEffect } from "react";

const LogMessage = () => {
  useEffect(() => {
    const eventSource = new EventSource("http://165.227.110.109:5555/logs");
    eventSource.onmessage = function (event) {
      console.log(event.data);
      toast("Log from backend", {
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
