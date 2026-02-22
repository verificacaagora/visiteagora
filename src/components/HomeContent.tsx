import { Shield, FileCheck, ClipboardList, Gift, AlertTriangle, ArrowRight } from "lucide-react";

interface HomeContentProps {
  onVerify: () => void;
}

const SectionCard = ({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) => (
  <section className="animate-fade-in">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h2 className="text-primary text-lg md:text-xl font-bold">{title}</h2>
    </div>
    {children}
  </section>
);

const HomeContent = ({ onVerify }: HomeContentProps) => {
  return (
    <>
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <Shield className="w-8 h-8" />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            CNH Social - Programa de Isenção de Taxas
          </h1>
        </div>
      </header>

      {/* Hero CTA */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-10 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
            Verifique agora se você tem direito à isenção de taxas para obter sua CNH gratuitamente.
          </p>
          <button
            onClick={onVerify}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground border-none py-4 px-10 cursor-pointer rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:scale-105"
          >
            Verificar agora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 pb-24 space-y-8">
        {/* O que é */}
        <div className="bg-card text-card-foreground rounded-xl shadow-md border border-border p-6 md:p-8">
          <SectionCard icon={FileCheck} title="O que é a CNH Social?">
            <p className="text-muted-foreground text-sm leading-relaxed">
              O programa CNH Social, também conhecido como CNH Popular, foi criado pelo governo federal para oferecer a isenção de taxas relacionadas à obtenção da Carteira Nacional de Habilitação (CNH) para pessoas de baixa renda. O objetivo é proporcionar acesso a essa documentação para que mais brasileiros possam entrar no mercado de trabalho, já que a CNH é exigida em muitas vagas de emprego, principalmente em áreas de transporte e logística.
            </p>
          </SectionCard>
        </div>

        {/* Requisitos */}
        <div className="bg-card text-card-foreground rounded-xl shadow-md border border-border p-6 md:p-8">
          <SectionCard icon={ClipboardList} title="Requisitos para participar">
            <p className="text-muted-foreground text-sm mb-3">
              Para poder se inscrever no programa CNH Social, o candidato deve atender a alguns critérios:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Ser maior de 18 anos.",
                "Estar inscrito no Cadastro Único (CadÚnico) para Programas Sociais do Governo Federal.",
                "Ter uma renda per capita de até 2 salários mínimos.",
                "Não possuir CNH ou estar com a habilitação suspensa.",
                "Residir no estado onde o programa está sendo oferecido.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* Como se inscrever */}
        <div className="bg-card text-card-foreground rounded-xl shadow-md border border-border p-6 md:p-8">
          <SectionCard icon={ClipboardList} title="Como se inscrever?">
            <p className="text-muted-foreground text-sm mb-3">
              A inscrição deve ser feita de acordo com o estado onde você reside:
            </p>
            <div className="space-y-3">
              {[
                { step: "1", title: "Cadastro no CadÚnico", desc: "É necessário estar inscrito no Cadastro Único do Governo Federal." },
                { step: "2", title: "Acompanhamento do Edital", desc: "Acesse o site do Detran do seu estado e verifique se o programa está disponível." },
                { step: "3", title: "Inscrição", desc: "Realize a inscrição dentro do prazo estabelecido no edital." },
                { step: "4", title: "Seleção e Resultados", desc: "Após a inscrição, será realizada uma seleção dos candidatos." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <span className="font-semibold text-sm text-foreground">{item.title}:</span>
                    <span className="text-muted-foreground text-sm ml-1">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        {/* Benefícios */}
        <div className="bg-card text-card-foreground rounded-xl shadow-md border border-border p-6 md:p-8">
          <SectionCard icon={Gift} title="Benefícios da CNH Social">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Isenção das taxas de inscrição, exame médico, psicológico, e de emissão da CNH.",
                "Aumento das oportunidades de emprego.",
                "Facilidade no transporte e mobilidade.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* Cuidados */}
        <div className="bg-card text-card-foreground rounded-xl shadow-md border border-border p-6 md:p-8">
          <SectionCard icon={AlertTriangle} title="Cuidados e Considerações">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Verifique se o programa está disponível no seu estado.",
                "Atenção aos requisitos e prazos de inscrição.",
                "Após a obtenção da CNH, siga todas as normas de trânsito.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* Conclusão */}
        <div className="bg-primary/5 rounded-xl border border-primary/20 p-6 md:p-8 text-center">
          <p className="text-foreground text-sm leading-relaxed mb-6">
            O programa CNH Social é uma grande oportunidade para quem busca uma nova oportunidade no mercado de trabalho e não tem condições de arcar com os custos da obtenção da CNH.
          </p>
          <button
            onClick={onVerify}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground border-none py-3 px-8 cursor-pointer rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:scale-105"
          >
            Verificar elegibilidade
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background text-center py-4 px-4">
        <p className="text-sm opacity-80">&copy; 2026 CNH Social - Todos os direitos reservados</p>
      </footer>
    </>
  );
};

export default HomeContent;
