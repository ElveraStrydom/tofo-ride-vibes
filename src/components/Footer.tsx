interface FooterProps {
  language: "en" | "pt";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    en: {
      copyright: "Tofo Rides with Jorge. All rights reserved.",
      tagline: "Your trusted local driver in Tofo, Mozambique",
    },
    pt: {
      copyright: "Tofo Rides com Jorge. Todos os direitos reservados.",
      tagline: "Seu motorista local de confiança em Tofo, Moçambique",
    },
  };

  const t = content[language];

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="section-container text-center">
        <p className="text-sm mb-2">{t.tagline}</p>
        <p className="text-xs opacity-80">© {new Date().getFullYear()} {t.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
