import React from 'react';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('service1.title'),
      description: t('service1.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'blue'
    },
    {
      id: 2,
      title: t('service2.title'),
      description: t('service2.description'),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      color: 'cyan'
    },
    {
      id: 3,
      title: t('service3.title'),
      description: t('service3.description'),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: 'green'
    },
    {
      id: 4,
      title: t('service4.title'),
      description: t('service4.description'),
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: 'orange'
    },
    {
      id: 5,
      title: t('service5.title'),
      description: t('service5.description'),
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-600',
        hover: 'hover:bg-blue-100',
        border: 'border-blue-200'
      },
      cyan: {
        bg: 'bg-cyan-50',
        icon: 'text-cyan-600',
        hover: 'hover:bg-cyan-100',
        border: 'border-cyan-200'
      },
      green: {
        bg: 'bg-green-50',
        icon: 'text-green-600',
        hover: 'hover:bg-green-100',
        border: 'border-green-200'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'text-orange-600',
        hover: 'hover:bg-orange-100',
        border: 'border-orange-200'
      },
      purple: {
        bg: 'bg-purple-50',
        icon: 'text-purple-600',
        hover: 'hover:bg-purple-100',
        border: 'border-purple-200'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Services Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const colors = getColorClasses(service.color);
            return (
              <div
  key={service.id}
  className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${colors.bg} ${colors.border} ${colors.hover}`}
>
  {/* Contenedor para Icono y Título en la misma línea */}
  <div className="flex items-center mb-4"> {/* Añadido flex y items-center */}
    {/* Icon */}
    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}> {/* Reducí w/h y añadí mr-4 */}
      <div className={colors.icon}>
        {service.icon}
      </div>
    </div>

    {/* Título */}
    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 m-0"> {/* Añadí m-0 para quitar márgenes predeterminados */}
      {service.title}
    </h3>
  </div>

  {/* Descripción */}
  <p className="text-gray-600 leading-relaxed">
    {service.description}
  </p>

  {/* Hover Effect */}
  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-colors duration-300 opacity-0 group-hover:opacity-100"></div>
</div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            {t('needSomething')}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors text-lg shadow-lg hover:shadow-xl">
            {t('getInTouch')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 