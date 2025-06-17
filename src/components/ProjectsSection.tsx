import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectModal from './ProjectModal';

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: t('project1.title'),
      description: t('project1.description'),
      techStack: t('project1.techStack'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop'
      ],
      demoUrl: 'https://demo-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce-platform'
    },
    {
      id: 2,
      title: t('project2.title'),
      description: t('project2.description'),
      techStack: t('project2.techStack'),
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
      ],
      demoUrl: 'https://task-app-demo.com',
      githubUrl: 'https://github.com/username/task-management-app'
    },
    {
      id: 3,
      title: t('project3.title'),
      description: t('project3.description'),
      techStack: t('project3.techStack'),
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop'
      ],
      demoUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/username/portfolio-website'
    },
    {
      id: 4,
      title: t('project4.title'),
      description: t('project4.description'),
      techStack: t('project4.techStack'),
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop'
      ],
      demoUrl: 'https://api-docs-demo.com',
      githubUrl: 'https://github.com/username/api-rest-service'
    }
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('projectsTitle')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {t('projectsSubtitle')}
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Projects Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.split(', ').slice(0, 2).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.split(', ').length > 2 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium">
                      +{project.techStack.split(', ').length - 2} más
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default ProjectsSection; 