import { motion, AnimatePresence } from "motion/react";
import { WaxSeal } from "./WaxSeal";

interface EnvelopeColors {
  flap: string;
  body: string;
  leftFlap: string;
  rightFlap: string;
  inner: string;
  seal: string;
  sealBorder: string;
  sealInner: string;
}

interface EnvelopeProps {
  status: 'sealed' | 'cracking' | 'opening' | 'open';
  onClick: () => void;
  colors: EnvelopeColors;
}

export function Envelope({ status, onClick, colors }: EnvelopeProps) {
  return (
    <motion.div
      key="envelope"
      className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center mx-4"
      exit={{ opacity: 0, scale: 1.1, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Envelope Body */}
      <div className="absolute inset-0 shadow-2xl rounded-lg overflow-hidden" style={{ backgroundColor: colors.body }}>
        {/* Linen Texture Overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none z-0" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.05'/%3E%3C/svg%3E")` }} 
        />
        
        {/* Envelope Flaps (Closed State) */}
        
        {/* Bottom Flap */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom transform skew-x-12 z-10" 
             style={{ backgroundColor: colors.body, clipPath: 'polygon(0 100%, 50% 0, 100% 100%)', filter: 'brightness(0.9)' }}>
          <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.08'/%3E%3C/svg%3E")` }} 
          />
        </div>
        
        {/* Left Flap */}
        <div className="absolute top-0 bottom-0 left-0 w-1/2 z-20" 
             style={{ backgroundColor: colors.leftFlap, clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}>
          <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.08'/%3E%3C/svg%3E")` }} 
          />
        </div>
        
        {/* Right Flap */}
        <div className="absolute top-0 bottom-0 right-0 w-1/2 z-20" 
             style={{ backgroundColor: colors.rightFlap, clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}>
          <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
               style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0z' fill='none'/%3E%3Cpath d='M0 0h4v1H0zM0 2h4v1H0z' fill='%23000000' fill-opacity='0.08'/%3E%3C/svg%3E")` }} 
          />
        </div>
        
        {/* Top Flap (The one that opens) */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-1/2 z-30 shadow-md origin-top"
          style={{ backgroundColor: colors.flap, clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
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
        <div className="absolute inset-0 z-0 flex items-center justify-center" style={{ backgroundColor: colors.inner }}>
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
            <WaxSeal 
              onClick={onClick} 
              isCracking={status === 'cracking'} 
              color={colors.seal}
              borderColor={colors.sealBorder}
              innerColor={colors.sealInner}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
