import { useState } from "react";
import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/tofo-rides-logo.png";

interface HeaderProps {
  language: "en" | "pt";
  onLanguageChange: (lang: "en" | "pt") => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="section-container py-3 flex items-center justify-between">
        <img src={logoImage} alt="Tofo Rides with Jorge Logo" className="h-16 w-auto md:h-20 md:w-auto" />
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onLanguageChange(language === "en" ? "pt" : "en")}
            aria-label="Toggle language"
            className="tap-target"
          >
            <Globe className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="tap-target"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
