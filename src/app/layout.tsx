import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto px-4 xl:px-0 bg-gradient-to-tr ">
        <Navbar />
        {children}
        <Toaster position="bottom-right"/>
        <Footer />
      </body>
    </html>
  );
}
