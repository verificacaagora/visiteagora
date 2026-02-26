import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "Habilitação Gratuita 2026 - Programa CNH Popular";
      setMeta("description", "Saiba como conseguir sua carteira de motorista sem custo pelo programa de habilitação popular do governo. Confira os critérios e o passo a passo para se candidatar.");
      setMeta("keywords", "habilitação gratuita, carteira de motorista grátis, CNH Popular, programa governo habilitação, tirar CNH sem pagar, CNH gratuita 2026, isenção habilitação, programa social CNH, como conseguir CNH grátis, habilitação baixa renda");
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
