"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const myths = [
  {
    id: 1,
    color: "#B5345A",
    myth: "L\u2019anciennet\u00e9 est obligatoire pour acc\u00e9der aux activit\u00e9s du CSE.",
    reality:
      "La Cour de cassation interdit toute discrimination bas\u00e9e sur l\u2019anciennet\u00e9 pour l\u2019acc\u00e8s aux ASC.",
    label: "Mythe n\u00b01",
  },
  {
    id: 2,
    color: "#78B42B",
    myth: "L\u2019employeur d\u00e9cide seul de l\u2019ordre du jour.",
    reality:
      "L\u2019ordre du jour est le fruit d\u2019une co-\u00e9laboration obligatoire entre le Pr\u00e9sident et le Secr\u00e9taire.",
    label: "Mythe n\u00b02",
  },
  {
    id: 3,
    color: "#2D2D2D",
    myth: "Le budget de fonctionnement peut financer les cadeaux de No\u00ebl.",
    reality:
      "Le budget de fonctionnement est strictement r\u00e9serv\u00e9 \u00e0 l\u2019exercice des missions \u00e9conomiques.",
    label: "Mythe n\u00b03",
  },
]

const particles = [
  { x: "8%", y: "15%", size: 6, color: "#B5345A", delay: 0 },
  { x: "92%", y: "20%", size: 4, color: "#78B42B", delay: 0.5 },
  { x: "18%", y: "80%", size: 5, color: "#2D2D2D", delay: 1.2 },
  { x: "85%", y: "75%", size: 7, color: "#78B42B", delay: 0.8 },
  { x: "50%", y: "8%", size: 4, color: "#B5345A", delay: 1.5 },
  { x: "75%", y: "50%", size: 5, color: "#2D2D2D", delay: 0.3 },
  { x: "25%", y: "45%", size: 6, color: "#78B42B", delay: 1.0 },
  { x: "60%", y: "88%", size: 4, color: "#B5345A", delay: 0.6 },
  { x: "40%", y: "25%", size: 3, color: "#2D2D2D", delay: 1.8 },
  { x: "5%", y: "55%", size: 5, color: "#78B42B", delay: 0.2 },
  { x: "95%", y: "45%", size: 3, color: "#B5345A", delay: 1.4 },
  { x: "35%", y: "70%", size: 4, color: "#2D2D2D", delay: 0.9 },
]

// Vertical offsets for asymmetric look
const offsets = ["md:translate-y-6", "md:-translate-y-8", "md:translate-y-14"]

function MythCircle({
  myth,
  index,
}: {
  myth: (typeof myths)[0]
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`flex justify-center ${offsets[index]}`}
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
    >
      <motion.div
        className="relative cursor-pointer select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute -inset-3 rounded-full pointer-events-none"
          animate={{
            boxShadow: isHovered
              ? `0 0 50px 12px ${myth.color}25, 0 0 100px 24px ${myth.color}10`
              : "0 0 0px 0px transparent",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Main circle */}
        <motion.div
          className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full flex flex-col items-center justify-center p-8 text-center overflow-hidden"
          animate={{
            backgroundColor: isHovered ? myth.color : "#FFFFFF",
            borderColor: myth.color,
          }}
          style={{
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: myth.color,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {/* Content */}
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.div
                key="myth-state"
                className="flex flex-col items-center gap-3 px-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: myth.color }}
                >
                  {myth.label}
                </span>
                <p className="font-serif text-sm sm:text-base leading-snug text-foreground">
                  {"\u00AB\u00A0"}{myth.myth}{"\u00A0\u00BB"}
                </p>
                <div className="flex items-center gap-1.5 mt-1 opacity-40">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: myth.color }}
                  />
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Survolez
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="reality-state"
                className="flex flex-col items-center gap-3 px-3"
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-sm sm:text-base font-black uppercase tracking-widest text-white">
                  {"C\u2019EST FAUX"}
                </span>
                <div className="w-8 h-0.5 bg-white/40 rounded-full" />
                <p className="text-xs sm:text-sm leading-relaxed text-white/90">
                  {myth.reality}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export function IdeesRecues() {
  return (
    <section id="idees-recues" className="relative py-14 lg:py-20 overflow-hidden">
      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -12, 0, 8, 0],
            x: [0, 6, 0, -6, 0],
            opacity: [0.1, 0.25, 0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6 + i * 0.3,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-[#78B42B] font-semibold tracking-wide uppercase mb-3">
            {"D\u00e9cryptage juridique"}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            {"Mythes vs R\u00e9alit\u00e9s"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            {"Survolez chaque cercle pour d\u00e9couvrir la v\u00e9rit\u00e9 juridique"}
          </p>
        </motion.div>

        {/* Circles - asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
          {myths.map((myth, index) => (
            <MythCircle key={myth.id} myth={myth} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
