import { Toaster } from "react-hot-toast";
import "./main.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main >
        <Navbar />
        {children}
        <Toaster position="bottom-right"/>
        <Footer />
      </main>
    </div>
  );
}
