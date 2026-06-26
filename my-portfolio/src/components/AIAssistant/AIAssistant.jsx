import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, User, Code, Mail } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am Patan's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simple bot logic
    setTimeout(() => {
      let botResponse = "I'm not sure about that, but Patan is definitely an expert in React and Python! You should check his projects.";

      const lowerInput = input.toLowerCase();
      if (lowerInput.includes("who") || lowerInput.includes("about")) {
        botResponse = "Patan Mastanvali is a Full Stack Developer specializing in React and Python. He's graduating in 2025 from Bharath University.";
      } else if (lowerInput.includes("skill") || lowerInput.includes("tech")) {
        botResponse = "His tech stack includes React, JavaScript, Python, FastAPI, Node.js, and MongoDB. He also loves working with Three.js and Framer Motion!";
      } else if (lowerInput.includes("project")) {
        botResponse = "He has built some amazing projects like a Multiplayer Housie game, an AI DSA Instructor, and MalwareScope Analyzer.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
        botResponse = "You can reach him via email at patanmastan455@gmail.com or through the contact section below.";
      }

      setMessages(prev => [...prev, { role: "assistant", content: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-1000">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 w-87.5 h-125 glass-card flex flex-col border-gold/20 shadow-2xl shadow-gold/10"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gold/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                  <Bot className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-bold">Patan AI</div>
                  <div className="flex items-center gap-1 text-[10px] text-gold animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white/50" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((ms, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: ms.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${ms.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${ms.role === "user"
                      ? "bg-gold text-black rounded-tr-none font-medium"
                      : "bg-white/5 border border-white/10 text-white/80 rounded-tl-none font-light"
                    }`}>
                    {ms.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-white/10 space-y-3">
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: User, label: "Who are you?", cmd: "Who is Patan?" },
                  { icon: Code, label: "Skills?", cmd: "What are your skills?" },
                  { icon: Mail, label: "Contact", cmd: "How to contact you?" },
                  { icon: Sparkles, label: "Projects?", cmd: "What are your projects?" },
                ].map((act, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setInput(act.cmd);
                      // Auto send?
                    }}
                    className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/40 hover:text-gold hover:border-gold/30 transition-all flex items-center gap-1"
                  >
                    <act.icon className="w-3 h-3" /> {act.label}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-gold/50 transition-colors pr-12 outline-none"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-2 top-1.5 p-2 bg-gold text-black rounded-lg hover:scale-105 transition-transform"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gold text-black shadow-2xl shadow-gold/20 flex items-center justify-center relative group"
      >
        <div className="absolute inset-0 rounded-full border-4 border-gold/20 group-hover:scale-125 transition-transform duration-500" />
        <MessageSquare className={`w-8 h-8 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue rounded-full border-2 border-black animate-bounce" />
      </motion.button>
    </div>
  );
}
