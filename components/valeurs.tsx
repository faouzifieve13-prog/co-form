"use client"

import Link from "next/link"
import Image from "next/image"
import { FileSignature, Scale, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const valeurs = [
  {
    icon: FileSignature,
    title: "Une offre de formation sur-mesure",
    description:
      "Nous co-construisons le programme de vos sessions pour répondre à vos besoins et au contexte de votre entreprise.",
    glowColor: "#78B42B",
    bgColor: "bg-[#78B42B]/[0.06]",
  },
  {
    icon: Scale,
    title: "Expertise de terrain",
    description:
      "Des formateurs, praticiens du droit qui mettent leurs compétences d\u2019expert à votre service. Ils vous apportent de la méthodologie et vous clarifient le droit du travail pour une mise en \u0153uvre simple et pratique.",
    glowColor: "#B5345A",
    bgColor: "bg-[#B5345A]/[0.06]",
  },
  {
    icon: MapPin,
    title: "Proximité & Réactivité",
    description:
      "Un accompagnement humain et local en région Occitanie, près de Toulouse.",
    glowColor: "#4A4A4A",
    bgColor: "bg-[#4A4A4A]/[0.06]",
  },
]

const iconAnimation = {
  hidden: { opacity: 0, scale: 0.5, rotate: -15 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 14,
      delay: i * 0.15 + 0.2,
    },
  }),
}

export function Valeurs() {
  return (
    <section className="py-14 lg:py-20 bg-secondary/60 relative overflow-hidden">
      {/* Image de fond subtile */}
      <div className="absolute inset-0">
        <Image
          src="/images/valeurs-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {valeurs.map((valeur, index) => (
            <motion.div
              key={index}
              className={`relative p-7 rounded-2xl ${valeur.bgColor} border border-border/50 group cursor-default overflow-hidden transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -6,
                boxShadow: `0 12px 40px ${valeur.glowColor}14`,
                borderColor: `${valeur.glowColor}33`,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              {/* Glow orb */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: `${valeur.glowColor}12` }}
              />

              {/* Animated icon */}
              <motion.div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${valeur.glowColor}12` }}
                custom={index}
                variants={iconAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  <valeur.icon className="h-5 w-5" style={{ color: valeur.glowColor }} strokeWidth={1.8} />
                </motion.div>
              </motion.div>

              <h3 className="relative font-serif text-lg font-semibold text-foreground mb-2">
                {valeur.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed text-sm">
                {valeur.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            asChild
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 px-10 h-12 text-sm font-medium tracking-wide shadow-md shadow-primary/15 transition-all duration-300"
          >
            <Link href="/formations">Consulter le catalogue complet</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
