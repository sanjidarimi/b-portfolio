import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import logo from "/logo.png";
import { ScrollToHash } from "../components/shared/ScrollToHash";
 const RootLayout = () => {
  return (
    <>
    <ScrollToHash/>
      <Navbar
        logo={logo}
        logoAlt="Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/#about" },
          { label: "Services", href: "/#services" },
          { label: "Projects", href: "/#projects" },
          { label: "Contact", href: "/#contact" },
        ]}
        className="custom-nav"
        ease="power3.easeOut"
        initialLoadAnimation={false}
        githubUrl="https://github.com/dev-sharafat"
        linkedinUrl="https://www.linkedin.com/in/sharafathassain23"
        mailTo="mailto:mdsharafathassainbinoy@gmail.com"
      />
    
      <main className="w-full min-h-screen bg-background text-foreground antialiased selection:bg-primary/30">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
export default RootLayout;