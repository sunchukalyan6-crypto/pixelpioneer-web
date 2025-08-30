import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { EditorGrid } from "@/components/EditorGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <EditorGrid />
      <Footer />
    </div>
  );
};

export default Index;
