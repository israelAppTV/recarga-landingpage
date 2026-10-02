import {
  Cast,
  Check,
  Gift,
  Laptop,
  Plus,
  ShoppingCart,
  Smartphone,
  Star,
  Tv,
} from "lucide-react";

const WHATSAPP_NUMBER = "5511911950388";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20adquirir%20meu%20c%C3%B3digo%20de%20acesso.`;
const MONTHLY_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20quero%20o%20plano%20Mensal%20de%2019%20reais`;
const ANNUAL_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20quero%20o%20plano%20Anual%20de%20180%20reais`;

const menu = [
  { label: "Início", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
] as const;

const sharedBenefits = [
  "2 ecrãs em simultâneo",
  "Qualidade FHD",
  "Atualizações diárias",
  "Ativação imediata",
] as const;

const badges = [
  "PIX instantâneo",
  "Código no WhatsApp",
  "Compatibilidade Total",
] as const;

const testimonials = [
  {
    name: "Lucas P.",
    initial: "L",
    color: "bg-red-600",
    text: "Pedi pelo WhatsApp e o código chegou em menos de um minuto. Atendimento rápido e sem complicação.",
  },
  {
    name: "Fernanda R.",
    initial: "F",
    color: "bg-purple-600",
    text: "Respondem na hora no WhatsApp e a ativação foi imediata. Recomendo a quem quer o código sem espera.",
  },
  {
    name: "Rafael M.",
    initial: "R",
    color: "bg-amber-500",
    text: "O suporte pelo WhatsApp foi direto e o código chegou na conversa quase de imediato. Muito rápido.",
  },
] as const;

const highlights = [
  { value: "2 Ecrãs", label: "Telas em simultâneo" },
  { value: "FHD", label: "Qualidade" },
  { value: "24h", label: "Entrega automática" },
  { value: "5+", label: "Plataformas suportadas" },
] as const;

const steps = [
  { title: "Escolha o plano" },
  {
    title: "Fale no WhatsApp",
    text: "Clique no botão e fale connosco.",
  },
  { title: "Pague via PIX", text: "Processamento em segundos." },
  {
    title: "Receba e ative",
    text: "Código chega na hora na conversa.",
  },
] as const;

const devices = [
  {
    icon: Smartphone,
    title: "Telemóvel Android",
    text: "Instale a aplicação, cole o código enviado no WhatsApp e comece a ver em poucos minutos.",
  },
  {
    icon: Cast,
    title: "Dispositivo de Mídia",
    text: "No TV Box ou stick, abra a app, introduza o código e a ativação fica pronta na hora.",
  },
  {
    icon: Tv,
    title: "Smart TV",
    text: "Procure a aplicação na loja da sua TV, instale e ative com o código recebido na conversa.",
  },
  {
    icon: Laptop,
    title: "PC / iPhone",
    text: "Aceda pelo navegador ou pela aplicação e conclua a instalação com o mesmo código.",
  },
] as const;

const faqs = [
  {
    question: "A recarga é segura?",
    answer:
      "Sim. O pagamento é feito via PIX e o código de ativação é enviado diretamente na conversa do WhatsApp.",
  },
  {
    question: "Posso usar em 2 ecrãs ao mesmo tempo?",
    answer:
      "Sim. Os planos incluem 2 ecrãs em simultâneo, para assistir em mais do que um aparelho.",
  },
  {
    question: "Como recebo o código de recarga?",
    answer:
      "Depois de escolher o plano e confirmar o PIX no WhatsApp, o código chega na mesma conversa.",
  },
  {
    question: "Quanto tempo demora a ativação?",
    answer:
      "A entrega é automática. Na maior parte dos casos o código chega em menos de um minuto.",
  },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44ZM12.07 21.15h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.87-9.9 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="size-4 fill-yellow-400 text-yellow-400"
        />
      ))}
    </span>
  );
}

function Price({
  whole,
  cents = "00",
}: {
  whole: string;
  cents?: string;
}) {
  return (
    <p className="flex items-start justify-center font-bold text-white">
      <span className="mt-3 text-lg font-semibold text-gray-300">R$</span>
      <span className="text-6xl tracking-tight">{whole}</span>
      <span className="mt-2 text-2xl">,{cents}</span>
    </p>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[70vh] w-[min(100%,56rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.28)_0%,rgba(220,38,38,0.08)_38%,transparent_70%)]"
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="text-lg font-bold tracking-tight">PlaySync</span>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-amber-400"
          >
            Comprar Agora
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section
          id="inicio"
          className="flex min-h-screen flex-col items-center justify-center px-4 py-20 sm:px-6"
        >
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 pt-16 text-center">
          <p className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300 sm:text-sm">
            Ativação 24h - Entrega instantânea via WhatsApp
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-white">Recarga Oficial</span>
            <span className="mt-2 block bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
              Código na Hora via PIX.
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            O seu sistema oficial com entrega automática pelo WhatsApp. Escolha
            entre o plano mensal por R$19,00 ou anual por R$180,00 e assista
            onde quiser.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-3">
            {badges.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200"
              >
                <Check className="size-4 text-green-500" aria-hidden="true" />
                {badge}
              </li>
            ))}
          </ul>

          <div className="flex w-full flex-col items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-yellow-500 px-8 py-4 text-base font-bold text-black transition-colors hover:bg-yellow-400 sm:text-lg"
            >
              <ShoppingCart className="size-5" aria-hidden="true" />
              Comprar Recarga
            </a>

            <p className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-300">
              <span className="sr-only">Avaliação 4.9 de 5.</span>
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </span>
              <span>4.9 - +8.200 clientes satisfeitos</span>
            </p>
          </div>
        </div>
        </section>

        <section id="planos" className="scroll-mt-24 px-4 py-20 sm:px-6">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Escolha o seu plano de recarga PlaySync
              </h2>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Pagamento seguro via PIX. Código de ativação entregue na hora
                pelo WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <article className="relative flex flex-col rounded-3xl border border-white/10 bg-[#111] p-8 pt-16 transition duration-300 hover:border-red-500/70 hover:shadow-[0_0_48px_rgba(220,38,38,0.28)]">
                <span className="absolute right-6 top-6 rounded-full bg-red-600 px-3 py-1 text-xs font-bold tracking-wide text-white">
                  MAIS POPULAR
                </span>
                <h3 className="text-center text-lg font-semibold text-gray-200">
                  Mensal
                </h3>
                <div className="mt-4">
                  <Price whole="19" />
                </div>
                <ul className="mt-8 flex flex-col gap-4">
                  {sharedBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-gray-200"
                    >
                      <Check
                        className="size-5 shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href={MONTHLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-6 py-4 text-center text-base font-bold text-white transition-colors hover:bg-red-500"
                  >
                    Comprar Recarga Mensal
                  </a>
                </div>
              </article>

              <article className="relative flex flex-col rounded-3xl border border-green-500/50 bg-[#111] p-8 pt-16 shadow-[0_0_40px_rgba(34,197,94,0.16)]">
                <span className="absolute left-1/2 top-5 w-max max-w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-center text-[11px] font-bold leading-snug tracking-wide text-black sm:text-xs">
                  🔥 MELHOR ESCOLHA — POUPE MUITO
                </span>
                <h3 className="text-center text-lg font-semibold text-gray-200">
                  Anual
                </h3>
                <p className="mt-4 text-center text-sm text-gray-500 line-through">
                  R$ 228,00
                </p>
                <Price whole="180" />
                <ul className="mt-8 flex flex-col gap-4">
                  {sharedBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-gray-200"
                    >
                      <Check
                        className="size-5 shrink-0 text-green-500"
                        aria-hidden="true"
                      />
                      {benefit}
                    </li>
                  ))}
                  <li className="flex items-center gap-3 text-gray-200">
                    <Gift
                      className="size-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    Prioridade no suporte VIP
                  </li>
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    href={ANNUAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-green-500 px-6 py-4 text-center text-base font-bold text-black transition-colors hover:bg-green-400"
                  >
                    Comprar Recarga Anual
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <span className="sr-only">Avaliação 4.9 de 5.</span>
                <Stars />
                <span>4.9/5</span>
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Quem fez a recarga recomenda
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="flex flex-col gap-5 rounded-2xl bg-[#111] p-6"
                >
                  <Stars />
                  <p className="leading-relaxed text-gray-300">{item.text}</p>
                  <div className="mt-auto flex items-center gap-3">
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${item.color}`}
                      aria-hidden="true"
                    >
                      {item.initial}
                    </span>
                    <span className="font-medium text-white">{item.name}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="scroll-mt-24 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Como funciona a recarga?
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {highlights.map((item) => (
                <article
                  key={item.value}
                  className="rounded-2xl bg-[#1a1a1a] px-4 py-8 text-center"
                >
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-400">{item.label}</p>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl bg-[#111] p-5"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                  {"text" in step ? (
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {step.text}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Em quais aparelhos funciona?
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {devices.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl bg-[#111] p-6">
                  <Icon className="size-8 text-red-500" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 px-4 py-20 sm:px-6">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl bg-[#111] px-5 py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <Plus
                      className="size-5 shrink-0 text-gray-300 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="pt-3 text-sm leading-relaxed text-gray-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Pronto para fazer a sua recarga?
            </h2>
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href={MONTHLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-red-600 px-6 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-red-500 sm:text-base"
              >
                Recarga Mensal — R$19,00
              </a>
              <a
                href={ANNUAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center rounded-full bg-green-500 px-6 py-4 text-center text-sm font-bold text-black transition-colors hover:bg-green-400 sm:text-base"
              >
                Recarga Anual — R$180,00
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black px-4 py-12 sm:px-6">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-3 md:items-start">
          <span className="text-lg font-bold tracking-tight text-white">
            PlaySync
          </span>
          <nav className="flex flex-col gap-3" aria-label="Links rápidos">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Links rápidos
            </p>
            {menu.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-xs leading-relaxed text-gray-500">
            Este site não possui vínculo oficial com plataformas de anúncios.
            Todo o atendimento é feito via WhatsApp.
          </p>
        </div>
      </footer>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg animate-pulse"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}
