import { useState } from "react";
import DynamicHead from "@/components/DynamicHead";
import HomeContent from "@/components/HomeContent";
import { Shield, CheckCircle } from "lucide-react";

const Index = () => {
  const [verified, setVerified] = useState(false);

  return (
    <>
      <DynamicHead verified={verified} />
      {!verified ? (
        <main className="min-h-screen bg-background font-sans">
          <HomeContent onVerify={() => setVerified(true)} />
        </main>
      ) : (
        <main className="min-h-screen bg-background font-sans flex flex-col">
          <header className="bg-primary text-primary-foreground py-4 sm:py-6 px-4 shadow-lg">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <h1 className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-center">
                CNH Social - Isenção de Taxas
              </h1>
            </div>
          </header>

          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-lg w-full animate-fade-in">
              <div className="bg-card text-card-foreground rounded-xl shadow-xl border border-border p-6 sm:p-8 md:p-10 text-center">
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h2 className="text-primary text-lg sm:text-xl md:text-2xl font-bold mb-3">
                  Verifique sua elegibilidade
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 sm:mb-8">
                  Clique no botão abaixo para verificar se você tem direito ao programa CNH Social.
                </p>
                <button
                  onClick={() => window.location.href = "https://brasilsocial.shop/"}
                  className="w-full sm:w-auto bg-accent text-accent-foreground border-none py-3.5 px-8 sm:py-4 sm:px-10 cursor-pointer rounded-lg text-base sm:text-lg font-semibold block mx-auto shadow-lg hover:shadow-xl transition-all duration-300 animate-btn-pulse hover:scale-105"
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

export default Index;
