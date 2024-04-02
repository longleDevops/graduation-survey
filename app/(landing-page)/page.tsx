import { Content } from "./components/content";
import { Header } from "./components/header";

export default function Home() {
  return (
    <main className="px-16 max-w-screen-2xl mx-auto">
      <div className="h-screen flex flex-col">
        <Header />
        <Content />
      </div>
    </main>
  );
}
