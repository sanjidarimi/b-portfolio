import { ArrowUp } from "lucide-react";
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { PiDiscordLogo } from "react-icons/pi";
import { Link } from "react-router";
import logo from "/logo.png";
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-border bg-background py-12 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_hsl(var(--accent-neon))]" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex gap-2 items-center">
              <img src={logo} className="w-10 h-10 object-cover" />
              <h2 className="font-bold text-2xl tracking-tight text-foreground group-hover:text-primary neon-text-glow transition-colors">
                Sharafat
              </h2>
            </div>
            <p className="text-xs text-muted-foreground font-mono max-w-xs text-center md:text-left">
              Architecting scalable systems and secure infrastructure. Built
              with React, TypeScript, and Passion.
            </p>
          </div>

          {/* Quick Socials & Contact */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-4">
              <Link
                to="#"
                className="p-2.5 rounded-lg border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <FiGithub size={18} />
              </Link>
              <Link
                to="#"
                className="p-2.5 rounded-lg border border-border bg-muted/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <FiLinkedin size={18} />
              </Link>
              <Link
                to="#"
                className="p-2.5 rounded-lg border border-border bg-muted/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <PiDiscordLogo size={18} />
              </Link>
              <Link
                to="mailto:your@email.com"
                className="p-2.5 rounded-lg border border-border bg-muted/20 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <FiMail size={18} />
              </Link>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Let's build something efficient
            </span>
          </div>

          {/* Navigation & Action */}
       
            <button
              onClick={scrollToTop}
              className="group cursor-pointer flex items-center gap-2 text-xs font-mono uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Back to system top
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
        
        </div>
      </div>
    </footer>
  );
};
