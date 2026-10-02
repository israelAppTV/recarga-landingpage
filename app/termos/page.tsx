import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | PlaySync Pro",
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-gray-950 px-4 py-24 text-gray-300 sm:px-6">
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <h1 className="text-3xl font-bold text-white">Termos de Uso</h1>
        <p className="leading-relaxed">
          O PlaySync Pro oferece códigos de ativação e orientação de
          instalação. A configuração depende do aparelho e da conexão do
          usuário. O atendimento acontece de forma autônoma pelo WhatsApp.
        </p>
        <p className="text-sm leading-relaxed text-gray-500">
          Este site não possui afiliação com o Google LLC, Meta Platforms ou
          WhatsApp Inc.
        </p>
        <Link href="/" className="text-sm text-white underline-offset-4 hover:underline">
          Voltar para o início
        </Link>
      </article>
    </main>
  );
}
