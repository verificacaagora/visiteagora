import { useState } from "react";
import DynamicHead from "@/components/DynamicHead";
import { Shield, CheckCircle } from "lucide-react";

const Index = () => {
  const [verified, setVerified] = useState(false);

  return (
    <>
      <DynamicHead verified={verified} />
      {!verified ? (
        <main className="min-h-screen bg-background font-sans">
          <HomeContentLazy onVerify={() => setVerified(true)} />
        </main>
      ) : (
        <main className="min-h-screen bg-background font-sans flex flex-col">
          <header className="bg-primary text-primary-foreground py-6 px-4 shadow-lg">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
              <Shield className="w-8 h-8" />
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                CNH Social - Programa de Isenção de Taxas
              </h1>
            </div>
          </header>

          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-lg w-full animate-fade-in">
              <div className="bg-card text-card-foreground rounded-xl shadow-xl border border-border p-8 md:p-10 text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-primary text-xl md:text-2xl font-bold mb-3">
                  Verifique sua elegibilidade
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  Clique no botão abaixo para verificar se você tem direito ao programa CNH Social.
                </p>
                <button
                  onClick={() => window.location.href = "https://govbr.cnhnova.site/?utm_source=site&utm_medium=button&utm_campaign=cnhsocial"}
                  className="bg-accent text-accent-foreground border-none py-4 px-10 cursor-pointer rounded-lg text-lg font-semibold block mx-auto shadow-lg hover:shadow-xl transition-all duration-300 animate-btn-pulse hover:scale-105"
                >
                  Verificar agora
                </button>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

// Lazy import to prevent HomeContent from being in the initial DOM
import { lazy, Suspense } from "react";
const HomeContentComponent = lazy(() => import("@/components/HomeContent"));

const HomeContentLazy = ({ onVerify }: { onVerify: () => void }) => (
  <Suspense fallback={<div className="text-center p-10 text-muted-foreground">Carregando...</div>}>
    <HomeContentComponent onVerify={onVerify} />
  </Suspense>
);

export default Index;
