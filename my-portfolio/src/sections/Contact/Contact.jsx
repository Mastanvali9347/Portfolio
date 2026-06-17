import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    emailjs.send(
      "service_bkpnwca",
      "template_6vdavdh",
      formData,
      "Nf8vAIkWRjF6ySFDm"
    ).then(() => {
      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    }).finally(() => setIsSending(false));
  };

  return (
    <section className="py-24 px-6 relative" id="contact">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's <span className="text-gradient">Collaborate</span>
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "patanmastan455@gmail.com", color: "gold" },
                { icon: Phone, label: "Phone", value: "+91 9347820465", color: "blue" },
                { icon: MapPin, label: "Location", value: "Andhra Pradesh, India", color: "orange" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className={`p-4 rounded-2xl bg-${item.color}/10 border border-${item.color}/20 text-${item.color} group-hover:bg-${item.color}/20 transition-all shadow-lg shadow-${item.color}/5`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">{item.label}</div>
                    <div className="text-white/80 group-hover:text-white transition-colors">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 flex gap-4">
              <a href="https://github.com/Mastanvali9347" className="glass p-4 rounded-xl hover:text-gold transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/patan-mastan" className="glass p-4 rounded-xl hover:text-blue transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="glass p-4 rounded-xl hover:text-orange transition-colors">
                <MessageSquare className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass-card p-8 md:p-10 border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Your Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-gold/50 outline-none transition-all placeholder:text-white/10"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    value={formData.name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-blue/50 outline-none transition-all placeholder:text-white/10"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    value={formData.email}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold">Message</label>
                <textarea 
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:border-orange/50 outline-none transition-all placeholder:text-white/10 resize-none"
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  value={formData.message}
                />
              </div>

              <button 
                type="submit"
                disabled={isSending}
                className="w-full btn-primary py-4 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSending ? "Sending Orbital Signal..." : <>Send Message <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
