import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { dummyProjectData } from "../data/project.data";

export const ProjectSection: React.FC = () => {
  return (
    <div className="w-full px-4 container mx-auto relative">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-5xl max-w-3xl text-foreground tracking-tight font-bold">
         A showcase of technical experiments
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground font-medium">
          A comprehensive directory of scalable distributed ecosystems, pipeline
          engines, and microservices architectures I have developed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyProjectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
