import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "IMO-HOPE For The Hopeless",
    template: "%s | IMO-HOPE",
  },
  description:
    "Evangelical & Free Medical Outreach serving rural communities in Nigeria.",
  icons: {
    icon: "/logo.png", // or /logo.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}