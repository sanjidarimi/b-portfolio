import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { FiExternalLink, FiGithub, FiTerminal } from "react-icons/fi";
import { useParams } from "react-router";
import { dummyProjectData } from "../data/project.data";

export const ProjectDetails: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  console.log("project id", projectId);

  const project = dummyProjectData.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-2xl font-black uppercase text-destructive mb-2">
          404 // Project Not Found
        </h2>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full min-h-screen text-foreground py-28 px-4  container mx-auto"
    >
      {/* Main Grid split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-1">
              <FiTerminal /> Core Systems Architecture
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase">
              {project.title}
            </h1>
          </div>

          <div className="border-l-2 border-primary/30 pl-4 py-1">
            <h2 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-2">
              OverView
            </h2>
            <p className="text-muted-foreground/90 leading-relaxed text-base">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold tracking-wider uppercase text-foreground">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 gap-3">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="glass p-4 rounded-lg flex items-start gap-3 border-l-4 border-l-primary"
                >
                  <span className="text-primary font-mono text-xs font-bold mt-0.5">
                    [{idx + 1}]
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-primary">
            <h3 className="text-xs font-bold tracking-widest text-primary uppercase border-b-3 w-fit mb-3">
              Impact & Engineering Vision
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed italic">
              "{project.impactAndVision}"
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-12">
          <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-border/60">
            <div className="relative h-64 w-full bg-secondary/40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
            </div>

            <div className="p-6 border-t border-border/40 bg-card/30">
              <h3 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
                Core Stack Blueprint
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-medium px-3 py-1.5 bg-background border border-border text-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-background/60 border-t border-border/40 flex flex-col gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="shimmer flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-4 rounded-md transition-all text-sm uppercase tracking-wider"
                >
                  <FiExternalLink /> Live Environment
                </a>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={project.backendRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-foreground bg-secondary/50 font-semibold py-2.5 px-4 rounded-md transition-colors text-xs uppercase tracking-wider"
                >
                  <FiGithub size={16} /> Source (Backend)
                </a>
                {project.frontendRepo && (
                  <a
                    href={project.frontendRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 border border-border hover:border-primary/50 text-foreground bg-secondary/50 font-semibold py-2.5 px-4 rounded-md transition-colors text-xs uppercase tracking-wider"
                  >
                    <FiGithub size={16} /> Source (Frontend)
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
