import "./local.css";

export default function WelcomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main > 
        {children}
      </main>
    </div>
  );
}
