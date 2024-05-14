import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "400" ] });

export const metadata: Metadata = {
  title: "Detecção de Câncer de Mama",
  description: "Ferramenta feita através de aprendizado de máquina para auxiliar a detecção de câncer de mama: Prevenir é o melhor caminho"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link rel="shortcut icon" href="/ribbon.png" />
        </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
