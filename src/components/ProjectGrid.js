import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectGrid = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="h-48 bg-gray-700 relative overflow-hidden">
            {project.image && (
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority={index < 2} // Prioritize loading first two images
                  loading={index < 2 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJcUdBLaQAAAABJRU5ErkJggg=="
                />
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                {project.technologies && project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="bg-gray-700 text-xs text-gray-300 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid; 