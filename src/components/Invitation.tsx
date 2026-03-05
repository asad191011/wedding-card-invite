import { motion } from "motion/react";
import { RotatingCake } from "./RotatingCake";

export function Invitation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="w-full max-w-md bg-[#FDFBF7] p-8 md:p-12 text-center shadow-2xl border border-stone-200 relative overflow-hidden"
    >
      {/* Rich Floral/Vine Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base Pattern Layer */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2357534e' stroke-width='0.5'%3E%3Cpath d='M0 40 Q 20 20 40 40 T 80 40' /%3E%3Cpath d='M40 0 Q 60 20 40 40 T 40 80' /%3E%3Cpath d='M10 30 Q 15 25 20 30 T 10 30' fill='%2378716c' fill-opacity='0.2' stroke='none' /%3E%3Cpath d='M50 50 Q 55 45 60 50 T 50 50' fill='%2378716c' fill-opacity='0.2' stroke='none' /%3E%3Cpath d='M30 60 Q 35 55 40 60 T 30 60' fill='%2378716c' fill-opacity='0.2' stroke='none' /%3E%3Cpath d='M60 20 Q 65 15 70 20 T 60 20' fill='%2378716c' fill-opacity='0.2' stroke='none' /%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }} 
        />
        
        {/* Animated Floating Petals Layer */}
        <motion.div 
          className="absolute -inset-[50%] opacity-[0.06]"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 Q 30 10 40 20 T 20 20' fill='%23a8a29e' stroke='none' /%3E%3Cpath d='M70 60 Q 80 50 90 60 T 70 60' fill='%23a8a29e' stroke='none' /%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }} 
        />

        {/* Shimmer Effect Overlay */}
        <motion.div 
          className="absolute inset-0 z-0 pointer-events-none mix-blend-soft-light"
          style={{
            background: "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 55%, transparent 60%)",
            backgroundSize: "200% 100%"
          }}
          animate={{ backgroundPosition: ["150% 0", "-50% 0"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "linear",
            repeatDelay: 1
          }}
        />

        {/* Fine Paper Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`
          }} 
        />

        {/* Watercolor Wash Overlay for texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-stone-100/30 mix-blend-multiply" />
      </div>

      {/* Decorative corners - Refined & Darker for visibility */}
      <div className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-amber-400/40 rounded-tl-3xl" />
      <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-amber-400/40 rounded-tr-3xl" />
      <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-amber-400/40 rounded-bl-3xl" />
      <div className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-amber-400/40 rounded-br-3xl" />

      {/* Inner Border Frame */}
      <div className="absolute inset-7 border border-stone-300/50 pointer-events-none" />

      <div className="space-y-6 flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-amber-800/60 mb-2 text-2xl"
        >
          ❦
        </motion.div>

        <motion.p 
          className="text-stone-600 uppercase tracking-[0.25em] text-xs md:text-sm font-serif font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Together with their families
        </motion.p>

        <div className="py-6">
          <motion.h1 
            className="font-script text-6xl md:text-8xl text-stone-800 leading-none drop-shadow-sm"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Ayesha
            <br />
            <span className="text-3xl md:text-5xl text-amber-700/60 font-serif block my-3">&</span>
            Ahsan
          </motion.h1>
        </div>

        <motion.p 
          className="text-stone-700 font-serif text-xl italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Request the honor of your presence
          <br />
          at their wedding celebration
        </motion.p>

        <motion.div 
          className="w-24 h-0.5 bg-amber-300/80 my-6 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2 }}
        />

        <div className="font-serif text-stone-800 space-y-2">
          <p className="text-2xl font-bold text-stone-900 tracking-wide">
            Monday, October 26th, 2026
          </p>
          <p className="text-stone-600 text-lg">
            at seven o'clock in the evening
          </p>
          <div className="mt-6">
            <p className="text-xl font-semibold tracking-wide text-stone-900">E-11 Monal Marque</p>
            <p className="text-stone-600">Islamabad, ISB</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-8 pt-4"
        >
          <RotatingCake />
        </motion.div>
      </div>
    </motion.div>
  );
}
