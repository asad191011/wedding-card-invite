import { motion } from "motion/react";

export function RotatingCake() {
  return (
    <div className="relative w-64 h-80 flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        whileHover="hover"
        className="relative w-56 h-72"
      >
        {/* New Line-art Wedding Cake Design */}
        <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-lg" style={{ overflow: 'visible' }}>
          <defs>
             <filter id="sketchy">
                <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
             </filter>
          </defs>
          
          <g stroke="#2c2c2c" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#sketchy)">
            
            {/* --- Topper: Bride & Groom (New Style) --- */}
            <g transform="translate(61, 10) scale(1.1)">
               {/* Groom - Detailed Suit */}
               <path d="M10 20 Q10 10 20 10 Q30 10 30 20 L30 45 L20 55 L10 45 Z" /> {/* Jacket Body */}
               <path d="M13 45 L13 75" /> {/* Left Leg */}
               <path d="M27 45 L27 75" /> {/* Right Leg */}
               <path d="M10 75 L16 75" /> {/* Left Shoe */}
               <path d="M24 75 L30 75" /> {/* Right Shoe */}
               
               {/* Shirt & Tie */}
               <path d="M20 10 L20 20" strokeWidth="0.5" /> {/* Neck */}
               <path d="M20 15 L17 22 L20 25 L23 22 Z" fill="#2c2c2c" stroke="none" /> {/* Tie Knot & Body */}
               <path d="M20 25 L20 40" strokeWidth="0.5" /> {/* Shirt Center */}
               
               {/* Buttons */}
               <circle cx="24" cy="30" r="0.8" fill="#2c2c2c" stroke="none" />
               <circle cx="24" cy="35" r="0.8" fill="#2c2c2c" stroke="none" />
               <circle cx="24" cy="40" r="0.8" fill="#2c2c2c" stroke="none" />

               <path d="M10 20 L5 30" /> {/* Left Arm */}
               <path d="M30 20 L35 30" /> {/* Right Arm */}
               <circle cx="20" cy="6" r="5" /> {/* Head */}
               
               {/* Bride - Detailed Dress */}
               <path d="M42 20 Q50 20 58 30 L62 80 L38 80 L42 30" /> {/* Dress Body */}
               
               {/* Dress Texture/Lace */}
               <path d="M41 40 Q50 45 59 40" strokeWidth="0.5" strokeDasharray="1 1" />
               <path d="M40 55 Q50 60 60 55" strokeWidth="0.5" strokeDasharray="1 1" />
               <path d="M39 70 Q50 75 61 70" strokeWidth="0.5" strokeDasharray="1 1" />
               <circle cx="50" cy="35" r="0.5" fill="#2c2c2c" stroke="none" />
               <circle cx="45" cy="48" r="0.5" fill="#2c2c2c" stroke="none" />
               <circle cx="55" cy="48" r="0.5" fill="#2c2c2c" stroke="none" />
               <circle cx="50" cy="63" r="0.5" fill="#2c2c2c" stroke="none" />

               <circle cx="50" cy="12" r="5" /> {/* Head */}
               <path d="M50 12 Q60 15 60 25" /> {/* Veil */}
               <path d="M42 20 L37 30" /> {/* Left Arm */}
               <path d="M58 20 L63 30" /> {/* Right Arm */}
               
               {/* Holding Hands */}
               <path d="M35 30 Q36 32 37 30" strokeWidth="1" />
            </g>

            {/* --- Top Tier (Floral Cascade) --- */}
            <g transform="translate(60, 90)">
               <ellipse cx="40" cy="10" rx="35" ry="8" />
               <path d="M5 10 L5 50 Q40 60 75 50 L75 10" />
               
               {/* Intricate Floral Cascade */}
               <path d="M20 10 Q15 20 25 30 T30 45" strokeWidth="0.8" />
               <path d="M60 10 Q65 20 55 30 T50 45" strokeWidth="0.8" />
               
               <circle cx="25" cy="30" r="3" strokeWidth="0.8" />
               <circle cx="30" cy="45" r="4" strokeWidth="0.8" />
               <circle cx="55" cy="30" r="3" strokeWidth="0.8" />
               <circle cx="50" cy="45" r="4" strokeWidth="0.8" />
               
               {/* Leaves */}
               <path d="M25 30 Q20 35 22 40" strokeWidth="0.5" />
               <path d="M55 30 Q60 35 58 40" strokeWidth="0.5" />
            </g>

            {/* --- Middle Tier (Swag Drapes) --- */}
            <g transform="translate(40, 140)">
               <ellipse cx="60" cy="10" rx="50" ry="10" />
               <path d="M10 10 L10 60 Q60 75 110 60 L110 10" />
               
               {/* Drapes with Vine Detail */}
               <path d="M10 15 Q35 45 60 15 Q85 45 110 15" strokeWidth="1" />
               <path d="M10 25 Q35 55 60 25 Q85 55 110 25" strokeWidth="0.8" strokeDasharray="2 1" />
               
               {/* Hanging Vines */}
               <path d="M35 30 Q35 40 30 45" strokeWidth="0.5" />
               <path d="M85 30 Q85 40 90 45" strokeWidth="0.5" />
               
               {/* Flowers at points */}
               <circle cx="10" cy="15" r="3" fill="none" stroke="#2c2c2c" />
               <circle cx="60" cy="15" r="4" fill="none" stroke="#2c2c2c" />
               <circle cx="110" cy="15" r="3" fill="none" stroke="#2c2c2c" />
            </g>

            {/* --- Bottom Tier (Textured) --- */}
            <g transform="translate(20, 200)">
               <ellipse cx="80" cy="10" rx="70" ry="12" />
               <path d="M10 10 L10 70 Q80 90 150 70 L150 10" />
               
               {/* Base Vines */}
               <path d="M10 60 Q40 50 80 60 T150 60" strokeWidth="0.8" />
               <path d="M20 60 Q25 50 30 60" strokeWidth="0.5" />
               <path d="M50 60 Q55 50 60 60" strokeWidth="0.5" />
               <path d="M80 60 Q85 50 90 60" strokeWidth="0.5" />
               <path d="M110 60 Q115 50 120 60" strokeWidth="0.5" />
               <path d="M140 60 Q145 50 150 60" strokeWidth="0.5" />
               
               {/* Vertical Texture Lines (Refined) */}
               <path d="M20 15 L20 55" strokeWidth="0.5" strokeDasharray="0.5 4" />
               <path d="M40 18 L40 55" strokeWidth="0.5" strokeDasharray="0.5 4" />
               <path d="M60 20 L60 55" strokeWidth="0.5" strokeDasharray="0.5 4" />
               <path d="M80 21 L80 55" strokeWidth="0.5" strokeDasharray="0.5 4" />
               <path d="M100 20 L100 55" strokeWidth="0.5" strokeDasharray="0.5 4" />
               <path d="M120 18 L120 55" strokeWidth="0.5" strokeDasharray="0.5 4" />
               <path d="M140 15 L140 55" strokeWidth="0.5" strokeDasharray="0.5 4" />
               
               {/* Base Plate */}
               <ellipse cx="80" cy="75" rx="90" ry="15" strokeWidth="1" />
            </g>

          </g>

          {/* Sparkles on Hover */}
          <motion.g 
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 1 }
            }}
          >
             <Sparkle cx="100" cy="50" delay={0} />
             <Sparkle cx="40" cy="120" delay={0.1} />
             <Sparkle cx="160" cy="180" delay={0.2} />
             <Sparkle cx="80" cy="250" delay={0.3} />
             <Sparkle cx="130" cy="100" delay={0.15} />
          </motion.g>
        </svg>
      </motion.div>
      
      {/* Floor reflection/shadow */}
      <div className="absolute bottom-0 w-48 h-6 bg-[#C08A88]/20 blur-xl rounded-[100%]" />
    </div>
  );
}

function Sparkle({ cx, cy, delay }: { cx: string, cy: string, delay: number }) {
  return (
    <motion.path
      d={`M0 -6 L2 -2 L6 0 L2 2 L0 6 L-2 2 L-6 0 L-2 -2 Z`}
      fill="#F59E0B" // Amber-500
      stroke="none"
      initial={{ scale: 0, opacity: 0, x: parseInt(cx), y: parseInt(cy) }}
      variants={{
        hover: { 
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          rotate: [0, 45, 90],
          transition: { 
            duration: 1.5, 
            repeat: Infinity, 
            delay: delay,
            ease: "easeInOut"
          } 
        }
      }}
    />
  );
}
