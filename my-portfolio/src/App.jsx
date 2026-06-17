import { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Background3D from "./components/Background3D/Background3D";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import { ThemeProvider } from "./context/ThemeContext";
import { PopupProvider } from "./context/PopupContext";
import { useLenis } from "./hooks/useLenis";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useLenis();

  return (
    <ThemeProvider>
      <PopupProvider>
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
          ) : (
            <>
              <CustomCursor />
              <Background3D />
              <Navbar />

              <main className="relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Routes location={location}>
                      <Route path="/" element={<Home />} />
                    </Routes>
                  </motion.div>
                </AnimatePresence>
              </main>

              <Footer />
            </>
          )}
        </AnimatePresence>
      </PopupProvider>
    </ThemeProvider>
  );
}