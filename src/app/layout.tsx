import type { Metadata } from "next";

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

const themeInitScript = `(function(){try{document.documentElement.classList.add("dark");localStorage.setItem("theme","dark");}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
