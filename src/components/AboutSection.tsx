import React from "react";
import { useTranslation } from "react-i18next";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("aboutTitle")}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid - Mobile First */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo Section */}
          <div className="order-1 lg:order-1">
            <div className="relative">
              {/* Placeholder for profile photo */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl shadow-lg flex items-center justify-center">
                <img
                  src="/images/profile.png"
                  alt="Carlos Gomez"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-2">
            <div className="space-y-2">
              {/* Main Description */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {t("aboutDescription")}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    {t("specialization")}
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    {t("leadership")}
                  </span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <div className="flex gap-3 justify-center sm:justify-center md:justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/in/gomezmendozacarlos/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base hover:cursor-pointer">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </button>
                  </a>

                  <a
                    href="https://github.com/gomezmendozacarlos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base hover:cursor-pointer">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-sm sm:text-base">
                        {t("github")}
                      </span>
                    </button>
                  </a>

                  <a
                    href="https://drive.google.com/drive/folders/1F1o_-XOutH-_f_R_nv4T0ddrmcGhPmqx?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base hover:cursor-pointer">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.175 13l-3.324 6h11.824L20 13H8.175zM5.865 2.299L0 12.914l3.372 6.084L9.238 8.383 5.865 2.299zM19.445 12L13.349 1H6.604l6.088 11h6.753z" />
                      </svg>
                      <span className="text-sm sm:text-base">
                        Courses
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
