import { FormNotaFiscal } from "@/components/nota-fiscal/form";
import NotaFiscal from "@/components/nota-fiscal/nota-fiscal";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-10 p-5 min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <FormNotaFiscal />
      <NotaFiscal />
    </main>
  );
}
