## Olá, Amigos :grin:

Esse projeto foi criado para um processo seletivo para estágio.

requisito do projeto:

>A leitura dos dados necessários para a emissão de uma Nota Fiscal de Serviço (NFS-e). 
Dados de entrada: 
Valor da Venda, 
Itens que estão sendo vendidos, 
Porcentagem do Imposto (IRPF), 
Porcentagem do Imposto (PIS), 
Porcentagem do Imposto (COFINS), 
Porcentagem do Imposto (INSS), 
Porcentagem do Imposto (ISSQN);
O cálculo dos impostos de acordo com os dados inseridos;
A geração e exibição da Nota Fiscal na própria página, com os dados que foram informados pelo usuário e os cálculos dos respectivos impostos.

Requisto de tecnologia: HTML + JS :smile:

Tecnologia usada para criar o projeto :wink: :
- React
- Nextjs
- TypeScript
- Shadcn-ui
- Tawilnd Css
- React-hook-form
- Zod
- Zustand


### Dificuldades:
Primeiro dificuldade: Transformar os input com type number react-hook-form e zod, mas estava com o problema de ponto e virgula.
Segunda dificuldade: o padrão é do estados unidos. Precisei criar regex e validações para formatar para brasil e espero ter conseguido.
> No Brasil e em muitos outros países, a vírgula é usada como separador decimal. Por exemplo, o número π (pi) é aproximadamente 3,142 no Brasil.
> Em alguns países, como os Estados Unidos, o ponto é usado como marcador decimal. Por exemplo, o valor de π (pi) nos EUA é aproximadamente 3.142 (com ponto).

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
