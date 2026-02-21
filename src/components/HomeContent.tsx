const HomeContent = () => {
  return (
    <>
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
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          lineHeight: 1.6,
        }}
      >
        <h2 style={{ color: "#007BFF", fontSize: "22px" }}>O que é a CNH Social?</h2>
        <p>
          O programa CNH Social, também conhecido como CNH Popular, foi criado pelo governo federal para oferecer a isenção de taxas relacionadas à obtenção da Carteira Nacional de Habilitação (CNH) para pessoas de baixa renda. O objetivo é proporcionar acesso a essa documentação para que mais brasileiros possam entrar no mercado de trabalho, já que a CNH é exigida em muitas vagas de emprego, principalmente em áreas de transporte e logística.
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
            margin: "20px auto 30px auto",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            animation: "pulse 2s infinite",
          }}
        >
          Verificar agora
        </button>

        <h2 style={{ color: "#007BFF", fontSize: "22px" }}>Requisitos para participar</h2>
        <p>Para poder se inscrever no programa CNH Social, o candidato deve atender a alguns critérios estabelecidos pelo governo. Os principais requisitos são:</p>
        <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
          <li>Ser maior de 18 anos.</li>
          <li>Estar inscrito no Cadastro Único (CadÚnico) para Programas Sociais do Governo Federal.</li>
          <li>Ter uma renda per capita de até 2 salários mínimos.</li>
          <li>Não possuir CNH ou estar com a habilitação suspensa.</li>
          <li>Residir no estado onde o programa está sendo oferecido.</li>
        </ul>

        <h2 style={{ color: "#007BFF", fontSize: "22px" }}>Como se inscrever?</h2>
        <p>A inscrição para o programa deve ser feita de acordo com o estado onde você reside. Aqui estão os passos gerais:</p>
        <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
          <li><strong>1. Cadastro no CadÚnico:</strong> É necessário estar inscrito no Cadastro Único do Governo Federal.</li>
          <li><strong>2. Acompanhamento do Edital:</strong> Acesse o site do Detran do seu estado e verifique se o programa está disponível.</li>
          <li><strong>3. Inscrição:</strong> Realize a inscrição dentro do prazo estabelecido no edital.</li>
          <li><strong>4. Seleção e Resultados:</strong> Após a inscrição, será realizada uma seleção dos candidatos.</li>
        </ul>

        <h2 style={{ color: "#007BFF", fontSize: "22px" }}>Benefícios da CNH Social</h2>
        <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
          <li>Isenção das taxas de inscrição, exame médico, psicológico, e de emissão da CNH.</li>
          <li>Aumento das oportunidades de emprego.</li>
          <li>Facilidade no transporte e mobilidade.</li>
        </ul>

        <h2 style={{ color: "#007BFF", fontSize: "22px" }}>Cuidados e Considerações</h2>
        <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
          <li>Verifique se o programa está disponível no seu estado.</li>
          <li>Atenção aos requisitos e prazos de inscrição.</li>
          <li>Após a obtenção da CNH, siga todas as normas de trânsito.</li>
        </ul>

        <h2 style={{ color: "#007BFF", fontSize: "22px" }}>Conclusão</h2>
        <p>
          O programa CNH Social é uma grande oportunidade para quem busca uma nova oportunidade no mercado de trabalho e não tem condições de arcar com os custos da obtenção da CNH.
        </p>
      </div>

      <footer
        style={{
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          padding: "10px",
          position: "fixed",
          width: "100%",
          bottom: 0,
        }}
      >
        <p>&copy; 2026 CNH Social - Todos os direitos reservados</p>
      </footer>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default HomeContent;
