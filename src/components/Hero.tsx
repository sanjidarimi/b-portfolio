import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Backend Developer", "TypeScript Enthusiast", "API Architect"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Automatic text flipping logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-20 pt-24 md:pt-0">
        {/* Left Side: Content */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-20 w-full max-w-md aspect-square rounded-2xl overflow-hidden border-4 shadow-2xl neon-glow "
          >
            <img
              src="/me.png"
              alt="Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-wider"
          >
            HI, I'M{" "}
            <span className="neon-text-glow dark:text-primary text-5xl border-b-2 ">
              Sharafat Hossain
            </span>
          </motion.h2>

          <div className="">
            <AnimatePresence mode="wait">
              <motion.h1
                key={roles[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl uppercase italic leading-none"
              >
                {roles[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="max-w-xl text-xl leading-relaxed">
            I specialize in building robust server-side logic, architecting
            scalable APIs, and ensuring type-safety across the entire stack.
          </p>

          <div className="flex flex-wrap gap-4 pt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
