import { Search, DollarSign, Globe, AlertTriangle, ArrowRight, Info, Users, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

interface HomeContentProps {
  onVerify: () => void;
}

const HomeContent = ({ onVerify }: HomeContentProps) => {
  const [counter, setCounter] = useState(1243);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="bg-[hsl(222,47%,11%)] text-white py-2.5 px-4 text-center text-sm">
        Sistema informativo de consulta de benefícios e valores disponíveis
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(217,91%,46%)] text-white py-14 sm:py-20 px-5 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Consulta de PIS/PASEP e Valores Esquecidos
        </h1>
        <p className="text-base sm:text-lg opacity-95 max-w-2xl mx-auto">
          Verifique se existem valores disponíveis vinculados ao seu CPF
        </p>
      </div>

      {/* Content */}
      <div className="max-w-[1100px] mx-auto px-5 py-5">
        {/* Counter */}
        <div className="mt-6 bg-card text-card-foreground py-5 px-6 rounded-xl text-center shadow-md border border-border font-semibold text-sm sm:text-base">
          🔎 <span className="text-primary font-bold">{counter}</span> pessoas estão consultando neste momento
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="bg-card text-card-foreground p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-primary text-lg font-bold mb-2">PIS / PASEP</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Programas criados para trabalhadores do setor público e privado que podem gerar valores disponíveis para saque.
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-primary text-lg font-bold mb-2">Valores Esquecidos</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Muitos brasileiros possuem valores não resgatados em contas antigas ou benefícios liberados.
            </p>
          </div>

          <div className="bg-card text-card-foreground p-6 rounded-xl shadow-md border border-border hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-primary text-lg font-bold mb-2">Consulta Online</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A verificação pode ser feita online de forma rápida utilizando alguns dados básicos.
            </p>
          </div>
        </div>

        {/* Form box */}
        <div className="mt-10 bg-card text-card-foreground p-6 sm:p-8 rounded-xl shadow-md border border-border">
          <h2 className="text-foreground text-xl font-bold mb-2">Consultar valores disponíveis</h2>
          <p className="text-muted-foreground text-sm mb-5">Informe seu nome para iniciar a verificação.</p>
          <input
            type="text"
            placeholder="Digite seu nome completo"
            className="w-full py-3.5 px-4 rounded-lg border border-border bg-background text-foreground text-base focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            onClick={onVerify}
            className="w-full mt-4 py-4 px-6 border-none rounded-lg bg-[hsl(152,69%,31%)] hover:bg-[hsl(152,69%,26%)] text-white text-lg font-semibold cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Consultar agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-[hsl(222,47%,11%)] text-[hsl(215,20%,75%)] text-center py-6 px-4 text-sm">
        <p>Consulta informativa sobre benefícios e valores disponíveis. Sempre confirme informações em canais oficiais.</p>
      </footer>
    </>
  );
};

export default HomeContent;
