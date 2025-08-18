import { Header } from "@/components/header";
import Service from "@/components/service";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[1660px] mx-auto items-center flex flex-col">
      <Header />
      <Service />
      <Portfolio />
    </div>
  );
}
