import { gsap } from "gsap";
import { Mail, Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { SiRefinedgithub } from "react-icons/si";
import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  mailTo?: string;
  initialLoadAnimation?: boolean;
}

const Navbar: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  initialLoadAnimation = true,
  githubUrl = "https://github.com",
  linkedinUrl = "https://linkedin.com",
  mailTo = "mailto:your-email@example.com",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | HTMLElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        const index = circleRefs.current.indexOf(circle);
        if (index === -1) return;

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 0.4, ease, overwrite: "auto" },
          0,
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 0.4, ease, overwrite: "auto" },
            0,
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 10), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 0.4, ease, overwrite: "auto" },
            0,
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, y: -20 });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.fromTo(
          logoEl,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, ease },
        );
      }

      if (navItems) {
        gsap.set(navItems, { width: 0, overflow: "hidden" });
        gsap.to(navItems, { width: "auto", duration: 0.6, ease });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.fromTo(
      img,
      { rotate: 0 },
      { rotate: 360, duration: 0.5, ease: "power2.out" },
    );
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    const menu = mobileMenuRef.current;

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.to(menu, { opacity: 1, y: 0, duration: 0.3, ease });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease,
          onComplete: () => gsap.set(menu, { visibility: "hidden" }),
        });
      }
    }
  };

  const isExternalLink = (href: string) =>
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#");

  const isRouterLink = (href?: string) => href && !isExternalLink(href);

  const cssVars = {
    ["--base"]:
      "var(--card)" ,
    ["--pill-bg"]: "var(--background)" ,
    ["--hover-text"]:
      "var(--primary)" ,
    ["--pill-text"]: "var(--foreground)" ,
    ["--nav-h"]: "48px",
    ["--pill-pad-x"]: "20px",
    ["--pill-gap"]: "4px",
  } as React.CSSProperties;

  const iconClass =
    "p-2 rounded-full transition-colors duration-200 hover:bg-muted text-foreground/80 hover:text-primary";

  return (
    <div
      className="fixed top-4 left-0 w-full z-50 px-4 md:px-8"
      style={cssVars}
    >
      {/* Navbar Container এ গ্লাস ইফেক্ট (glass) এবং বর্ডার অ্যাড করা হয়েছে */}
      <div
        className={`container mx-auto flex items-center justify-between glass border border-border/40 rounded-full px-6 py-2 shadow-lg backdrop-blur-md ${className}`}
      >
        {/* LEFT SIDE: LOGO & NAME */}
        <div className="flex items-center gap-3">
          {isRouterLink(items?.[0]?.href) ? (
            <Link
              to={items[0].href}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              ref={(el) => {
                logoRef.current = el;
              }}
              className="flex items-center gap-2 group no-underline"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border border-border bg-muted flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={logo}
                  alt={logoAlt}
                  ref={logoImgRef}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                Binoy
              </span>
            </Link>
          ) : (
            <a
              href={items?.[0]?.href || "#"}
              aria-label="Home"
              onMouseEnter={handleLogoEnter}
              ref={(el) => {
                logoRef.current = el as HTMLElement;
              }}
              className="flex items-center gap-2 group no-underline"
            >
              <div className="w-9 h-9 rounded-full overflow-hidden border border-border bg-muted flex items-center justify-center transition-transform group-hover:scale-105">
                <img
                  src={logo}
                  alt={logoAlt}
                  ref={logoImgRef}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                Binoy
              </span>
            </a>
          )}
        </div>

        {/* CENTER SIDE: NAV ITEMS (DESKTOP) */}
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex border border-border/30 shadow-inner"
          style={{ height: "var(--nav-h)", background: "var(--base)" }}
        >
          <ul
            role="menubar"
            className="list-none flex items-center m-0 p-1 h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              const pillStyle: React.CSSProperties = {
                background: "var(--pill-bg)",
                color: isActive ? "var(--primary)" : "var(--pill-text)",
                paddingLeft: "var(--pill-pad-x)",
                paddingRight: "var(--pill-pad-x)",
              };

              const PillContent = (
                <>
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-1 block pointer-events-none"
                    style={{
                      background: "var(--base)",
                      willChange: "transform",
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  <span className="label-stack relative inline-block leading-none z-2">
                    <span
                      className="pill-label relative z-2 inline-block leading-none"
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-0 z-3 inline-block font-semibold"
                      style={{
                        color: "var(--hover-text)",
                        // geometryChange: "transform",
                        willChange: "transform, opacity",
                      }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span className="absolute left-1/2 bottom-1.5 -translate-x-1/2 w-1 h-1 rounded-full bg-primary z-4 shadow-[0_0_8px_var(--color-primary)]" />
                  )}
                </>
              );

              const basePillClasses =
                "relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-medium text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer transition-colors duration-200";

              return (
                <li key={item.href} role="none" className="flex h-full">
                  {isRouterLink(item.href) ? (
                    <Link
                      role="menuitem"
                      to={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </Link>
                  ) : (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillClasses}
                      style={pillStyle}
                      aria-label={item.ariaLabel || item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillContent}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT SIDE: UTILITIES & SOCIALS */}
        <div className="hidden md:flex items-center gap-1">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="GitHub"
          >
            <SiRefinedgithub size={18} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={iconClass}
            aria-label="LinkedIn"
          >
            <PiLinkedinLogoBold size={18} />
          </a>
          <a href={mailTo} className={iconClass} aria-label="Email">
            <Mail size={18} />
          </a>
          <div className="h-4 w-px bg-border/60 mx-2" />
          <ModeToggle />
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="p-2 rounded-full hover:bg-muted text-foreground transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROP DOWN */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-4 right-4 mt-2 bg-background/95 backdrop-blur-lg border border-border/50 rounded-2xl p-4 shadow-xl origin-top"
      >
        <ul className="list-none m-0 p-0 flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href}>
                {isRouterLink(item.href) ? (
                  <Link
                    to={item.href}
                    className={`block py-2.5 px-4 text-sm font-medium rounded-xl hover:bg-muted transition-all ${isActive ? "text-primary bg-primary/5 font-semibold" : "text-foreground/80"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`block py-2.5 px-4 text-sm font-medium rounded-xl hover:bg-muted transition-all ${isActive ? "text-primary bg-primary/5 font-semibold" : "text-foreground/80"}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
        <div className="border-t border-border/50 mt-3 pt-3 flex justify-center gap-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <SiRefinedgithub size={18} />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <PiLinkedinLogoBold size={18} />
          </a>
          <a
            href={mailTo}
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
