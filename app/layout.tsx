import { Suspense } from "react";
import Navbar from "./Navbar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Loading from "./loading";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

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
      <body className={roboto.className}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <main className="absolute w-full min-h-screen flex flex-col gap-2 items-center justify-center bg-slate-50">
            {children}
          </main>
        </Suspense>
      </body>
    </html>
  );
}
