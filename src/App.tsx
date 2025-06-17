import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import HamburgerButton from "./components/HamburgerButton";
import MobileMenu from "./components/MobileMenu";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import "./i18n";

function App() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              {t("title")}
            </h1>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <section className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {t("welcome")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base hover:cursor-pointer">
              {t("downloadCV")}
            </button>
          </div>
        </section>
      </div>

      <nav
        className={`hidden sm:block mb-12 sm:mb-16 transition-all duration-300 ${
          isMobileMenuOpen ? "hidden sm:block" : "block"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <a
            href="#about"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base md:text-lg transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
          >
            {t("about")}
          </a>
          <a
            href="#services"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base md:text-lg transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
          >
            {t("services")}
          </a>
          <a
            href="#projects"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base md:text-lg transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
          >
            {t("projects")}
          </a>
          <a
            href="#contact"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base md:text-lg transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
          >
            {t("contact")}
          </a>
        </div>
      </nav>

      <AboutSection />

      <ServicesSection />

      <ProjectsSection />

      <ContactSection />

      <footer className=" bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              © 2025 Carlos Gomez. {t("license")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
