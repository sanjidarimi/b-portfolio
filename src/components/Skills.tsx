import { motion, type Variants } from "framer-motion";
import React from "react";
import { FiCpu, FiDatabase, FiLayers, FiServer } from "react-icons/fi";
import {
  SiDotnet,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import SectionBadge from "./shared/sectionBadge";

interface Skill {
  name: string;

  icon: React.ReactNode;
  colorClass: string;
  angle: number;
}

const Skills: React.FC = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const innerOrbitSkills: Skill[] = [
    {
      name: "Node.js",

      icon: <SiNodedotjs />,
      colorClass: "border-primary text-primary",
      angle: 0,
    },
    {
      name: "Express.js",

      icon: <SiExpress />,
      colorClass: "border-primary text-primary",
      angle: 120,
    },
    {
      name: "NestJS",

      icon: <SiNestjs />,
      colorClass: "border-neon-purple text-neon-purple",
      angle: 240,
    },
  ];

  const outerOrbitSkills: Skill[] = [
    {
      name: "PostgreSQL",

      icon: <SiPostgresql />,
      colorClass: "border-primary text-primary",
      angle: 0,
    },
    {
      name: "MongoDB",

      icon: <SiMongodb />,
      colorClass: "border-neon-green text-neon-green",
      angle: 72,
    },
    {
      name: "GraphQL",

      icon: <SiGraphql />,
      colorClass: "border-neon-purple text-neon-purple",
      angle: 144,
    },
    {
      name: "Prisma ORM",
      icon: <SiPrisma />,
      colorClass: "border-foreground text-foreground",
      angle: 216,
    },
    {
      name: ".NET / C#",
      icon: <SiDotnet />,
      colorClass: "border-neon-purple text-neon-purple",
      angle: 288,
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 sm:px-8 lg:px-16 overflow-hidden bg-background font-sans border-t border-border/20">
      {/* Background Glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-neon-purple/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* ================= LEFT SIDE: HOOK & CONTEXT ================= */}
        <motion.div
          className="lg:col-span-5 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionBadge
            icon={<FiCpu className="text-sm" />}
            text="//_Tech_Stack"
          />

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight"
          >
            Forging high-performance engines with a{" "}
            <span className="text-primary">modern stack.</span>
          </motion.h2>

          <hr className="border-border/50 w-24" />

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-md"
          >
            I specialize in developing core server-side infrastructures. From
            managing absolute transactional data safety to streamlining
            architecture APIs and balancing server latency routines, these are
            the tools I command.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="pt-4 flex flex-wrap gap-3 text-xs font-mono text-muted-foreground"
          >
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-muted/40 border border-border/50">
              <FiServer className="text-primary" /> REST APIs
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-muted/40 border border-border/50">
              <FiDatabase className="text-neon-green" /> Database Optimization
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-muted/40 border border-border/50">
              <FiLayers className="text-neon-purple" /> Microservices
            </span>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE: SKILLS CYBER ORBIT ================= */}
        <div className="lg:col-span-7 flex items-center justify-center min-h-125 w-full relative select-none">
          <div className="relative w-md h-112 flex items-center justify-center scale-90 sm:scale-100">
            {/* CENTRAL BACKEND KERNEL NODE */}
            <div className="absolute w-20 h-20 rounded-full shimmer border border-primary/40 flex flex-col items-center justify-center z-30 shadow-lg shadow-primary/10 animate-pulse">
              <FiDatabase className="text-2xl text-primary neon-text-glow" />
              <span className="text-[9px] font-mono tracking-widest mt-1 text-muted-foreground uppercase">
                Skills
              </span>
            </div>

            {/* ================= INNER ORBIT TRACK (260px) ================= */}
            <div className="absolute w-60 h-60 rounded-full border-2 border-primary border-dashed animate-[spin_25s_linear_infinite] z-10 hover:paused">
              {innerOrbitSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="absolute group"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${skill.angle}deg) translate(120px) rotate(-${skill.angle}deg)`,
                  }}
                >
                  {/* Planetary Skill Node */}
                  <div
                    className={`w-12 h-12 rounded-full glass border-2 ${skill.colorClass} flex items-center justify-center text-lg shadow-md cursor-pointer transition-transform duration-300 group-hover:scale-125 animate-[spin_25s_linear_infinite_reverse]`}
                  >
                    {skill.icon}
                  </div>

                  {/* Hover Floating Data Interface */}
                  <div className="absolute left-1/2 bottom-14 -translate-x-1/2 pointer-events-none transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-40 min-w-30">
                    <div className=" px-3 py-2 rounded-xl text-center shadow-2xl">
                      <p className="text-xs font-bold text-foreground whitespace-nowrap">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= OUTER ORBIT TRACK (420px) ================= */}
            <div className="absolute w-100 h-100 rounded-full border-dashed border-2 border-primary animate-[spin_45s_linear_infinite] z-10 hover:paused">
              {outerOrbitSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="absolute group"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${skill.angle}deg) translate(200px) rotate(-${skill.angle}deg)`,
                  }}
                >
                  {/* Planetary Skill Node */}
                  <div
                    className={`w-12 h-12 rounded-full glass border-2 ${skill.colorClass} flex items-center justify-center text-lg shadow-md cursor-pointer transition-transform duration-300 group-hover:scale-125 animate-[spin_45s_linear_infinite_reverse]`}
                  >
                    {skill.icon}
                  </div>

                  {/* Hover Floating Data Interface */}
                  <div className="absolute left-1/2 bottom-14 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-40 min-w-30">
                    <div className="glass border border-border/80 px-3 py-2 rounded-xl text-center shadow-2xl">
                      <p className="text-xs font-bold text-foreground whitespace-nowrap">
                        {skill.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
