import { Shield, FileCheck, ClipboardList, Gift, AlertTriangle, ArrowRight, BadgeCheck, CalendarClock } from "lucide-react";

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

const EXTERNAL_URL = "https://govbr.cnhnova.site/?utm_source=site&utm_medium=button&utm_campaign=cnhsocial";

const HomeContent = () => {
  return (
    <>
      {/* Top bar institucional */}
      <div className="bg-primary/95 text-primary-foreground text-xs py-1.5 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="opacity-90">Portal Informativo • Programa CNH Social</span>
          <span className="hidden sm:inline opacity-90">Atualizado em 2026</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-primary text-primary-foreground py-7 px-4 shadow-lg border-b-4 border-accent">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-3">
          <Shield className="w-8 h-8" />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-center">
            CNH Gratuita 2026 — Inscrições Abertas pelo CadÚnico
          </h1>
        </div>
      </header>

      {/* Hero CTA */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-12 px-4 border-b border-border">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-4">
            <BadgeCheck className="w-4 h-4" />
            Programa oficial de habilitação social
          </div>
          <h2 className="text-foreground text-2xl md:text-3xl font-bold mb-3 leading-tight">
            Tire sua CNH gratuitamente em 2026
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mb-7 leading-relaxed">
            Verifique em poucos minutos se o seu perfil atende aos requisitos do programa CNH Social e garanta sua vaga.
          </p>
          <a
            href={EXTERNAL_URL}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground border-none py-4 px-10 cursor-pointer rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-btn-pulse hover:scale-105 no-underline"
          >
            Verificar agora
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
            <CalendarClock className="w-3.5 h-3.5" />
            Vagas limitadas por estado
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-10 pb-24 space-y-6">
        <div className="bg-card text-card-foreground rounded-xl shadow-sm border border-border p-6 md:p-8">
          <SectionCard icon={FileCheck} title="O que é o programa CNH Social?">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              O <strong className="text-foreground">CNH Social</strong>, também conhecido como CNH Popular, é uma iniciativa do Governo Federal que oferece a isenção total das taxas para a obtenção da Carteira Nacional de Habilitação. O programa cobre desde a inscrição até a emissão do documento, incluindo aulas teóricas, práticas e exames obrigatórios — possibilitando que cidadãos de baixa renda ampliem suas oportunidades no mercado de trabalho.
            </p>
          </SectionCard>
        </div>

        <div className="bg-card text-card-foreground rounded-xl shadow-sm border border-border p-6 md:p-8">
          <SectionCard icon={ClipboardList} title="Requisitos para participar">
            <p className="text-muted-foreground text-sm mb-4">
              Para se inscrever, o candidato deve atender aos seguintes critérios:
            </p>
            <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
              {[
                "Ter 18 anos completos ou mais.",
                "Estar inscrito no Cadastro Único (CadÚnico) com dados atualizados.",
                "Renda familiar per capita de até 2 salários mínimos.",
                "Não possuir CNH ativa ou estar com a habilitação suspensa.",
                "Residir no estado em que pretende se candidatar.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <BadgeCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div className="bg-card text-card-foreground rounded-xl shadow-sm border border-border p-6 md:p-8">
          <SectionCard icon={ClipboardList} title="Como se inscrever?">
            <p className="text-muted-foreground text-sm mb-4">
              O processo é simples e segue quatro etapas oficiais:
            </p>
            <div className="space-y-4">
              {[
                { step: "1", title: "Cadastro no CadÚnico", desc: "Mantenha seu cadastro ativo e atualizado em um CRAS próximo à sua residência." },
                { step: "2", title: "Acompanhamento do edital", desc: "Verifique no site do Detran do seu estado a abertura das inscrições." },
                { step: "3", title: "Realização da inscrição", desc: "Inscreva-se dentro do prazo estabelecido no edital oficial." },
                { step: "4", title: "Seleção e resultado", desc: "Aguarde a divulgação dos selecionados e siga as orientações da autoescola credenciada." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <span className="font-semibold text-sm md:text-base text-foreground">{item.title}:</span>
                    <span className="text-muted-foreground text-sm md:text-base ml-1">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="bg-card text-card-foreground rounded-xl shadow-sm border border-border p-6 md:p-8">
          <SectionCard icon={Gift} title="Benefícios do programa">
            <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
              {[
                "Isenção total das taxas de inscrição, exames médico, psicológico e emissão da CNH.",
                "Mais oportunidades de emprego, principalmente em transporte e logística.",
                "Maior autonomia, mobilidade e qualidade de vida.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <BadgeCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div className="bg-card text-card-foreground rounded-xl shadow-sm border border-border p-6 md:p-8">
          <SectionCard icon={AlertTriangle} title="Cuidados e considerações">
            <ul className="space-y-2.5 text-sm md:text-base text-muted-foreground">
              {[
                "Confirme se o programa está disponível no seu estado.",
                "Atenção aos requisitos e prazos de inscrição divulgados em edital.",
                "Após a obtenção da CNH, cumpra rigorosamente as normas de trânsito.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <div className="bg-primary/5 rounded-xl border border-primary/20 p-7 md:p-10 text-center">
          <h3 className="text-foreground text-xl md:text-2xl font-bold mb-3">
            Garanta sua vaga no programa
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-7 max-w-xl mx-auto">
            O CNH Social é a oportunidade ideal para quem deseja conquistar a habilitação sem custos e ampliar suas chances no mercado de trabalho.
          </p>
          <a
            href={EXTERNAL_URL}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground border-none py-3 px-8 cursor-pointer rounded-lg text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-btn-pulse hover:scale-105 no-underline"
          >
            Verificar elegibilidade
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-6 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-1">
          <p className="text-sm font-semibold">Portal Informativo CNH Social</p>
          <p className="text-xs opacity-70">&copy; 2026 — Todos os direitos reservados</p>
        </div>
      </footer>
    </>
  );
};

export default HomeContent;
