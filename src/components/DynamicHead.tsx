import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "CNH Social 2026 - Portal Informativo sobre Habilitação Gratuita";
      setMeta("description", "Portal informativo sobre o programa CNH Social. Saiba como obter sua habilitação gratuitamente se você é inscrito no CadÚnico e atende aos requisitos de renda. Informações atualizadas para todos os estados.");
      setMeta("keywords", "CNH social informativo 2026, portal habilitação gratuita, informações CNH popular, guia CNH grátis CadÚnico, programa habilitação isenção taxas, como tirar CNH social, site informativo CNH gratuita, orientação habilitação cidadão, CNH social requisitos estados");
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
