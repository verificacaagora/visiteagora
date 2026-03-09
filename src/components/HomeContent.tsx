import { Shield, FileCheck, ClipboardList, Gift, AlertTriangle, ArrowRight, Info, BookOpen, Users, MapPin } from "lucide-react";

interface HomeContentProps {
  onVerify: () => void;
}

const HomeContent = ({ onVerify }: HomeContentProps) => {
  return (
    <>
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-5 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-7 h-7" />
            <span className="text-lg font-bold tracking-tight">CNH Social</span>
          </div>
          <span className="hidden sm:inline text-xs opacity-80 bg-primary-foreground/10 px-3 py-1 rounded-full">
            Portal Informativo
          </span>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Info className="w-3.5 h-3.5" />
              Site informativo sobre o programa CNH Social
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
              Programa CNH Social
              <span className="block text-primary mt-1">Isenção de Taxas para Habilitação</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Saiba tudo sobre o programa que oferece a CNH gratuita para brasileiros de baixa renda. Consulte os requisitos e verifique sua elegibilidade.
            </p>
            <button
              onClick={onVerify}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground border-none py-4 px-10 cursor-pointer rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-btn-pulse hover:scale-105"
            >
              Consultar elegibilidade
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="bg-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, label: "Beneficiários", value: "Milhares" },
            { icon: MapPin, label: "Abrangência", value: "Todos os estados" },
            { icon: BookOpen, label: "Tipo", value: "Programa federal" },
            { icon: Gift, label: "Custo", value: "100% gratuito" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-sm font-bold text-foreground">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-12 pb-24">
        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* O que é */}
          <div className="bg-card text-card-foreground rounded-2xl shadow-md border border-border p-6 md:p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-foreground text-lg font-bold mb-3">O que é a CNH Social?</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A CNH Social é um programa governamental que visa oferecer isenção total das taxas de habilitação para cidadãos de baixa renda inscritos no CadÚnico. Este portal informativo reúne as principais informações sobre como funciona o programa e quem pode participar.
            </p>
          </div>

          {/* Benefícios */}
          <div className="bg-card text-card-foreground rounded-2xl shadow-md border border-border p-6 md:p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Gift className="w-6 h-6 text-accent" />
            </div>
            <h2 className="text-foreground text-lg font-bold mb-3">Benefícios do Programa</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                "Isenção total das taxas de inscrição, exames e emissão da CNH",
                "Mais oportunidades no mercado de trabalho formal",
                "Maior mobilidade e independência para toda a família",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Requisitos - full width */}
        <div className="bg-card text-card-foreground rounded-2xl shadow-md border border-border p-6 md:p-8 mb-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <ClipboardList className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-foreground text-lg font-bold">Quem pode participar?</h2>
              <p className="text-muted-foreground text-xs">Critérios de elegibilidade do programa</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: "Idade mínima", desc: "Ter 18 anos completos na data da inscrição" },
              { title: "Cadastro Único", desc: "Estar inscrito e com cadastro atualizado no CadÚnico" },
              { title: "Renda familiar", desc: "Renda per capita de até 2 salários mínimos" },
              { title: "Sem CNH ativa", desc: "Não possuir CNH ou estar com habilitação suspensa" },
              { title: "Residência", desc: "Morar no estado onde o programa está sendo oferecido" },
              { title: "Documentação", desc: "Apresentar documentos pessoais válidos e atualizados" },
            ].map((item, i) => (
              <div key={i} className="bg-muted/50 rounded-xl p-4 border border-border/50">
                <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Como funciona */}
        <div className="bg-card text-card-foreground rounded-2xl shadow-md border border-border p-6 md:p-8 mb-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-foreground text-lg font-bold">Como funciona o processo?</h2>
              <p className="text-muted-foreground text-xs">Etapas para participar do programa</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { step: "01", title: "Cadastro no CadÚnico", desc: "Procure o CRAS da sua região para realizar ou atualizar seu cadastro social." },
              { step: "02", title: "Acompanhe os editais", desc: "Verifique no site do Detran do seu estado a abertura de novas vagas." },
              { step: "03", title: "Faça sua inscrição", desc: "Preencha o formulário dentro do prazo do edital vigente." },
              { step: "04", title: "Aguarde a seleção", desc: "Os candidatos selecionados serão convocados conforme critérios de prioridade." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 bg-muted/30 rounded-xl p-4 border border-border/30">
                <span className="text-2xl font-black text-primary/20 leading-none mt-0.5">{item.step}</span>
                <div>
                  <p className="font-semibold text-sm text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aviso */}
        <div className="bg-destructive/5 rounded-2xl border border-destructive/20 p-5 md:p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-bold text-foreground mb-2">Informações importantes</h3>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li>• Este é um site informativo. Consulte sempre o Detran do seu estado para informações oficiais.</li>
                <li>• A disponibilidade de vagas varia de acordo com cada unidade federativa.</li>
                <li>• Fique atento aos prazos de inscrição publicados nos editais oficiais.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-accent/5 rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
            Descubra se você tem direito
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Faça uma consulta rápida e descubra se você atende aos critérios do programa CNH Social. É simples, rápido e totalmente gratuito.
          </p>
          <button
            onClick={onVerify}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground border-none py-4 px-10 cursor-pointer rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-btn-pulse hover:scale-105"
          >
            Verificar elegibilidade
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-6 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-muted-foreground mb-1">
            Este é um portal informativo sobre o programa CNH Social. Não possui vínculo com órgãos governamentais.
          </p>
          <p className="text-xs text-muted-foreground opacity-60">
            &copy; 2026 CNH Social Info - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomeContent;
