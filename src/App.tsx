import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WaxSeal } from "./components/WaxSeal";
import { Invitation } from "./components/Invitation";

export default function App() {
  const [status, setStatus] = useState<'sealed' | 'cracking' | 'opening' | 'open'>('sealed');

  const handleSealClick = () => {
    setStatus('cracking');
    // Delay for crack animation before opening
    setTimeout(() => {
      setStatus('opening');
    }, 600);
  };

  useEffect(() => {
    if (status === 'opening') {
      const timer = setTimeout(() => {
        setStatus('open');
      }, 1500); // Wait for flap animation
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-stone-200 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a8a29e' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <AnimatePresence mode="wait">
        {status !== 'open' && (
          <motion.div
            key="envelope"
            className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center mx-4"
            exit={{ opacity: 0, scale: 1.1, y: 50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Envelope Body */}
            <div className="absolute inset-0 bg-[#E8E4D9] shadow-2xl rounded-lg overflow-hidden">
              {/* Linen Texture Overlay */}
              <div className="absolute inset-0 opacity-40 pointer-events-none z-0" 
                   style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.05'/%3E%3C/svg%3E")` }} 
              />
              
              {/* Envelope Flaps (Closed State) */}
              
              {/* Bottom Flap */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#D6D2C4] origin-bottom transform skew-x-12 z-10" 
                   style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}>
                <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.08'/%3E%3C/svg%3E")` }} 
                />
              </div>
              
              {/* Left Flap */}
              <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#DFDBD0] z-20" 
                   style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}>
                <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.08'/%3E%3C/svg%3E")` }} 
                />
              </div>
              
              {/* Right Flap */}
              <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#DFDBD0] z-20" 
                   style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}>
                <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.08'/%3E%3C/svg%3E")` }} 
                />
              </div>
              
              {/* Top Flap (The one that opens) */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1/2 bg-[#E3DFD2] z-30 shadow-md origin-top"
                style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
                animate={status === 'opening' ? "open" : "closed"}
                variants={{
                  closed: { rotateX: 0, y: 0, scale: 1, zIndex: 30 },
                  open: { 
                    rotateX: [0, -25, 180], // Lift more (-25) then flip open (180)
                    y: [0, -5, 0], // Slight lift up
                    scale: [1, 1.02, 1], // Subtle stretch
                    zIndex: 0,
                    transition: { 
                      duration: 1.4, 
                      times: [0, 0.3, 1], // Timing for the keyframes
                      ease: "easeInOut" 
                    }
                  }
                }}
              >
                <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
                     style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.08'/%3E%3C/svg%3E")` }} 
                />
              </motion.div>
              
              {/* Inner lining (visible when open) */}
              <div className="absolute inset-0 bg-stone-100 z-0 flex items-center justify-center">
                 <div className="w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900 to-transparent" />
              </div>
            </div>

            {/* Wax Seal - Centered on the flap intersection */}
            <AnimatePresence>
              {(status === 'sealed' || status === 'cracking') && (
                <motion.div 
                  className="absolute z-40"
                  exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                  transition={{ duration: 0.3 }}
                >
                  <WaxSeal onClick={handleSealClick} isCracking={status === 'cracking'} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {status === 'open' && (
          <motion.div
            key="invitation"
            className="relative z-10 w-full flex justify-center"
          >
            <Invitation />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
