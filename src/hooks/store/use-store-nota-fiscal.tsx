import { MathValuesNotaFiscal } from "@/math/nota-fiscal";
import { create } from "zustand";

type Tstore = {
  dataNotaFiscal: MathValuesNotaFiscal;
};

type Taction = {
  setDataNotaFiscal: (data: MathValuesNotaFiscal) => void;
};

type TStoreNotaFiscal = Tstore & Taction;

const useStoreNotaFiscal = create<TStoreNotaFiscal>()((set) => ({
  dataNotaFiscal: {
    itensVendidos: "",
    valorVenda: 0,
    totalImpostos: 0,
    valorCofins: 0,
    valorInss: 0,
    valorIrpf: 0,
    valorIssqn: 0,
    valorLiquido: 0,
    valorPis: 0,
  },
  setDataNotaFiscal: (dataNotaFiscal) => {
    set({ dataNotaFiscal });
    return;
  },
}));

export default useStoreNotaFiscal;
