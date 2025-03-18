import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import  {auth}  from "@/auth";
import { Toaster } from "@/components/ui/sonner";

const poppin = Poppins({ subsets: ["latin"], weight: ["300","400", "700"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-gradient-to-b from-sky-600 to-sky-300 ${poppin.className}`} suppressHydrationWarning >
        <Toaster />
        {children}
      </body>
    </html>
    </SessionProvider>
  
  );
}
