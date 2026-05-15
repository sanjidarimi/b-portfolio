import { motion, type Variants } from "framer-motion";
import React from "react";
import {
  FiActivity,
  FiDatabase,
  FiServer,
  FiShield,
  FiTerminal,
} from "react-icons/fi";
import SectionBadge from "./shared/sectionBadge";

const Services: React.FC = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
    },
  };

  const services = [
    {
      title: "API Architecture",
      desc: "Designing RESTful & GraphQL APIs with NestJS/Express, focusing on high availability and strict documentation.",
      icon: <FiTerminal />,
      offset: false, // Normal position
    },
    {
      title: "Database Design",
      desc: "Architecting scalable schemas in PostgreSQL & MongoDB, optimized for complex queries and data integrity.",
      icon: <FiDatabase />,
      offset: true, // Pushed down
    },
    {
      title: "System Security",
      desc: "Implementing JWT, OAuth2, and robust encryption protocols to ensure data privacy and secure transactions.",
      icon: <FiShield />,
      offset: false, // Normal position
    },
    {
      title: "Performance Tuning",
      desc: "Optimizing server response times and query execution through Redis caching and efficient code logic.",
      icon: <FiActivity />,
      offset: true, // Pushed down
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-16 bg-background overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* LEFT SIDE: CONTENT */}
        <motion.div
          className="lg:col-span-5 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionBadge
            icon={<FiServer className="text-sm" />}
            text="//_Core_Infrastructure"
          />

          <motion.h2
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]"
          >
            Backend <span className="text-primary">Solutions</span> & System
            Design
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg leading-relaxed max-w-md"
          >
            I specialize in building the invisible engines that power modern web
            apps, ensuring your data is secure, your APIs are fast, and your
            systems scale.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE: STAGGERED CARDS */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl border border-border/40 hover:border-primary/50 transition-all duration-500 shadow-sm shadow-primary/10
                ${service.offset ? "" : "md:-mt-4"}
              `}
            >
              {/* Card Header */}
              <div className="p-4 rounded-xl w-fit bg-primary/10 text-primary text-3xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                {service.desc}
              </p>

              {/* Decorative "Scanning" line animation on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
