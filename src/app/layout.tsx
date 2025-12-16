import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/provider/posthog-provider";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Point Break - Gestão de Ponto",
  description: "Sistema inteligente de controle de ponto e jornada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
