import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/auth/contact")({
  component: Contact,
});

function Contact() {
  return <div className="p-2">Hello from About!</div>;
}
