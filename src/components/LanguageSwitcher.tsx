import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2 p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-200">
      <span className="text-xs sm:text-sm font-medium text-gray-700 hidden sm:block">
        {t('language')}:
      </span>
      <div className="flex bg-gray-100 rounded-md p-0.5 sm:p-1">
        <button
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm font-medium transition-all duration-200 ${
            i18n.language === 'en'
              ? 'bg-blue-500 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm font-medium transition-all duration-200 ${
            i18n.language === 'es'
              ? 'bg-blue-500 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;