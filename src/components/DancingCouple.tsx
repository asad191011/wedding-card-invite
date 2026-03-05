import { motion } from "motion/react";

export function DancingCouple() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center mt-4">
      {/* Stage / Dance Floor (Pen Design) */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-amber-600/30">
        <defs>
          <pattern id="stagePattern" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="5" height="5" fill="currentColor" opacity="0.2" />
          </pattern>
        </defs>
        
        {/* Stage Platform Base */}
        <path d="M20 140 Q 100 160 180 140 L 180 160 Q 100 180 20 160 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 140 Q 100 160 180 140" fill="url(#stagePattern)" stroke="none" opacity="0.5" />
        
        {/* Stage Front Decoration (Marigolds/Vines) */}
        <path d="M20 160 Q 30 170 40 160 T 60 160 T 80 160 T 100 160 T 120 160 T 140 160 T 160 160 T 180 160" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
        {[...Array(9)].map((_, i) => (
          <circle key={i} cx={30 + i * 17.5} cy={162 + (Math.sin(i) * 2)} r="3" fill="none" stroke="currentColor" strokeWidth="1" />
        ))}

        {/* Backdrop Arch */}
        <path d="M40 140 Q 40 40 100 40 Q 160 40 160 140" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
        {/* Hanging Lights/Flowers on Arch */}
        {[...Array(7)].map((_, i) => (
          <line key={i} x1={50 + i * 16} y1={50 + Math.abs(i-3)*5} x2={50 + i * 16} y2={70 + Math.abs(i-3)*10} stroke="currentColor" strokeWidth="0.5" />
        ))}
        {[...Array(7)].map((_, i) => (
          <circle key={`bulb-${i}`} cx={50 + i * 16} cy={70 + Math.abs(i-3)*10} r="1.5" fill="currentColor" opacity="0.6" />
        ))}
      </svg>

      {/* Dancing Couple (Pen Design) - Detailed */}
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-40 h-40 text-amber-800 relative z-10 -mt-4"
        animate={{ 
          rotate: [0, 1, 0, -1, 0],
          y: [0, -1, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* --- GROOM (Left) --- */}
        <g transform="translate(-2, 0)">
          {/* Head */}
          <circle cx="40" cy="25" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          
          {/* Kameez (Long Shirt) */}
          <path d="M36 30 L 36 55 Q 40 58 44 55 L 44 30" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {/* Placket/Buttons */}
          <line x1="40" y1="30" x2="40" y2="40" stroke="currentColor" strokeWidth="0.8" />
          <line x1="39" y1="30" x2="41" y2="30" stroke="currentColor" strokeWidth="0.8" />
          
          {/* Shalwar (Baggy Pants) */}
          <path d="M36 55 L 34 75 L 38 75 L 40 62 L 42 75 L 46 75 L 44 55" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {/* Folds */}
          <path d="M35 65 Q 34 68 35 70" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M45 65 Q 46 68 45 70" fill="none" stroke="currentColor" strokeWidth="0.5" />

          {/* Arms */}
          {/* Left Arm (Outer) */}
          <path d="M36 32 Q 30 38 32 45" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {/* Right Arm (Holding Bride) */}
          <path d="M44 32 Q 50 36 52 34" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </g>

        {/* --- BRIDE (Right) --- */}
        <g transform="translate(2, 0)">
          {/* Head */}
          <circle cx="60" cy="26" r="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {/* Bun */}
          <circle cx="64" cy="24" r="1.5" fill="currentColor" opacity="0.5" />

          {/* Choli (Top) */}
          <path d="M56 32 L 56 42 L 64 42 L 64 32" fill="none" stroke="currentColor" strokeWidth="1.2" />
          
          {/* Lehenga (Skirt) */}
          <path d="M56 42 L 52 75 Q 60 80 68 75 L 64 42" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {/* Pleats/Details */}
          <path d="M56 42 Q 54 60 53 75" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <path d="M60 42 Q 60 60 60 77" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <path d="M64 42 Q 66 60 67 75" fill="none" stroke="currentColor" strokeWidth="0.6" />
          {/* Hem Embroidery */}
          <path d="M53 73 Q 60 78 67 73" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1 1" />

          {/* Dupatta (Scarf) */}
          <path d="M64 28 Q 72 32 70 50 Q 68 60 72 65" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 1" />

          {/* Arms */}
          {/* Left Arm (Holding Groom) */}
          <path d="M56 34 Q 50 38 48 34" fill="none" stroke="currentColor" strokeWidth="1.2" />
          {/* Right Arm (Dancing) */}
          <path d="M64 34 Q 70 30 72 24" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </g>

      </motion.svg>

      {/* Floating Petals - Increased Count & Vibrancy */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`yellow-${i}`}
          className="absolute w-2 h-2 rounded-full bg-yellow-400"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: Math.cos(i * (Math.PI / 6)) * 80,
            y: Math.sin(i * (Math.PI / 6)) * 60 - 20,
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 180]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`orange-${i}`}
          className="absolute w-2.5 h-2.5 rounded-full bg-orange-500"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: Math.cos(i * (Math.PI / 6) + 0.5) * 90,
            y: Math.sin(i * (Math.PI / 6) + 0.5) * 70 - 20,
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, -180]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`pink-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-rose-500"
          style={{
            top: "50%",
            left: "50%",
          }}
          animate={{
            x: Math.cos(i * (Math.PI / 4) + 1) * 70,
            y: Math.sin(i * (Math.PI / 4) + 1) * 50 - 10,
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 90]
          }}
          transition={{
            duration: 3.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
