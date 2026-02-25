import { useEffect } from "react";

interface DynamicHeadProps {
  verified: boolean;
}

const DynamicHead = ({ verified }: DynamicHeadProps) => {
  useEffect(() => {
    document.title = "Verificação";
    removeMeta("description");
    removeMeta("keywords");
    setMeta("robots", "noindex, nofollow, noarchive, nosnippet, noimageindex");

    // Remove JSON-LD if exists
    const existing = document.getElementById("jsonld-cnhsocial");
    if (existing) existing.remove();
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
