import bgImg from "../../../public/bgImg3.jpg"
import Image from "next/image";
import "./local.css";

export default function WelcomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      
      {/* Conteúdo */}
      <main > 
        {children}
      </main>
    </div>
  );
}
