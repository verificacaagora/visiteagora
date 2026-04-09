import DynamicHead from "@/components/DynamicHead";
import { lazy, Suspense } from "react";

const HomeContentComponent = lazy(() => import("@/components/HomeContent"));

const Index = () => {
  return (
    <>
      <DynamicHead verified={false} />
      <main className="min-h-screen bg-background font-sans">
        <Suspense fallback={<div className="text-center p-10 text-muted-foreground">Carregando...</div>}>
          <HomeContentComponent />
        </Suspense>
      </main>
    </>
  );
};

export default Index;
