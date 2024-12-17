import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const nanum = localFont({
  src: [
    {
      path: "../fonts/NanumSquareB.ttf",
    },
    {
      path: "../fonts/NanumSquareR.ttf",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanum.className} antialiased`}>
        <div className="max-w-[1200px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
