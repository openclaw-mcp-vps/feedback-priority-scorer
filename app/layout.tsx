import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Feedback Priority Scorer — Score customer feedback by revenue impact",
  description: "Analyzes customer feedback and assigns priority scores based on customer value, contract size, and churn risk. Built for product managers at B2B SaaS companies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ad868b95-13a7-4409-bd6f-e455e6e3355a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
