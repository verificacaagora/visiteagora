import { useState } from "react";
import VerificationModal from "@/components/VerificationModal";
import DynamicHead from "@/components/DynamicHead";
import HomeContent from "@/components/HomeContent";

const Index = () => {
  const [verified, setVerified] = useState(false);

  return (
    <>
      <DynamicHead verified={verified} />
      {verified ? (
        <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", minHeight: "100vh", margin: 0, padding: 0 }}>
          <HomeContent />
        </main>
      ) : (
        <main style={{ minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
          <VerificationModal onConfirm={() => setVerified(true)} />
        </main>
      )}
    </>
  );
};

export default Index;
