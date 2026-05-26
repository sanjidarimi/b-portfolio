import {
  CheckCircle,
  Cpu,
  Mail,
  MessageSquare,
  Terminal,
  User,
} from "lucide-react";
import React, { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { PiDiscordLogo } from "react-icons/pi";
import { Link } from "react-router";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      /* later api call here */

      // Simulating a successful transaction for demonstration:
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="relative w-full flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Main Container */}
      <div className="w-full container grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* LEFT COLUMN: Why Contact Me */}
        <div className="lg:col-span-5 flex flex-col justify-between p-7 glass relative border border-border group overflow-hidden">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 uppercase text-foreground">
              Why contact me for <br />
              <span className="text-primary neon-text-glow">
                your next project?
              </span>
            </h2>

            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/40 transition-all duration-300">
                <div className="flex gap-3">
                  <Terminal size={18} className="text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Scalability & Performance
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      I build systems optimized for high concurrent traffic,
                      database indexing, and structured microservices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/40 transition-all duration-300">
                <div className="flex gap-3">
                  <Cpu size={18} className="text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Robust API Architecture
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      I design clean, secure REST and GraphQL APIs with strict
                      data validation and proper rate limiting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-background border border-border/50 hover:border-primary/40 transition-all duration-300">
                <div className="flex gap-3">
                  <Terminal size={18} className="text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Database & Data Integrity
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      I design efficient relational and non-relational database
                      schemas, ensuring data safety, complex queries, and
                      caching strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Form & Floating Controls */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main interactive Form Module */}
          <div className="md:col-span-11 p-6 md:p-8  glass border border-border relative flex flex-col justify-between">
            {status === "success" ? (
              /* Success Interface Statement */
              <div className="flex-1 flex flex-col items-center justify-center text-center py-12 animate-float">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold tracking-wide text-foreground uppercase mb-2">
                  Message Sent!
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm  leading-relaxed">
                  Thank you for reaching out. Your message has been sent
                  successfully. I will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 cursor-pointer px-5 py-2 rounded-lg text-xs  uppercase text-foreground border border-border bg-primary/20 hover:border-primary transition-all duration-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Core Form Execution Path */
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-1 text-foreground">
                    Get In Touch
                  </h3>
                  <p className="text-xs text-muted-foreground mb-4">
                    Fill out the form below and I'll get back to you shortly.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name field */}
                  <div className="relative">
                    <label className="text-xs uppercase  text-muted-foreground tracking-widest block mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70"
                      />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-background border border-input rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-foreground"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="text-xs uppercase  text-muted-foreground tracking-widest block mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/70"
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-background border border-input rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-foreground"
                      />
                    </div>
                  </div>

                  {/* Message box */}
                  <div className="relative">
                    <label className="text-xs uppercase  text-muted-foreground tracking-widest block mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={16}
                        className="absolute left-3 top-4 text-muted-foreground/70"
                      />
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or inquiry..."
                        className="w-full bg-background border border-input rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-foreground resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full mt-2 py-3 cursor-pointer px-6 bg-primary text-primary-foreground rounded-xl text-xs uppercase font-bold tracking-widest shimmer transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending message..." : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-xs text-destructive text-center  mt-2">
                    Something went wrong. Please try again later.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* VERTICAL SOCIAL ICONS AXIS */}
          <div className="md:col-span-1 flex flex-row md:flex-col items-center justify-center md:justify-start gap-4 md:pt-4">
            <div className="hidden md:block w-px h-10 bg-linear-to-b from-transparent to-border" />

            <Link
              to="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Link"
              className="p-3 rounded-xl border border-border/80 bg-background hover:bg-primary/10 hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
            >
              <FiGithub size={18} />
            </Link>

            <Link
              to="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Link"
              className="p-3 rounded-xl border border-border/80 bg-background hover:bg-primary/10 hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
            >
              <FiLinkedin size={18} />
            </Link>

            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter Link"
              className="p-3 rounded-xl border border-border/80 bg-background hover:bg-primary/10 hover:border-primary text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
            >
              <PiDiscordLogo size={18} />
            </Link>

            <div className="hidden md:block flex-1 w-px bg-linear-to-b from-border to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
