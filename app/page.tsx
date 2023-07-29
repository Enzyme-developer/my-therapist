import Image from "next/image";
import User from "./components/user/User";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen px-5 md:px-0 flex-col items-center justify-between">
      <User />
      <Info />
      <Footer />
    </main>
  );
}
