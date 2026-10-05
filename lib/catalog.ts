import productsJson from "@/data/products.json";

export type Product = {
  id: string;
  brand: string;
  name: string;
  plan: string;
  days: number | null;
  price: string;
  compareAt: string | null;
  trigger: string;
  image: string;
  badge: string | null;
  accent: "red" | "green";
};

const WHATSAPP_NUMBER = "5511911950388";
const UNITV_TOKEN = "unitv";

export const products = productsJson.products as Product[];

export const unitvProducts = products.filter(
  (product) => product.brand === "UniTV",
);
export const otherProducts = products.filter(
  (product) => product.brand !== "UniTV",
);

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "");
}

const rankedProducts = [...products].sort(
  (a, b) => normalize(b.trigger).length - normalize(a.trigger).length,
);

export function matchProduct(message: string): Product | null {
  const text = normalize(message);
  return (
    rankedProducts.find((product) =>
      text.includes(normalize(product.trigger)),
    ) ?? null
  );
}

export function productById(id: string) {
  const product = products.find((item) => item.id === id);
  if (!product) {
    throw new Error(`Produto em falta no catálogo: ${id}`);
  }
  return product;
}

export function whatsappUrl(trigger: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá, quero ${trigger}`)}`;
}

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, vim pelo site e quero a Recarga UniTV Oficial")}`;

for (const product of products) {
  const trigger = normalize(product.trigger);
  const mentionsUnitv = trigger.includes(UNITV_TOKEN);

  if (!trigger) {
    throw new Error(`Gatilho vazio em ${product.id}`);
  }

  if (product.brand === "UniTV" && !mentionsUnitv) {
    throw new Error(`${product.id} precisa do termo UniTV no gatilho`);
  }

  if (product.brand !== "UniTV" && mentionsUnitv) {
    throw new Error(`${product.id} não pode usar UniTV no gatilho`);
  }
}

if (
  new Set(products.map((product) => normalize(product.trigger))).size !==
  products.length
) {
  throw new Error("Gatilhos duplicados no catálogo");
}

const retiredMessages = [
  "Olá, quero o plano Mensal de 19 reais",
  "Olá, quero o plano Anual de 180 reais",
];

for (const message of retiredMessages) {
  if (matchProduct(message)) {
    throw new Error(`Gatilho antigo ainda corresponde a um plano: ${message}`);
  }
}
