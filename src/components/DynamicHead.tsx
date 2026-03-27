import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "Habilitação Gratuita 2026 - Programa Social de Carteira de Motorista";
      setMeta("description", "Descubra como participar do programa de habilitação gratuita do governo federal. Confira os critérios, documentos necessários e o passo a passo completo para conseguir sua carteira de motorista sem custos em 2026.");
      setMeta("keywords", "habilitação gratuita 2026, carteira de motorista sem custo, programa social CNH, como conseguir habilitação grátis, habilitação governo federal, CNH popular, inscrição habilitação gratuita, detran habilitação social, primeira carteira grátis, programa federal habilitação");
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
