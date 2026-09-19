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
          className="flex items-center group cursor-pointer"
        >
          <motion.div 
            className="w-11 h-11 rounded-full flex items-center justify-center font-black text-black shadow-[0_0_15px_rgba(0,243,255,0.6)] shrink-0 z-10"
            style={{ background: 'linear-gradient(135deg, #00f3ff, #00ff9d)' }}
            whileHover={{ scale: 1.15, rotate: 360 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            PM
          </motion.div>
          
          <div className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] max-w-0 group-hover:max-w-[250px] opacity-0 group-hover:opacity-100">
            <span 
              className="hidden md:block font-display font-bold tracking-wider text-xl whitespace-nowrap pl-3"
              style={{ 
                background: 'linear-gradient(90deg, #00f3ff, #00ff9d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0px 0px 4px rgba(0,243,255,0.3))'
              }}
            >
              Patan Mastanvali
            </span>
          </div>
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