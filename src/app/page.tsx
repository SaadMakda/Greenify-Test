// import { Dashboard } from "@/components/Dashboard/Dashboard";
// import { Sidebar } from "@/components/Sidebar/Sidebar";
import Hero from "@/components/Hero";
import CountUpStats from "@/components/CountUpStats"
import Showcase from "@/components/Showcase"
import VanishPrompt from "@/components/VanishPrompt"
export default function Home() {
  return (
    <main>
      <Hero />
      <Showcase />
      <CountUpStats />
      <VanishPrompt />
    </main>
  );
}