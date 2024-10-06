"use client";

import mathNotaFiscal from "@/math/nota-fiscal";
import { formSchema, Tform } from "@/schema/schema-form-nota-fiscal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import useStoreNotaFiscal from "./store/use-store-nota-fiscal";

const useFormNotaFiscal = () => {
  const setDataNotaFiscal = useStoreNotaFiscal(
    (state) => state.setDataNotaFiscal
  );
  const form = useForm<Tform>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      valorVenda: 0,
      itensVendidos: "",
      irpf: 0,
      pis: 0,
      cofins: 0,
      inss: 0,
      issqn: 0,
    },
  });
  const onSubmit: SubmitHandler<Tform> = (data) => {
    const dataNotaFiscal = mathNotaFiscal(data);
    setDataNotaFiscal(dataNotaFiscal);
  };

  return { form, onSubmit };
};

export default useFormNotaFiscal;
