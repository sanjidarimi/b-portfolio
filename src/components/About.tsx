import { motion, type Variants } from "framer-motion";
import React from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiCpu,
  FiMapPin,
  FiTarget,
  FiUser,
} from "react-icons/fi";
import SectionBadge from "./shared/sectionBadge";

interface EducationMilestone {
  id: string;
  type: "current" | "completed";
  degree: string;
  institute: string;
  timeline: string;
  location?: string;
}

const About: React.FC = () => {
  // Framer Motion Variants
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
      transition: { staggerChildren: 0.15 },
    },
  };

  const educationData: EducationMilestone[] = [
    {
      id: "edu-diploma",
      type: "current",
      degree: "Diploma in Engineering",
      institute: "Kurigram Polytechnic Institute",
      timeline: "Class of 2027",
      location: "Kurigram, Bangladesh",
    },
    {
      id: "edu-ssc",
      type: "completed",
      degree: "Secondary School Certificate (SSC)",
      institute: "Oxford International Grammar School",
      timeline: "Passed 2022",
      location: "Dhaka, Bangladesh",
    },
  ];

  return (
    <section className="relative w-full pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden bg-background">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <motion.div
          className="lg:col-span-7 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <SectionBadge
            icon={<FiUser className="text-sm" />}
            text="//_About_Me"
          />

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight"
          >
            Architecting stable, scalable{" "}
            <span className="border-b-2 text-primary">digital backbones</span>{" "}
            for modern applications.
          </motion.h2>

          {/* ADDED CONDENSED BIO TEXT HERE */}
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed text-base max-w-2xl"
          >
            I am a Backend Developer based in Rangpur, Bangladesh, specializing
            in building fast, secure, and accessible web systems. My expertise
            spans the modern JavaScript ecosystem-including{" "}
            <strong>
              React, Next.js, Node.js, NestJS, PostgreSQL, and MongoDB
            </strong>{" "}
            with a core focus on writing clean, maintainable code and optimizing
            end-to-end performance.
          </motion.p>

          <hr className="border w-2/3" />
          <hr className="border w-2/4" />
          {/* Ambition & Purpose Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ambition Field */}
            <motion.div
              variants={fadeUp}
              className="group neon-glow p-6 rounded-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:neon-glow transition-all duration-300">
                  <FiTarget className="text-xl" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-wide text-foreground uppercase">
                    My Ambition
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    To master low-latency distributed systems and design
                    architectural frameworks that handle millions of requests
                    seamlessly. I aim to bridge the gap between heavy
                    computational constraints and frontend executions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Purpose Field */}
            <motion.div
              variants={fadeUp}
              className="group neon-glow p-6 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-neon-purple/30"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-neon-purple/10 text-primary border border-border/40 group-hover:border-neon-purple/50 transition-all duration-300">
                  <FiCpu className="text-xl text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold tracking-wide text-foreground uppercase">
                    Core Purpose
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Code isn't just about making things work; it's about
                    reliability under pressure. My purpose is to write clean,
                    maintainable, and highly optimized backend logic, turning
                    complex business rules into elegant, testable microservices.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE: EDUCATION ================= */}
        <motion.div
          className="lg:col-span-5 space-y-6 lg:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-2"
          >
            <FiBookOpen className="text-xl text-primary" />
            <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Educational Milestones
            </h4>
          </motion.div>

          {/* Education Vertical Stack */}
          {educationData.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeUp}
              className="group block p-6 mt-5 cursor-pointer rounded-xl transition-all duration-300 hover:-translate-y-1.5 neon-glow border border-border/60 hover:border-primary/40"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <span
                    className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider border ${
                      edu.type === "current"
                        ? "bg-primary/20 text-primary border-primary/30"
                        : "bg-muted text-muted-foreground border-border"
                    }`}
                  >
                    {edu.type === "current" ? "Active Study" : "Completed"}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                    <FiCalendar className="text-primary" />
                    <span>{edu.timeline}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {edu.institute}
                  </p>
                </div>

                {edu.location && (
                  <div className="pt-2 flex items-center gap-2 text-xs text-muted-foreground/80 border-t border-border/40">
                    <FiMapPin className="text-primary" />
                    <span>{edu.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
