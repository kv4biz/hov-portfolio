import { Header } from "@/components/header";
import Service from "@/components/service";

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[1660px] mx-auto items-center flex flex-col">
      <Header />
      <Service />
      <div className="h-[]"></div>
    </div>
  );
}
