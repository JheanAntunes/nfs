"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useFormNotaFiscal from "@/hooks/use-form-nota-fiscal";

export function FormNotaFiscal() {
  const { form, onSubmit } = useFormNotaFiscal();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="valorVenda"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor da Venda:</FormLabel>
              <FormControl>
                <Input placeholder="ex: 10.000,00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="itensVendidos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Itens Vendidos:</FormLabel>
              <FormControl>
                <Input
                  placeholder="ex: Desenvolvimento de Sofware"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="irpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Porcentagem do Irpf:</FormLabel>
              <FormControl>
                <Input placeholder="ex: 15" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pis"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Porcentagem do Pis:</FormLabel>
              <FormControl>
                <Input placeholder="ex: 1,61" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cofins"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Porcentagem do Cofins:</FormLabel>
              <FormControl>
                <Input placeholder="ex: 3" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inss"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Porcentagem do Inss:</FormLabel>
              <FormControl>
                <Input placeholder="ex: 11" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="issqn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Porcentagem do Issqn:</FormLabel>
              <FormControl>
                <Input placeholder="ex: 5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
