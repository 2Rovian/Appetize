export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-7xl mx-auto px-4 xl:px-0 ">
          {children}
        </main>
      </body>
    </html>
  );
}
