import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tofo-beach-hero.jpg";
interface HeroProps {
  language: "en" | "pt";
}
const Hero = ({
  language
}: HeroProps) => {
  const content = {
    en: {
      headline: "Book Your Ride with Jorge",
      subheadline: "Your friendly and reliable local driver in Tofo, Mozambique",
      cta: "WhatsApp Jorge Now"
    },
    pt: {
      headline: "Reserve Seu Transporte com Jorge",
      subheadline: "Seu motorista local confiável e amigável em Tofo, Moçambique",
      cta: "Fale com Jorge no WhatsApp"
    }
  };
  const t = content[language];
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative section-container text-center z-10 py-[8px] text-slate-400">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground animate-fade-in">
          {t.headline}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in font-medium">
          {t.subheadline}
        </p>
        <Button variant="whatsapp" size="xl" asChild className="animate-scale-in">
          <a href="https://wa.me/+258860163745" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
            {t.cta}
          </a>
        </Button>
      </div>
    </section>;
};
export default Hero;