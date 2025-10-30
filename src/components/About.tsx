import jorgeImage from "@/assets/jorge-portrait.jpg";
interface AboutProps {
  language: "en" | "pt";
}
const About = ({
  language
}: AboutProps) => {
  const content = {
    en: {
      heading: "Meet Jorge",
      bio: "Jorge is a friendly and reliable local driver based in Tofo, Mozambique. He speaks English and Portuguese, is always on time, and is a trained mechanic. Whether it's a short trip or a long drive, you'll always feel safe and welcome."
    },
    pt: {
      heading: "Conheça o Jorge",
      bio: "Jorge é um motorista local amigável e confiável sediado em Tofo, Moçambique. Ele fala inglês e português, é sempre pontual e é um mecânico treinado. Seja uma viagem curta ou uma longa viagem, você sempre se sentirá seguro e bem-vindo."
    }
  };
  const t = content[language];
  return <section id="about" className="py-16 md:py-24 gradient-beach">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {t.heading}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          <div className="w-full md:w-1/2 animate-fade-in">
            <img src={jorgeImage} alt="Jorge" className="rounded-2xl shadow-soft w-full aspect-square object-cover" />
          </div>
          
          <div className="w-full md:w-1/2 animate-fade-in">
            <p className="md:text-xl text-muted-foreground leading-relaxed text-base">
              {t.bio}
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default About;