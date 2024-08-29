import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [data, setData] = useState<string>();
  const fetchFirst = async () => {
    const res = await fetch("https://api.rishabhportfolio.site", {
method: "Post", 
headers: {
"Content-Type": "application/json} 
} 
} );
    const data: string = (await res.json()) as string;
    setData(data);
  };

  useEffect(() => {
    fetchFirst();
  }, []);

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {data && <p>{data}</p>}
    </div>
  );
}
