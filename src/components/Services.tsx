import { Car, Plane, MapPin, Wrench } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ServicesProps {
  language: "en" | "pt";
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    en: {
      heading: "Tofo Transport & Transfer Services",
      subheading: "Professional taxi and airport transfer services across Mozambique's beautiful southern coast",
      services: [
        {
          icon: Car,
          title: "Local Tofo Taxi Service",
          description: "Quick and comfortable taxi rides around Tofo Beach and nearby areas. Perfect for beach trips, restaurant visits, and exploring the local area.",
        },
        {
          icon: Plane,
          title: "Airport & City Transfers",
          description: "Reliable airport transfers from Inhambane Airport, Vilanculos Airport, and Maputo to Tofo. Also serving Bilene, Maxixe, and all coastal destinations.",
        },
        {
          icon: MapPin,
          title: "Day Trips & Coastal Excursions",
          description: "Explore Mozambique's stunning coastline with comfortable transport to dive sites, beaches, markets, and tourist attractions across Inhambane Province.",
        },
        {
          icon: Wrench,
          title: "Mechanic Assistance",
          description: "Trained mechanic ready to help with any vehicle issues. Emergency roadside assistance available for travellers exploring Mozambique.",
        },
      ],
    },
    pt: {
      heading: "Serviços de Transporte e Transferências em Tofo",
      subheading: "Serviços profissionais de táxi e transferências de aeroporto na bela costa sul de Moçambique",
      services: [
        {
          icon: Car,
          title: "Serviço de Táxi Local em Tofo",
          description: "Viagens rápidas e confortáveis em Tofo Beach e áreas próximas. Perfeito para viagens à praia, visitas a restaurantes e exploração da área local.",
        },
        {
          icon: Plane,
          title: "Transferências de Aeroporto e Cidade",
          description: "Transferências confiáveis do Aeroporto de Inhambane, Aeroporto de Vilanculos e Maputo para Tofo. Também servindo Bilene, Maxixe e todos os destinos costeiros.",
        },
        {
          icon: MapPin,
          title: "Viagens de Um Dia e Excursões Costeiras",
          description: "Explore a deslumbrante costa de Moçambique com transporte confortável para locais de mergulho, praias, mercados e atrações turísticas na Província de Inhambane.",
        },
        {
          icon: Wrench,
          title: "Assistência Mecânica",
          description: "Mecânico treinado pronto para ajudar com qualquer problema no veículo. Assistência de emergência na estrada disponível para viajantes explorando Moçambique.",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.heading}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t.subheading}
        </p>

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
