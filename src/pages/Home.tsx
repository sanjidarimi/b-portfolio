import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Service";
import logo from "/techzaa.png";

export default function HomePage() {
  return (
    <>
      <Navbar
        logo={logo}
        logoAlt="TechZaa Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power3.easeOut"
        initialLoadAnimation={true} 
        githubUrl="https://github.com/dev-sharafat" 
        linkedinUrl="https://www.linkedin.com/in/sharafathassain23" 
        mailTo="mailto:mdsharafathassainbinoy@gmail.com" 
      />
      <Hero />
      <About/>
      <Services/>
    </>
  );
}