import { Toaster } from "react-hot-toast";
import "./main.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import NoiseBackground from "../NoiseBackground";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="max-w-7xl mx-auto px-4 xl:px-0 ">
        <Navbar />
        {children}
        <Toaster position="bottom-right"/>
        <Footer />
        <NoiseBackground />
      </main>
    </div>
  );
}
