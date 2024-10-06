import { z } from "zod";

const { invalid_type_error, message, required_error } = {
  required_error: "string",
  message: "por favor, preencha o campo com número.",
  invalid_type_error: "por favor, preencha o campo",
};

const sanitizedValue = (value: string) => {
  return value.replace(/\./g, "").replace(",", ".");
};

const refineFormat = (value: string) => {
  const regex = /[^0-9]/;
  if (regex.test(value.replaceAll(",", "").replaceAll(".", ""))) return false;
  const number = parseFloat(sanitizedValue(value));
  return number;
};

const transformNumber = (value: string) => {
  const number = parseFloat(sanitizedValue(value));
  return number;
};

export const formSchema = z.object({
  valorVenda: z
    .string({ required_error, invalid_type_error, message })
    .min(1, message)
    .refine((venda) => refineFormat(venda), { message })
    .transform((v) => transformNumber(v)),
  itensVendidos: z.string().min(1, { message }),
  irpf: z
    .string({
      required_error,
      invalid_type_error,
    })
    .refine((irpf) => refineFormat(irpf), { message })
    .transform((irpf) => transformNumber(irpf)),
  pis: z
    .string({
      required_error,
      invalid_type_error,
    })
    .refine((pis) => refineFormat(pis), { message })
    .transform((pis) => transformNumber(pis)),
  cofins: z
    .string({
      required_error,
      invalid_type_error,
    })
    .refine((cofins) => refineFormat(cofins), { message })
    .transform((cofins) => transformNumber(cofins)),
  inss: z
    .string({
      required_error,
      invalid_type_error,
    })
    .refine((inss) => refineFormat(inss), { message })
    .transform((inss) => transformNumber(inss)),
  issqn: z
    .string({
      required_error,
      invalid_type_error,
    })
    .refine((issqn) => refineFormat(issqn), { message })
    .transform((issqn) => transformNumber(issqn)),
});

export type Tform = z.infer<typeof formSchema>;
