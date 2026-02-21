import { useState } from "react";

interface VerificationModalProps {
  onConfirm: () => void;
}

const VerificationModal = ({ onConfirm }: VerificationModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      onConfirm();
    }, 600);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "32px 28px",
          maxWidth: "420px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "12px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Verificação de Acesso
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#555",
            marginBottom: "24px",
            lineHeight: 1.5,
            fontFamily: "Arial, sans-serif",
          }}
        >
          Para acessar este conteúdo, confirme que você é maior de 18 anos e concorda com os termos de uso.
        </p>
        <button
          onClick={handleConfirm}
          disabled={isLoading}
          style={{
            backgroundColor: isLoading ? "#999" : "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: isLoading ? "not-allowed" : "pointer",
            width: "100%",
            fontFamily: "Arial, sans-serif",
            transition: "background-color 0.2s",
          }}
        >
          {isLoading ? "Verificando..." : "Confirmar e Acessar"}
        </button>
      </div>
    </div>
  );
};

export default VerificationModal;
