import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "Guia da Habilitação Popular 2026 - Direitos do Cidadão Brasileiro";
      setMeta("description", "Conheça os direitos do cidadão de baixa renda para obtenção da carteira de motorista sem custos. Guia completo com critérios, documentação necessária e orientações por estado.");
      setMeta("keywords", "habilitação popular gratuita 2026, carteira de motorista sem custo, direito cidadão habilitação, guia CNH isenção completa, programa social carteira motorista, como conseguir habilitação grátis, benefício trânsito baixa renda, cadastro único habilitação, detran programa social");
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
