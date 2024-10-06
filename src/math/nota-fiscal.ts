import { Tform } from "@/schema/schema-form-nota-fiscal";

export type MathValuesNotaFiscal = {
  valorVenda: number;
  itensVendidos: string;
  valorIrpf: number;
  valorPis: number;
  valorCofins: number;
  valorInss: number;
  valorIssqn: number;
  totalImpostos: number;
  valorLiquido: number;
};

const mathNotaFiscal = ({
  valorVenda,
  cofins,
  inss,
  irpf,
  issqn,
  pis,
  itensVendidos,
}: Tform): MathValuesNotaFiscal => {
  const valorIrpf = valorVenda * (irpf / 100);
  const valorPis = valorVenda * (pis / 100);
  const valorCofins = valorVenda * (cofins / 100);
  const valorInss = valorVenda * (inss / 100);
  const valorIssqn = valorVenda * (issqn / 100);

  const totalImpostos =
    valorIrpf + valorPis + valorCofins + valorInss + valorIssqn;
  const valorLiquido = valorVenda - totalImpostos;

  return {
    valorVenda,
    itensVendidos,
    valorPis,
    totalImpostos,
    valorCofins,
    valorInss,
    valorIrpf,
    valorIssqn,
    valorLiquido,
  };
};

export default mathNotaFiscal;
