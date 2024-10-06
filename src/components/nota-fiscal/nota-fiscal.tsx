"use client";
import useStoreNotaFiscal from "@/hooks/store/use-store-nota-fiscal";
import React from "react";

const NotaFiscal = () => {
  const {
    totalImpostos,
    valorCofins,
    valorInss,
    valorIrpf,
    valorIssqn,
    valorLiquido,
    valorPis,
    itensVendidos,
    valorVenda,
  } = useStoreNotaFiscal((state) => state.dataNotaFiscal);

  return (
    <section className="">
      <ul className="space-y-8">
        <h1 className="text-6xl text-neutral-950">Nota Fiscal</h1>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          Valor da Venda:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valorVenda)}
        </li>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          Consultoria {itensVendidos}
        </li>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          IRPF:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valorIrpf)}
        </li>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          PIS:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valorPis)}
        </li>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          COFINS:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valorCofins)}
        </li>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          INSS:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valorInss)}
        </li>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          ISSQN:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valorIssqn)}
        </li>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          Total de Impostos:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalImpostos)}
        </li>
        <li className="text-neutral-800 bg-neutral-100 w-fit p-2 rounded">
          Valor Líquido:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valorLiquido)}
        </li>
      </ul>
    </section>
  );
};

export default NotaFiscal;
