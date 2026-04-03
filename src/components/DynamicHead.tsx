import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "Consulta PIS/PASEP e Valores Esquecidos";
      setMeta("description", "Verifique se existem valores disponíveis de PIS/PASEP vinculados ao seu CPF. Consulta rápida e informativa sobre benefícios e valores esquecidos para trabalhadores brasileiros.");
      setMeta("keywords", "consulta PIS PASEP, valores esquecidos, saque PIS, benefícios trabalhador, consulta CPF valores, PIS PASEP 2026, valores não resgatados, consulta online PIS");
      removeMeta("robots");
    } else {
      document.title = "Verificação de Acesso";
      removeMeta("description");
      removeMeta("keywords");
      setMeta("robots", "noindex, nofollow");

      const existing = document.getElementById("jsonld-pispasep");
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
