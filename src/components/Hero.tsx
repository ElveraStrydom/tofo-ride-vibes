import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tofo-beach-hero.jpg";

interface HeroProps {
  language: "en" | "pt";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    en: {
      headline: "Tofo Taxi & Airport Transfers",
      subheadline: "Reliable transport with Jorge - Your trusted local driver serving Tofo, Inhambane, Vilanculos & Maputo",
      cta: "WhatsApp Jorge Now",
      trustBadge: "Available 24/7 • English & Portuguese • Airport Pickups"
    },
    pt: {
      headline: "Táxi e Transferências em Tofo",
      subheadline: "Transporte confiável com Jorge - Seu motorista local de confiança servindo Tofo, Inhambane, Vilanculos e Maputo",
      cta: "Fale com Jorge no WhatsApp",
      trustBadge: "Disponível 24/7 • Inglês e Português • Coleta no Aeroporto"
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img"
        aria-label="Tofo Beach, Mozambique"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative section-container text-center z-10 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground animate-fade-in">
          {t.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in font-medium">
          {t.subheadline}
        </p>
        
        <div className="mb-8 animate-fade-in">
          <p className="text-sm md:text-base text-muted-foreground/90 font-medium">
            {t.trustBadge}
          </p>
        </div>

        <Button variant="whatsapp" size="xl" asChild className="animate-scale-in">
          <a 
            href="https://wa.me/+258860163745" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contact Jorge on WhatsApp for taxi and transfer bookings"
          >
            <MessageCircle className="h-6 w-6" />
            {t.cta}
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
