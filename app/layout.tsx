import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Yoursfriend Tech | Digital solution",
    description: "A complete digital solution.",
    keywords: ["Frontend Engineer", "React", "Vue.js", "TypeScript", "Next.js", "Web Development"],
    authors: [{ name: "Dipesh Basnet" }],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
