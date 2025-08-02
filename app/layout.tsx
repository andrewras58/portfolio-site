import type { Metadata } from "next";
import "./globals.css";
import StarryBackground from "./components/StarryBackground";
import { Toaster } from "@/app/components/ui/sonner";
import { ViewTransitions } from "next-view-transitions";


export const metadata: Metadata = {
  title: "Andrew Ras | Full Stack Developer",
  description: "Portfolio for Andrew Ras, a full stack web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className="bg-black">
          <Toaster position="top-center" richColors/>
          <StarryBackground />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
