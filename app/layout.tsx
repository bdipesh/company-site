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
        <head>
            <script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                async
                defer
            ></script>
        </head>
        <body>
        {children}

        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/695df83973ebb51980332529/1jebh38n5';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                `,
            }}
        />
        </body>
        </html>
    );
}
