import jorgeImage from "@/assets/jorge-portrait.jpg";

interface AboutProps {
  language: "en" | "pt";
}

const About = ({ language }: AboutProps) => {
  const content = {
    en: {
      heading: "Meet Jorge",
      bio: "Jorge is a trusted local driver based in Tofo, Mozambique. Whether it's a short trip or a long drive, you'll always feel safe and welcome. Known for his warm smile, punctuality, and professionalism, he has helped travellers explore Mozambique's beautiful coast safely and comfortably for years. Friendly, reliable, and always on time, Jorge speaks fluent English and Portuguese — and he's also a trained mechanic. With his experience driving both 2×4 and 4×4 vehicles, you're in excellent hands. For many travellers, Jorge is more than a driver — he's your local connection to Mozambique.",
    },
    pt: {
      heading: "Conheça o Jorge",
      bio: "Jorge é um motorista local confiável sediado em Tofo, Moçambique. Seja uma viagem curta ou uma longa viagem, você sempre se sentirá seguro e bem-vindo. Conhecido por seu sorriso caloroso, pontualidade e profissionalismo, ele tem ajudado viajantes a explorar a bela costa de Moçambique com segurança e conforto há anos. Amigável, confiável e sempre pontual, Jorge fala inglês e português fluentemente — e também é um mecânico treinado. Com sua experiência dirigindo veículos 2×4 e 4×4, você está em excelentes mãos. Para muitos viajantes, Jorge é mais do que um motorista — ele é sua conexão local com Moçambique.",
    },
  };

  const t = content[language];

  return (
    <section id="about" className="py-16 md:py-24 gradient-beach">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {t.heading}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 animate-fade-in">
            <img
              src={jorgeImage}
              alt="Jorge"
              className="rounded-2xl shadow-soft w-full aspect-square object-cover"
            />
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
