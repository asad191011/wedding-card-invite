import { motion } from "motion/react";

interface WaxSealProps {
  onClick: () => void;
  isCracking: boolean;
  color?: string;
  borderColor?: string;
  innerColor?: string;
}

export function WaxSeal({ 
  onClick, 
  isCracking, 
  color = "#8B1D1D", 
  borderColor = "#681212",
  innerColor = "#7a1818"
}: WaxSealProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative z-50 cursor-pointer group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        shake: isCracking ? [0, -2, 2, -2, 2, 0] : 0
      }}
      transition={{ delay: 0.5 }}
    >
      {/* Irregular wax shape with texture */}
      <div 
        className="w-28 h-28 rounded-full flex items-center justify-center shadow-xl relative overflow-hidden border-4"
        style={{ backgroundColor: color, borderColor: borderColor }}
      >
        
        {/* Texture Filter */}
        <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
                <feFuncR type="linear" slope="0.5" />
                <feFuncG type="linear" slope="0.5" />
                <feFuncB type="linear" slope="0.5" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Inner ring (Stamped impression) */}
        <div 
          className="w-20 h-20 border-[3px] rounded-full absolute flex items-center justify-center shadow-inner"
          style={{ borderColor: `${borderColor}99`, backgroundColor: innerColor }}
        >
            {/* Floral/Decorative Stamp Design */}
            <svg viewBox="0 0 100 100" className="w-14 h-14 opacity-60" style={{ fill: "#4a0b0b" }}>
                <path d="M50 20 C50 20 60 35 70 35 C80 35 85 25 85 25 C85 25 80 45 90 50 C100 55 95 65 95 65 C95 65 75 60 70 70 C65 80 75 90 75 90 C75 90 60 80 50 85 C40 80 25 90 25 90 C25 90 35 80 30 70 C25 60 5 65 5 65 C5 65 0 55 10 50 C20 45 15 25 15 25 C15 25 20 35 30 35 C40 35 50 20 50 20 Z" />
                <circle cx="50" cy="50" r="15" fill="none" stroke="#4a0b0b" strokeWidth="2" />
                <text x="50" y="58" fontSize="24" fontFamily="serif" textAnchor="middle" fill="#4a0b0b" fontWeight="bold">A&A</text>
            </svg>
        </div>
        
        {/* Crack Lines - Visible only when cracking */}
        {isCracking && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            <motion.path 
              d="M50 20 L52 35 L48 45 L50 55" 
              stroke="#2a0505" 
              strokeWidth="1.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            />
            <motion.path 
              d="M20 50 L35 48 L45 52 L55 50" 
              stroke="#2a0505" 
              strokeWidth="1.5" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            />
             <motion.path 
              d="M80 50 L65 52 L55 48" 
              stroke="#2a0505" 
              strokeWidth="1" 
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.2, delay: 0.15 }}
            />
          </svg>
        )}
        
        {/* Shine effect */}
        <div className="absolute top-4 left-6 w-8 h-4 bg-white/10 rounded-full blur-md rotate-[-20deg]" />
        <div className="absolute bottom-6 right-6 w-4 h-2 bg-white/5 rounded-full blur-sm rotate-[-20deg]" />
      </div>
      
      {/* Melted drips - more organic */}
      <svg className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-8 -z-10 filter drop-shadow-md" style={{ color: color }} viewBox="0 0 100 50">
         <path d="M20 0 Q30 20 40 10 T60 25 T80 5" fill="currentColor" />
         <circle cx="30" cy="15" r="5" fill="currentColor" />
         <circle cx="65" cy="20" r="7" fill="currentColor" />
      </svg>
    </motion.button>
  );
}
