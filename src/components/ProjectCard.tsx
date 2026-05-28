import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router'; 
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import type { Project } from '../types/project.types';


interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass rounded-xl overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-300 group shadow-lg hover:shadow-primary/10"
    >
      {/* Project Image */}
      <div className="relative h-48 w-full overflow-hidden bg-background/50 border-b border-border/40">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold tracking-tight text-foreground mb-3 font-sans">
          {project.title}
        </h3>
        
        {/* Technologies List */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 bg-secondary text-primary rounded border border-border/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/30">
          {project.liveLink ? (
            <Link 
              to={project.liveLink} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Live Demo <FiExternalLink size={14} />
            </Link>
          ) : (
            <span className="text-xs text-muted-foreground italic tracking-wide">Microservice API</span>
          )}

          {/* Change from a button to an explicit Route Link */}
          <Link
            to={`/project/${project.id}`}
            className="shimmer flex items-center gap-2 text-sm bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 py-2 rounded-md transition-all duration-300"
          >
            View Details
            <FiArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};