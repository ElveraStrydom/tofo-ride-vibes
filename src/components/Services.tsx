import { Car, Plane, MapPin, Wrench } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServicesProps {
  language: "en" | "pt";
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    en: {
      heading: "Services",
      services: [
        {
          icon: Car,
          title: "Local Rides in Tofo",
          description: "Quick and comfortable transportation around Tofo for all your local needs.",
        },
        {
          icon: Plane,
          title: "Airport & City Transfers",
          description: "Reliable transfers to/from Inhambane, Vilanculos, Bilene, and Maputo airports.",
        },
        {
          icon: MapPin,
          title: "Day Trips & Excursions",
          description: "Explore the beauty of Mozambique with comfortable day trip services.",
        },
        {
          icon: Wrench,
          title: "Mechanic Assistance",
          description: "Trained mechanic ready to help with any vehicle issues you may have.",
        },
      ],
    },
    pt: {
      heading: "Serviços",
      services: [
        {
          icon: Car,
          title: "Transportes Locais em Tofo",
          description: "Transporte rápido e confortável em Tofo para todas as suas necessidades locais.",
        },
        {
          icon: Plane,
          title: "Transferências de Aeroporto e Cidade",
          description: "Transferências confiáveis de/para aeroportos de Inhambane, Vilanculos, Bilene e Maputo.",
        },
        {
          icon: MapPin,
          title: "Viagens de Um Dia e Excursões",
          description: "Explore a beleza de Moçambique com serviços confortáveis de viagens de um dia.",
        },
        {
          icon: Wrench,
          title: "Assistência Mecânica",
          description: "Mecânico treinado pronto para ajudar com qualquer problema no veículo.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {t.heading}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.services.map((service, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-[1.02] animate-fade-in border-border"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
