import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dipesh Basnet | Frontend Engineer",
    description: "Frontend Engineer specializing in React, Vue.js, and TypeScript. Building exceptional digital experiences.",
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
