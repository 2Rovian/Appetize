import "./local.css";
export default function WelcomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="bg-gray-200 text-amber-500 w-full h-[1000px]">
        <main>{children}</main>
      </div>
    );
  }
  