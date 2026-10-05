import { CtaCardSection } from "@/components/CtaCardSection";
import { FaqSection } from "@/components/FaqSection";
import { resolveWhatsappHref } from "@/components/FloatingWhatsAppButton";
import { Hero } from "@/components/Hero";
import { HowToSection } from "@/components/HowToSection";
import { InstallTutorialsSection } from "@/components/InstallTutorialsSection";
import type { PlanCardData } from "@/components/PlanCard";
import { PlansSection } from "@/components/PlansSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TipsSectionWithModal } from "@/components/TipsSectionWithModal";
import {
  productById,
  products,
  type Product,
  whatsappUrl,
} from "@/lib/catalog";

const mensal = productById("unitv-mensal");
const anual = productById("unitv-anual");

const unitvFeatures = [
  "Assista em 2 telas com a mesma conta",
  "Canais ao vivo SD, HD e FHD",
  "Filmes e séries sempre atualizados",
  "Compatível com TV Box, celular e Smart TV",
  "Código enviado na hora pelo WhatsApp",
  "Suporte técnico + tutoriais de instalação",
] as const;

function priceToCents(price: string) {
  const [whole, fraction = "00"] = price.split(",");
  return Number(whole) * 100 + Number(fraction.padEnd(2, "0").slice(0, 2));
}

function toPlan(product: Product): PlanCardData {
  const annual = product.id === "unitv-anual";
  const unitv = product.brand === "UniTV";

  return {
    id: product.id,
    title: product.name,
    periodLabel: product.days
      ? `Assinatura por ${product.days} dias`
      : product.plan,
    priceCents: priceToCents(product.price),
    compareAtCents: product.compareAt
      ? priceToCents(product.compareAt)
      : undefined,
    shortDescription: unitv
      ? `Pedir a recarga ${product.plan.toLowerCase()} pelo WhatsApp`
      : `${product.name} — ${product.plan}`,
    features: annual
      ? [
          "12 meses de acesso completo",
          `De R$ ${product.compareAt} por R$ ${product.price}`,
          "Canais ao vivo SD, HD e FHD",
          "Filmes e séries + acesso em 2 telas",
          "Funciona em TV Box, Smart TV e celular Android",
          "Código enviado na hora pelo WhatsApp",
        ]
      : unitv
        ? [...unitvFeatures]
        : [
            "Pedido pelo WhatsApp",
            "Pagamento via PIX na conversa",
            "Código enviado na hora",
          ],
    ctaLabel:
      product.brand === "UniTV"
        ? `Comprar Recarga ${product.plan}`
        : `Comprar ${product.name} ${product.plan}`,
    ctaHref: whatsappUrl(product.trigger),
    detailsLabel: "Ver detalhes",
    detailsHref: "/#planos",
  };
}

