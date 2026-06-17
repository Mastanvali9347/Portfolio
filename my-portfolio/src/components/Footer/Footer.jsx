import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 mt-24 border-t border-white/5 relative bg-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center font-bold text-black text-xl">
                PM
              </div>
              <div>
                <h3 className="text-xl font-bold">Patan Mastanvali</h3>
                <p className="text-gold text-xs font-mono uppercase tracking-widest">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-white/40 max-w-md font-light leading-relaxed">
              "Turning ideas into powerful digital experiences." <br />
              Building the future of web with React, Python, and AI.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#skills" className="hover:text-gold transition-colors">Skills Galaxy</a></li>
              <li><a href="#projects" className="hover:text-gold transition-colors">Showcase</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/Mastanvali9347" },
                { icon: Linkedin, href: "https://linkedin.com/in/patan-mastan" },
                { icon: Instagram, href: "#" },
                { icon: Mail, href: "mailto:patanmastan455@gmail.com" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/20">
          <div>© {year} PATAN MASTANVALI. All rights reserved.</div>
          <div className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> & Passion
          </div>
          <div className="font-mono">v1.2.0-STABLE</div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </footer>
  );
}