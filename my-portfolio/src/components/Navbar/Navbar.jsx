import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-500 ${scrolled ? "py-4" : "py-8"
        }`}
    > <div className="container mx-auto px-6">
        <div
          className={`mx-auto max-w-5xl glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${scrolled
            ? "bg-black/60 border-white/10"
            : "bg-transparent border-transparent"
            }`}
        > <a
          href="#home"
          className="flex items-center gap-2 group"
        > <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center font-bold text-black group-hover:scale-110 transition-transform">
              PM </div>

            ```
            <span className="hidden md:block font-display font-medium tracking-tight text-white/90 group-hover:text-white">
              Patan Mastanvali
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-white/60 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/60 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              )
            )}

            <a
              href="#contact"
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gold transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white/60"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 md:hidden"
          >
            <div className="glass-card p-6 space-y-4">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-white/60 hover:text-gold"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-white/60 hover:text-gold"
                  >
                    {link.name}
                  </a>
                )
              )}

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-gold text-black text-center py-3 rounded-xl font-bold"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}