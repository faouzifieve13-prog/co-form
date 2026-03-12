"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

function CirclePattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large circles inspired by the Co'form logo swirl */}
      <svg className="absolute -top-20 -right-32 w-[700px] h-[700px] opacity-[0.03]" viewBox="0 0 700 700">
        <circle cx="350" cy="350" r="340" fill="none" stroke="#78B42B" strokeWidth="3" />
        <circle cx="350" cy="350" r="260" fill="none" stroke="#B5345A" strokeWidth="2.5" />
        <circle cx="350" cy="350" r="180" fill="none" stroke="#4A4A4A" strokeWidth="2" />
        <circle cx="280" cy="280" r="60" fill="#78B42B" opacity="0.4" />
        <circle cx="420" cy="310" r="45" fill="#4A4A4A" opacity="0.4" />
      </svg>
      <svg className="absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-[0.025]" viewBox="0 0 600 600">
        <circle cx="300" cy="300" r="290" fill="none" stroke="#B5345A" strokeWidth="2.5" />
        <circle cx="300" cy="300" r="200" fill="none" stroke="#78B42B" strokeWidth="2" />
        <circle cx="220" cy="250" r="50" fill="#B5345A" opacity="0.35" />
        <circle cx="380" cy="340" r="35" fill="#78B42B" opacity="0.35" />
      </svg>
      {/* Small scattered circles */}
      <svg className="absolute top-1/4 left-1/3 w-[300px] h-[300px] opacity-[0.03]" viewBox="0 0 300 300">
        <circle cx="150" cy="150" r="140" fill="none" stroke="#4A4A4A" strokeWidth="1.5" />
        <circle cx="100" cy="120" r="30" fill="#78B42B" opacity="0.3" />
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-background">
      <CirclePattern />

      {/* Soft ambient glow */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#78B42B]/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#B5345A]/[0.03] rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#78B42B]/10 border border-[#78B42B]/20 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#78B42B] animate-pulse" />
              <span className="text-xs font-semibold text-[#78B42B] uppercase tracking-wider">
                Organisme agréé DREETS
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Le succès de votre CSE commence ici.
            </motion.h1>

            <motion.p
              className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conseil juridique et formations sur mesure pour des représentants du personnel plus expérimentés et efficaces.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                asChild
                className="rounded-full bg-[#78B42B] text-white hover:bg-[#78B42B]/90 px-8 h-12 text-sm font-medium tracking-wide shadow-lg shadow-[#78B42B]/20"
              >
                <Link href="/formations">Découvrir nos formations</Link>
              </Button>
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-sm font-medium tracking-wide shadow-lg shadow-primary/20"
              >
                <Link href="/#contact">Prendre rendez-vous</Link>
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-formation.jpg"
                alt="Travail collaboratif sur documents de formation"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slanted separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] lg:h-[60px]"
          fill="none"
        >
          <path
            d="M0 60L1440 0V60H0Z"
            className="fill-secondary/60"
          />
        </svg>
      </div>
    </section>
  )
}
