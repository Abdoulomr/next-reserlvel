import Navbar from "./Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loadingui from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reservel",
  description: "Réserver votre espace de jeu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="absolute w-full min-h-screen flex flex-col gap-2 items-center justify-center bg-indigo-950">
          <Suspense fallback={<Loadingui />}> {children} </Suspense>
        </main>
      </body>
    </html>
  );
}
