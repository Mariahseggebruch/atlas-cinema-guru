import "@/app/global.css";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";
import { inter } from "./font";

export const metadata: Metadata = {
  title: "Cinema Guru | Atlas School",
};

interface RootLayoutProps  {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-navy text-white flex flex-col`}>
        <SessionProvider>
          <Header />
          <div className={'flex flex-row'}>
            <NavBar />
            <main className="main-content"> 
            {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
