import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [data, setData] = useState<{ message: string }>();
  const fetchFirst = async () => {
    const res = await fetch("https://www.api.rishabhportfolio.site", {
      method: "Get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = (await res.json()) as { message: string };
    setData(data);
  };

  useEffect(() => {
    fetchFirst();
  }, []);

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
