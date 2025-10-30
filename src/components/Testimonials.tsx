import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialsProps {
  language: "en" | "pt";
}

const Testimonials = ({ language }: TestimonialsProps) => {
  const content = {
    en: {
      heading: "What Tourists Say",
      testimonials: [
        {
          text: "Jorge was fantastic! Always on time and very friendly. Made our trip to Tofo so much easier.",
          author: "Sarah & Mike",
          country: "Australia",
        },
        {
          text: "Highly recommend Jorge for airport transfers. Reliable, safe driving, and great conversation!",
          author: "Emma",
          country: "UK",
        },
        {
          text: "Best driver in Tofo! Jorge helped us with everything, even gave us tips on places to visit.",
          author: "Carlos",
          country: "Brazil",
        },
      ],
    },
    pt: {
      heading: "O Que os Turistas Dizem",
      testimonials: [
        {
          text: "Jorge foi fantástico! Sempre pontual e muito amigável. Tornou nossa viagem a Tofo muito mais fácil.",
          author: "Sarah & Mike",
          country: "Austrália",
        },
        {
          text: "Recomendo muito o Jorge para transferências de aeroporto. Confiável, direção segura e ótima conversa!",
          author: "Emma",
          country: "Reino Unido",
        },
        {
          text: "Melhor motorista em Tofo! Jorge nos ajudou com tudo, até nos deu dicas de lugares para visitar.",
          author: "Carlos",
          country: "Brasil",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="testimonials" className="py-16 md:py-24 gradient-beach">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {t.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-in border-border"
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <p className="text-base md:text-lg mb-4 text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">{testimonial.author}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.country}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
