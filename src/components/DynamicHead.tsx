import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "CNH Gratuita 2026 - Como Tirar Sua Carteira Sem Pagar";
      setMeta("description", "Saiba como obter sua CNH totalmente gratuita pelo programa do governo. Veja quem tem direito, quais os requisitos e como se inscrever no programa CNH Social 2026.");
      setMeta("keywords", "CNH gratuita 2026, como tirar CNH de graça, programa CNH social, habilitação gratuita governo, carteira de motorista grátis, isenção taxa habilitação, CNH para baixa renda, inscrição CNH gratuita, primeira habilitação grátis, detran CNH social");
      removeMeta("robots");
    } else {
      document.title = "Verificação de Acesso";
      removeMeta("description");
      removeMeta("keywords");
      setMeta("robots", "noindex, nofollow");

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
