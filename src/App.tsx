import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header - Mobile First */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              {t('title')}
            </h1>
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-6 sm:py-8">
        {/* Hero Section - Mobile First */}
        <section className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {t('welcome')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
              {t('downloadCV')}
            </button>
          </div>
        </section>
        
        {/* Navigation - Mobile First */}
        <nav className="mb-12 sm:mb-16">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <a href="#about" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base md:text-lg transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">
              {t('about')}
            </a>
            <a href="#services" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base md:text-lg transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">
              {t('services')}
            </a>
            <a href="#projects" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base md:text-lg transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">
              {t('projects')}
            </a>
            <a href="#contact" className="text-blue-600 hover:text-blue-800 font-medium text-sm sm:text-base md:text-lg transition-colors px-3 py-2 rounded-lg hover:bg-blue-50">
              {t('contact')}
            </a>
          </div>
        </nav>

        {/* Quick Info Cards - Mobile First */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('skills')}</h3>
            <p className="text-gray-600 text-sm">React, TypeScript, Node.js, Python</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('experience')}</h3>
            <p className="text-gray-600 text-sm">5+ años desarrollando aplicaciones web</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('portfolio')}</h3>
            <p className="text-gray-600 text-sm">Más de 20 proyectos completados</p>
          </div>
        </section>

        {/* Contact Section - Mobile First */}
        <section className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t('getInTouch')}
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
            {t('sendMessage')}
          </button>
        </section>
      </div>

      {/* Footer - Mobile First */}
      <footer className="mt-12 sm:mt-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              © 2024 Carlos Gomez Dev. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
