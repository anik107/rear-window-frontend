import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import clsx from "clsx";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(nunito.className, "antialiased min-h-screen")}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}