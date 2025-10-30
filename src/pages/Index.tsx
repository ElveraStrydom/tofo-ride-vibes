import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Testimonials language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
