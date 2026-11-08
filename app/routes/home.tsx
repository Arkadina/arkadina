import Header from "~/components/Header";
import type { Route } from "./+types/home";
import Main from "~/components/Main";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Portfolio" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#F6F6F6] flex-col">
      <Header />
      <Main />
    </main>
  );
}