export default function HomePage() {
  const plans = products.map(toPlan);
  const heroWhatsappUrl = resolveWhatsappHref();

  return (
    <div className="space-y-12 py-8">
      <Hero
        title="Comprar Recarga Oficial com Entrega Imediata"
        titleHighlight="Oficial"
        subtitle="Peça sua recarga pelo WhatsApp e receba o código na hora na conversa. Aqui você encontra os melhores planos e preços com segurança, suporte e tutoriais de instalação para TV Box, celular e Smart TV."
        badges={[
          { text: "Site Oficial • Entrega segura", dot: "orange" },
          { text: "Recarga com entrega imediata pelo WhatsApp", dot: "green" },
        ]}
        featureCards={[
          {
            title: "Pedido",
            mainText: "Pelo WhatsApp",
            description: "Escolha o plano e fale conosco",
          },
          {
            title: "Código",
            mainText: "Entrega Imediata",
            description: "Receba na conversa na hora",
          },
          {
            title: "Assinatura",
            mainText: "Até 2 telas",
            description: "Acesso simultâneo garantido",
          },
        ]}
        ctaLabel="Comprar Recarga"
        ctaHref={whatsappUrl(mensal.trigger)}
        secondaryCtaLabel="Download e Instalação"
        secondaryCtaHref="/#planos"
        whatsappCtaLabel="Tire suas dúvidas pelo WhatsApp"
        whatsappCtaHref={heroWhatsappUrl}
        imageSrc="/images/hero-app.webp"
        imageAlt="Prévia do app e compatibilidade em dispositivos"
        imageCardTitle="Prévia do app"
      />
      <PlansSection
        title="Planos e Preços — Recarga Oficial"
        titleHighlight="Recarga Oficial"
        subtitle="Compare os planos e escolha a melhor opção. Recarga UniTV e outras marcas, com o código entregue na hora pelo WhatsApp."
        plans={plans}
      />
      <InstallTutorialsSection
        title="UniTV Download e Instalação — Tutoriais em Vídeo"
        titleHighlight="Tutoriais em Vídeo"
        subtitle="Fire TV Stick e TV Box: assista ao vídeo passo a passo. No celular Android, fale conosco pelo WhatsApp para receber o link de download atualizado."
        cards={[
          {
            id: "firetv",
            title: "Fire TV Stick",
            subtitle: "Tutorial em vídeo",
            modalTitle: "Instalação no Fire TV Stick",
            modalVideoUrl: "https://www.youtube.com/watch?v=yOtNsX0VfmU",
            modalSteps: [
              "Assista ao vídeo completo para baixar e instalar o UniTV no Amazon Fire TV Stick.",
            ],
          },
          {
            id: "tvbox",
            title: "TV Box",
            subtitle: "Tutorial em vídeo",
            modalTitle: "Instalação em TV Box",
            modalVideoUrl: "https://www.youtube.com/watch?v=S67OL4PHKag",
            modalSteps: [
              "Assista ao vídeo completo para baixar e instalar o UniTV na sua TV Box.",
            ],
          },
          {
            id: "celular",
            title: "Celular Android",
            subtitle: "Link de download pelo WhatsApp",
            externalHref: heroWhatsappUrl,
          },
        ]}
      />
      <TipsSectionWithModal
        title="Dicas para Usar sua Assinatura"
        subtitle="Antes de comprar sua recarga, prepare seu dispositivo. Vincule sua conta, melhore a conexão e escolha o aparelho certo para a melhor experiência. Confira as dicas essenciais do site oficial."
        tips={[
          {
            id: "vincular-conta",
            label: "Antes de comprar",
            title: "Vincular conta no app",
            description:
              "Essencial antes de ativar seu código de recarga. Garante segurança e libera o uso em 2 telas simultâneas.",
            ctaLabel: "Ver tutorial",
            ctaHref: "/#planos",
          },
          {
            id: "estabilidade-tvbox",
            label: "Assinatura TV Box",
            title: "Melhore a estabilidade da sua TV Box",
            description:
              "Para usar a assinatura na TV Box sem travamentos, conecte via cabo de rede (Ethernet). É muito mais estável que Wi-Fi para streaming.",
          },
          {
            id: "tvbox-compativel",
            label: "Dispositivo compatível",
            title: "Qual TV Box usar?",
            description:
              "Para a melhor experiência, recomendamos TV Box de marcas confiáveis como Xiaomi. Evita travamentos e garante qualidade FHD nos canais.",
          },
        ]}
        tutorialVideoUrl="https://www.youtube.com/watch?v=OqEqN1qEPBA"
        tutorialModalTitle="Como Vincular sua Conta UniTV"
        tutorialModalSubtitle="Como vincular uma conta email/celular UniTV"
        tutorialSteps={[
          "AVISO IMPORTANTE: Antes de resgatar o seu código, é essencial vincular uma conta (e-mail ou telefone) no seu perfil do aplicativo.",
          "Ao vincular, você garante a segurança do seu código e ativa o benefício de poder assistir em até 2 telas com a mesma conta.",
        ]}
      />
      <HowToSection
        title="Como Comprar Recarga — Passo a Passo"
        titleHighlight="Passo a Passo"
        subtitle="Comprar sua recarga oficial é rápido. Veja como funciona: do pedido no WhatsApp até o código na mesma conversa."
        steps={[
          {
            id: "escolha-plano",
            stepNumber: 1,
            title: "Escolha seu Plano",
            description:
              "Veja os planos e preços: recarga mensal, bimestral, trimestral, semestral ou anual. Escolha o que melhor cabe no seu bolso.",
          },
          {
            id: "fale-whatsapp",
            stepNumber: 2,
            title: "Fale no WhatsApp",
            description:
              "Clique em comprar e envie o pedido. O pagamento via PIX é combinado na conversa, sem checkout no site.",
          },
          {
            id: "codigo-hora",
            stepNumber: 3,
            title: "Código na Hora",
            description:
              "O código chega na mesma conversa do WhatsApp. Sem espera e sem e-mail.",
          },
          {
            id: "ative-assinatura",
            stepNumber: 4,
            title: "Ative sua Assinatura",
            description:
              "Abra o app, insira o código de recarga, vincule sua conta e pronto — acesso completo a canais, filmes e séries em até 2 telas.",
          },
        ]}
        ctaLabel="Comprar Recarga Agora"
        ctaHref={whatsappUrl(mensal.trigger)}
      />
      <TestimonialsSection
        title="Quem Compra Recarga, Recomenda"
        subtitle="Veja o que dizem os clientes que já compraram sua assinatura pelo nosso site oficial. Entrega imediata e suporte que fazem diferença."
        testimonials={[
          {
            id: "rafael-m",
            quote:
              "Comprei no sábado de tarde para assistir ao jogo. Fiz o PIX, recebi o e-mail com o código de recarga, coloquei no aplicativo e em menos de 5 minutos estava tudo liberado. Imagem limpa e sem travamentos.",
            author: "Rafael M.",
            plan: "Recarga Mensal",
          },
          {
            id: "camila-l",
            quote:
              "Cancelei minha operadora de TV tradicional e mudei pro UniTV. Melhor escolha que fiz! O catálogo de filmes é gigante, a família toda usa na TV da sala. Vale cada centavo.",
            author: "Camila L.",
            plan: "Assinatura Anual",
          },
          {
            id: "roberto-f",
            quote:
              "Eu não sou muito bom com tecnologia, mas o suporte por e-mail teve muita paciência e me ajudou a configurar tudo na minha TV TCL passo a passo. Atendimento nota 10!",
            author: "Roberto F.",
            plan: "Assinatura Anual",
          },
        ]}
      />
      <FaqSection
        title="Dúvidas sobre Recarga UniTV — Perguntas Frequentes"
        subtitle="Respondemos as principais dúvidas de quem quer comprar recarga UniTV, renovar assinatura UniTV ou saber como funciona o download e instalação do app."
        ctaLabel="Ver todas as dúvidas frequentes"
        ctaHref="#faq"
        items={[
          {
            id: "codigo-apos-pedido",
            question: "Como recebo meu código?",
            answer:
              "Ao escolher o plano, o pedido abre no WhatsApp. O código chega na mesma conversa, na hora, depois que o PIX é confirmado.",
          },
          {
            id: "formas-pagamento",
            question: "Quais são as formas de pagamento aceitas?",
            answer:
              "O site não tem checkout. O pagamento é via PIX, combinado direto na conversa do WhatsApp.",
          },
          {
            id: "plano-mensal-anual",
            question: "Qual a diferença entre o plano mensal e o anual?",
            answer: `A recarga UniTV mensal custa R$ ${mensal.price} e dá acesso por ${mensal.days} dias. Já a recarga UniTV anual sai por R$ ${anual.price} (antes R$ ${anual.compareAt}). Ambos os planos incluem canais ao vivo, filmes, séries, 2 telas e suporte técnico. A diferença é o período e o custo-benefício.`,
          },
          {
            id: "vincular-conta",
            question: "Por que preciso vincular uma conta no app?",
            answer:
              "Antes de ativar o código da sua recarga UniTV, é essencial vincular uma conta (e-mail ou telefone) no app. Isso garante a segurança da sua assinatura UniTV e libera o benefício de assistir em até 2 telas simultâneas. Sem a vinculação, você não consegue usar o código de recarga corretamente.",
          },
          {
            id: "dispositivos",
            question: "Em quais dispositivos posso usar a UniTV?",
            answer:
              "O app UniTV é compatível com TV Box (assinatura UniTV TV Box), Smart TV com Android, celular Android (UniTV APK) e PC/Mac (via emulador BlueStacks). Para fazer o UniTV download e instalação, confira nossos tutoriais em vídeo com passo a passo para cada dispositivo. Após instalar, basta comprar o código UniTV e ativar.",
          },
        ]}
      />
      <CtaCardSection
        title="Comprar Recarga UniTV Oficial — Assine Agora"
        description="Peça sua UniTV recarga pelo WhatsApp e receba o código na conversa. Escolha entre o plano mensal e o anual promocional, com suporte para instalação em TV Box, celular e Smart TV."
        monthlyLabel={`Comprar Recarga Mensal — R$ ${mensal.price}`}
        monthlyHref={whatsappUrl(mensal.trigger)}
        annualLabel={`Comprar Recarga Anual — R$ ${anual.price}`}
        annualHref={whatsappUrl(anual.trigger)}
        footerText="Precisa renovar assinatura UniTV ou tem dúvidas? Consulte nossas perguntas frequentes."
        footerHref="#faq"
      />
    </div>
  );
}
