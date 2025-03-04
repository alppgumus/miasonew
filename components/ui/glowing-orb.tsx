'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlowingOrbProps {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}

export const GlowingOrb = ({ children, className, containerClassName }: GlowingOrbProps) => {
  return (
    <div className={cn("relative h-full w-full bg-[#050806]", containerClassName)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          {/* Ana küre */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-full"
            style={{
              filter: 'blur(8px) brightness(0.8)',
              animation: 'pulse 4s ease-in-out infinite alternate, hue-rotate 6s linear infinite',
              background: 'linear-gradient(45deg, #11fb96, #4f46e5, #11fb96)',
              backgroundSize: '300% 300%'
            }}
          />
          
          {/* İç parlaklık */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 rounded-full"
            style={{
              filter: 'blur(20px) brightness(0.8)',
              animation: 'glow 6s ease-in-out infinite alternate, hue-rotate 8s linear infinite',
              background: 'linear-gradient(225deg, #11fb96, #4f46e5, #11fb96)',
              backgroundSize: '300% 300%'
            }}
          />
          
          {/* Dış parlaklık */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 rounded-full"
            style={{
              filter: 'blur(40px) brightness(0.7)',
              animation: 'float 8s ease-in-out infinite alternate, hue-rotate 10s linear infinite',
              background: 'linear-gradient(135deg, #11fb96, #4f46e5, #11fb96)',
              backgroundSize: '300% 300%'
            }}
          />
        </div>
      </div>

      {/* İçerik */}
      <div className={cn("relative z-10", className)}>
        {children}
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.05) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes glow {
          0% {
            opacity: 0.4;
            transform: scale(1) translate(0px, 0px);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05) translate(5px, -5px);
          }
          100% {
            opacity: 0.4;
            transform: scale(1) translate(0px, 0px);
          }
        }

        @keyframes float {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          50% {
            transform: scale(1.1) translate(-10px, 10px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }

        @keyframes hue-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
} 