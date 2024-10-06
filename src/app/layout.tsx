import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nota Fiscal de Serviço (NFS-e)",
  description:
    "A leitura dos dados necessários para a emissão de uma Nota Fiscal de Serviço (NFS-e). Dados de entrada: Valor da Venda, Itens que estão sendo vendidos, Porcentagem do Imposto (IRPF), Porcentagem do Imposto (PIS), Porcentagem do Imposto (COFINS), Porcentagem do Imposto (INSS), Porcentagem do Imposto (ISSQN);O cálculo dos impostos de acordo com os dados inseridos;A geração e exibição da Nota Fiscal na própria página, com os dados que foram informados pelo usuário e os cálculos dosrespectivos impostos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
