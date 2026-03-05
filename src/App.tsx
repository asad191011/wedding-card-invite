import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Envelope } from "./components/Envelope";
import { Invitation } from "./components/Invitation";
import { MehndiInvitation } from "./components/MehndiInvitation";

interface CardSectionProps {
  colors: {
    flap: string;
    body: string;
    leftFlap: string;
    rightFlap: string;
    inner: string;
    seal: string;
    sealBorder: string;
    sealInner: string;
  };
  InvitationComponent: React.ComponentType;
  title?: string;
}

function CardSection({ colors, InvitationComponent, title }: CardSectionProps) {
  const [status, setStatus] = useState<'sealed' | 'cracking' | 'opening' | 'open'>('sealed');

  const handleSealClick = () => {
    setStatus('cracking');
    setTimeout(() => {
      setStatus('opening');
    }, 600);
  };

  useEffect(() => {
    if (status === 'opening') {
      const timer = setTimeout(() => {
        setStatus('open');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="w-full flex flex-col items-center justify-center py-12">
      {title && (
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif text-stone-500 mb-12 tracking-[0.2em] uppercase border-b border-stone-300 pb-4"
        >
          {title}
        </motion.h2>
      )}
      <AnimatePresence mode="wait">
        {status !== 'open' && (
          <Envelope 
            status={status} 
            onClick={handleSealClick} 
            colors={colors} 
          />
        )}

        {status === 'open' && (
          <motion.div
            key="invitation"
            className="relative z-10 w-full flex justify-center px-4"
          >
            <InvitationComponent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const weddingColors = {
    body: '#E8E4D9',
    flap: '#E3DFD2',
    leftFlap: '#DFDBD0',
    rightFlap: '#DFDBD0',
    inner: '#f5f5f4',
    seal: '#8B1D1D',
    sealBorder: '#681212',
    sealInner: '#7a1818'
  };

  const mehndiColors = {
    body: '#FEF9C3', // Yellow-100
    flap: '#FEF08A', // Yellow-200
    leftFlap: '#FDE047', // Yellow-300
    rightFlap: '#FDE047', // Yellow-300
    inner: '#FFFBEB', // Yellow-50
    seal: '#F97316', // Orange-500
    sealBorder: '#C2410C', // Orange-700
    sealInner: '#EA580C' // Orange-600
  };

  return (
    <div className="min-h-screen bg-stone-200 flex flex-col items-center py-10 overflow-x-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-30 pointer-events-none fixed" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a8a29e' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      <div className="w-full max-w-4xl space-y-20 z-10">
        <CardSection 
          title="The Wedding" 
          colors={weddingColors} 
          InvitationComponent={Invitation} 
        />
        
        <CardSection 
          title="The Mehndi" 
          colors={mehndiColors} 
          InvitationComponent={MehndiInvitation} 
        />
      </div>
      
      <footer className="py-10 text-stone-500 font-serif text-sm opacity-60">
        <p>With Love, Ayesha & Ahsan</p>
      </footer>
    </div>
  );
}
