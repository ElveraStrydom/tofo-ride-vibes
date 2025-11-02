import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  language: "en" | "pt";
}

const FAQ = ({ language }: FAQProps) => {
  const content = {
    en: {
      heading: "Frequently Asked Questions",
      subheading: "Everything you need to know about Tofo transfers and taxi services",
      faqs: [
        {
          question: "How far is Tofo from Inhambane Airport?",
          answer: "Tofo is approximately 22 kilometers (about 30 minutes drive) from Inhambane Airport. Jorge provides reliable airport transfers with meet-and-greet service at arrivals."
        },
        {
          question: "How much does a taxi from Inhambane Airport to Tofo cost?",
          answer: "Transfer prices vary depending on vehicle type and number of passengers. Contact Jorge via WhatsApp at +258 860 163 745 for current rates and to book your transfer."
        },
        {
          question: "Can you arrange transfers from Vilanculos to Tofo?",
          answer: "Yes! Jorge provides comfortable transfers from Vilanculos Airport to Tofo (approximately 4-5 hours). This popular route is perfect for tourists visiting both diving destinations."
        },
        {
          question: "Do you offer transfers from Maputo to Tofo?",
          answer: "Absolutely. Jorge offers reliable long-distance transfers from Maputo to Tofo Beach (approximately 6-7 hours). Both 2x4 and 4x4 vehicles available depending on your needs."
        },
        {
          question: "Is advance booking required for airport transfers?",
          answer: "Advance booking is highly recommended, especially during peak tourist season (November to April). Contact Jorge on WhatsApp to confirm availability and secure your transfer."
        },
        {
          question: "What languages does Jorge speak?",
          answer: "Jorge is fluent in both English and Portuguese, making communication easy for international tourists visiting Mozambique."
        },
        {
          question: "Are the vehicles suitable for rough roads?",
          answer: "Yes, Jorge has experience with both 2x4 and 4x4 vehicles. He can recommend the best vehicle option based on your destination and road conditions."
        },
        {
          question: "Can Jorge help with day trips from Tofo?",
          answer: "Yes! Jorge offers day trip services to nearby attractions including Inhambane town, local markets, dive sites, and coastal excursions throughout the region."
        }
      ]
    },
    pt: {
      heading: "Perguntas Frequentes",
      subheading: "Tudo o que você precisa saber sobre transferências e serviços de táxi em Tofo",
      faqs: [
        {
          question: "Qual é a distância de Tofo ao Aeroporto de Inhambane?",
          answer: "Tofo fica a aproximadamente 22 quilômetros (cerca de 30 minutos de carro) do Aeroporto de Inhambane. Jorge fornece transferências confiáveis do aeroporto com serviço de recepção nas chegadas."
        },
        {
          question: "Quanto custa um táxi do Aeroporto de Inhambane para Tofo?",
          answer: "Os preços de transferência variam dependendo do tipo de veículo e número de passageiros. Entre em contato com Jorge via WhatsApp em +258 860 163 745 para tarifas atuais e para reservar sua transferência."
        },
        {
          question: "Você pode organizar transferências de Vilanculos para Tofo?",
          answer: "Sim! Jorge fornece transferências confortáveis do Aeroporto de Vilanculos para Tofo (aproximadamente 4-5 horas). Esta rota popular é perfeita para turistas visitando ambos os destinos de mergulho."
        },
        {
          question: "Você oferece transferências de Maputo para Tofo?",
          answer: "Com certeza. Jorge oferece transferências confiáveis de longa distância de Maputo para Tofo Beach (aproximadamente 6-7 horas). Veículos 2x4 e 4x4 disponíveis dependendo de suas necessidades."
        },
        {
          question: "É necessária reserva antecipada para transferências de aeroporto?",
          answer: "A reserva antecipada é altamente recomendada, especialmente durante a alta temporada turística (novembro a abril). Entre em contato com Jorge no WhatsApp para confirmar disponibilidade e garantir sua transferência."
        },
        {
          question: "Quais idiomas Jorge fala?",
          answer: "Jorge é fluente em inglês e português, facilitando a comunicação para turistas internacionais visitando Moçambique."
        },
        {
          question: "Os veículos são adequados para estradas difíceis?",
          answer: "Sim, Jorge tem experiência com veículos 2x4 e 4x4. Ele pode recomendar a melhor opção de veículo com base no seu destino e condições da estrada."
        },
        {
          question: "Jorge pode ajudar com viagens de um dia a partir de Tofo?",
          answer: "Sim! Jorge oferece serviços de viagens de um dia para atrações próximas, incluindo a cidade de Inhambane, mercados locais, locais de mergulho e excursões costeiras em toda a região."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {t.heading}
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          {t.subheading}
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {t.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Structured Data for FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": t.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }} />
      </div>
    </section>
  );
};

export default FAQ;
