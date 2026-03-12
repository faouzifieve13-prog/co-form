"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const myths = [
  {
    id: 1,
    color: "#B5345A",
    myth: "Le critère de l\u2019ancienneté du salarié est obligatoire pour l\u2019attribution des bons d\u2019achats et l\u2019accès aux activités.",
    reality:
      "La Cour de cassation interdit toute discrimination basée sur l\u2019ancienneté pour l\u2019accès aux ASC \u2014 arrêt du 3 avril 2024 (n° 22-16.812). L\u2019URSSAF admet la régularisation par les CSE jusqu\u2019au 31/12/2026.",
    label: "Mythe n°1",
  },
  {
    id: 2,
    color: "#78B42B",
    myth: "Le président du CSE peut modifier l\u2019ordre du jour de la réunion lors de la séance.",
    reality:
      "Faux : une fois l\u2019ordre du jour fixé conjointement par l\u2019employeur et le secrétaire du CSE, il ne peut être modifié par le président du CSE en réunion.",
    label: "Mythe n°2",
  },
  {
    id: 3,
    color: "#2D2D2D",
    myth: "On peut transférer la totalité de l\u2019excédent du budget de fonctionnement vers celui des activités.",
    reality:
      "C\u2019est faux. Le CSE ne peut transférer que 10\u00A0% de l\u2019excédent annuel.",
    label: "Mythe n°3",
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
      className="flex justify-center"
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
        onClick={() => setIsHovered((prev) => !prev)}
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
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground hidden md:inline">
                    Survolez
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground md:hidden">
                    Touchez
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
                  C&apos;EST FAUX
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
            Décryptage juridique
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Mythes ou Réalités
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            <span className="hidden md:inline">Survolez</span>
            <span className="md:hidden">Touchez</span>
            {" "}chaque cercle pour découvrir la bonne réponse juridique
          </p>
        </motion.div>

        {/* Circles - aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center">
          {myths.map((myth, index) => (
            <MythCircle key={myth.id} myth={myth} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
