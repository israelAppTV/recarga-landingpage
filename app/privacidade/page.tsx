import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidade | PlaySync Pro",
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-gray-950 px-4 py-24 text-gray-300 sm:px-6">
      <article className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <h1 className="text-3xl font-bold text-white">Privacidade</h1>
        <p className="leading-relaxed">
          Esta página não possui checkout nem cadastro. A conversa de
          atendimento acontece na plataforma de mensagens, e os dados
          informados ali ficam sujeitos às regras dessa plataforma.
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
