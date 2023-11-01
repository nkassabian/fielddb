"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { ConvexClientProvider } from "@/providers/convex.provider";
import { Navbar } from "@/components/Nabar";
import { Toaster } from "sonner";
import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark:bg-[#1f1f1f]")}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="pistachio-theme"
          >
            <Toaster />
            {!router.includes("diagrams") && <Navbar />}
            <main className="h-full">{children}</main>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}