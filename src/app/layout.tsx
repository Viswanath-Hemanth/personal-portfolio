import type { Metadata } from "next";
import Script from "next/script";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hemanth | Generative AI Engineer",
  description: "Portfolio of Viswanath Hemanth Chadalawada - Generative AI Engineer and Technical Lead.",
  openGraph: {
    title: "Hemanth | Generative AI Engineer",
    description: "Building scalable AI systems, fine-tuning LLMs, and shipping production-grade products.",
    type: "website",
  },
};

const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark");}else{document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
