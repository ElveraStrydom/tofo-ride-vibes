import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  language: "en" | "pt";
}

const Contact = ({ language }: ContactProps) => {
  const content = {
    en: {
      heading: "Get in Touch",
      subheading: "Ready to book your ride? Contact Jorge on WhatsApp now!",
      cta: "Message on WhatsApp",
      location: "Based in Tofo, Mozambique",
      phone: "+258 860 163 745",
      email: "jorgerofino77@gmail.com",
    },
    pt: {
      heading: "Entre em Contato",
      subheading: "Pronto para reservar seu transporte? Contate Jorge no WhatsApp agora!",
      cta: "Mensagem no WhatsApp",
      location: "Sediado em Tofo, Moçambique",
      phone: "+258 860 163 745",
      email: "jorgerofino77@gmail.com",
    },
  };

  const t = content[language];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t.heading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {t.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{t.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-5 w-5 text-primary" />
              <span>{t.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-primary" />
              <span>{t.email}</span>
            </div>
          </div>

          <Button
            variant="whatsapp"
            size="xl"
            asChild
            className="mb-12"
          >
            <a
              href="https://wa.me/+258860163745"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-6 w-6" />
              {t.cta}
            </a>
          </Button>

          <div className="rounded-2xl overflow-hidden shadow-soft h-[300px] md:h-[400px] border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57698.89392947644!2d35.50!3d-23.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec6e3d3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sTofo%2C%20Mozambique!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tofo Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
