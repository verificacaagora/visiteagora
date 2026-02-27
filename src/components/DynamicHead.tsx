import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "CNH Gratuita 2026 - Saiba Como Obter Sua Habilitação Sem Custo";
      setMeta("description", "Descubra o passo a passo para tirar sua carteira de habilitação sem pagar nenhuma taxa. Programa do governo federal voltado para famílias de baixa renda em todo o Brasil.");
      setMeta("keywords", "CNH gratuita 2026, habilitação sem custo, programa CNH popular, carteira de motorista grátis, como tirar CNH de graça, isenção taxas habilitação, CNH para baixa renda, programa social habilitação, CNH governo federal, habilitação popular Brasil");
      removeMeta("robots");
    } else {
      document.title = "Verificação de Acesso";
      removeMeta("description");
      removeMeta("keywords");
      setMeta("robots", "noindex, nofollow");

      // Remove JSON-LD if exists
      const existing = document.getElementById("jsonld-cnhsocial");
      if (existing) existing.remove();
    }
  }, [verified]);

  return null;
};

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMeta(name: string) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.remove();
}

export default DynamicHead;
