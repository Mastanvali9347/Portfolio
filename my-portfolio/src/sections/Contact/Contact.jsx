import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_bkpnwca",
        "template_6vdavdh",
        formData,
        "Nf8vAIkWRjF6ySFDm"
      )
      .then(() => {
        alert("Message sent successfully 🚀");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed to send message");
      })
      .finally(() => setIsSending(false));
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "patanmastan455@gmail.com",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      text: "text-yellow-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9347820465",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      text: "text-orange-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <p className="text-yellow-400 uppercase tracking-[4px] text-sm mb-4">
                Contact Me
              </p>

              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
                  Collaborate
                </span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed">
                Have a project in mind or want to work together?
                I'm always open to discussing exciting opportunities,
                freelance projects, and innovative ideas.
              </p>
            </div>

            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${item.bg} ${item.border}`}
                  >
                    <item.icon
                      className={`w-6 h-6 ${item.text}`}
                    />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
                      {item.label}
                    </p>

                    <p className="text-white/80">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Mastanvali9347"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/patan-mastan"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 hover:text-black transition-all duration-300"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="mailto:patanmastan455@gmail.com"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                <MessageSquare size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full" />

            <form
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-yellow-500/50"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-cyan-500/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-orange-500/50 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 text-black font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all disabled:opacity-50"
              >
                {isSending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}