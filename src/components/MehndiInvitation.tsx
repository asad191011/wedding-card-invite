import { motion } from "motion/react";
import { DancingCouple } from "./DancingCouple";

export function MehndiInvitation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="w-full max-w-md bg-yellow-50 p-8 md:p-12 text-center shadow-2xl border-2 border-orange-200 relative overflow-hidden"
    >
      {/* Rich Floral/Vine Background Pattern - VIBRANT & PLAYFUL */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base Pattern Layer - More visible */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f97316' stroke-width='1'%3E%3Cpath d='M0 40 Q 20 20 40 40 T 80 40' /%3E%3Cpath d='M40 0 Q 60 20 40 40 T 40 80' /%3E%3Ccircle cx='40' cy='40' r='5' fill='%23fbbf24' stroke='none' /%3E%3Cpath d='M10 30 Q 15 25 20 30 T 10 30' fill='%23fdba74' stroke='none' /%3E%3Cpath d='M50 50 Q 55 45 60 50 T 50 50' fill='%23fdba74' stroke='none' /%3E%3Cpath d='M30 60 Q 35 55 40 60 T 30 60' fill='%23fdba74' stroke='none' /%3E%3Cpath d='M60 20 Q 65 15 70 20 T 60 20' fill='%23fdba74' stroke='none' /%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }} 
        />
        
        {/* Vines Layer - New */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 100 Q 25 50 50 75 T 100 25' stroke='%2316a34a' stroke-width='1' fill='none' /%3E%3Cpath d='M100 0 Q 75 50 50 25 T 0 75' stroke='%2316a34a' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px'
          }} 
        />

        {/* Animated Floating Petals Layer - MORE PETALS */}
        <motion.div 
          className="absolute -inset-[50%] opacity-[0.2]"
          animate={{ 
            y: [0, -40, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20 Q 30 10 40 20 T 20 20' fill='%23facc15' stroke='none' /%3E%3Cpath d='M70 60 Q 80 50 90 60 T 70 60' fill='%23fb923c' stroke='none' /%3E%3Cpath d='M40 90 Q 50 80 60 90 T 40 90' fill='%23fb7185' stroke='none' /%3E%3Cpath d='M90 30 Q 100 20 110 30 T 90 30' fill='%234ade80' stroke='none' opacity='0.5' /%3E%3C/svg%3E")`,
            backgroundSize: '120px 120px'
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
            duration: 5, 
            ease: "linear",
            repeatDelay: 1
          }}
        />

        {/* Vibrant Gradient Wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-transparent to-orange-200/30 mix-blend-multiply" />
      </div>

      {/* Decorative corners - Vibrant Orange */}
      <div className="absolute top-4 left-4 w-20 h-20 border-t-4 border-l-4 border-orange-500/40 rounded-tl-3xl" />
      <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-orange-500/40 rounded-tr-3xl" />
      <div className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-orange-500/40 rounded-bl-3xl" />
      <div className="absolute bottom-4 right-4 w-20 h-20 border-b-4 border-r-4 border-orange-500/40 rounded-br-3xl" />

      {/* Inner Border Frame */}
      <div className="absolute inset-7 border-2 border-yellow-500/30 pointer-events-none" />

      <div className="space-y-6 flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-orange-600 mb-2 text-3xl drop-shadow-sm"
        >
          ❦
        </motion.div>

        <motion.p 
          className="text-orange-800 uppercase tracking-[0.25em] text-xs md:text-sm font-serif font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Mehndi Celebration
        </motion.p>

        <div className="py-6">
          <motion.h1 
            className="font-script text-6xl md:text-8xl text-orange-900 leading-none drop-shadow-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Ayesha
            <br />
            <span className="text-3xl md:text-5xl text-yellow-600 font-serif block my-3">&</span>
            Ahsan
          </motion.h1>
        </div>

        <motion.p 
          className="text-orange-900 font-serif text-xl italic font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          Invite you to join the colorful
          <br />
          festivities of their Mehndi
        </motion.p>

        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 my-6 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 2 }}
        />

        <div className="font-serif text-orange-900 space-y-2">
          <p className="text-2xl font-bold tracking-wide">
            Sunday, October 25th, 2026
          </p>
          <p className="text-orange-800 text-lg font-medium">
            at six o'clock in the evening
          </p>
          <div className="mt-6">
            <p className="text-xl font-bold tracking-wide text-orange-950">E-11 Monal Marque</p>
            <p className="text-orange-800">Islamabad, ISB</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-8 pt-4"
        >
          <DancingCouple />
        </motion.div>
      </div>
    </motion.div>
  );
}
