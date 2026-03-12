"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const questions = [
  {
    question: "Le CSE est-il obligatoire pour mon entreprise\u00A0?",
    answer:
      "Dès que l\u2019entreprise atteint 11 salariés (équivalent temps plein) pendant 12 mois consécutifs, l\u2019employeur doit organiser des élections du CSE (article L\u00A02311-2 du code du travail).",
  },
  {
    question: "Quelles sont les missions du CSE dans une entreprise de plus de 50 salariés\u00A0?",
    answer:
      "Le CSE doit donner son avis sur la situation économique et financière de l\u2019entreprise ainsi que sur la politique sociale. Il a aussi des missions en matière de santé sécurité et conditions de travail. Il gère un budget pour faire bénéficier aux salariés d\u2019activités sociales (bons cadeaux à Noël, billetterie cinéma).",
  },
  {
    question: "Peut-on partager les heures de délégation\u00A0?",
    answer:
      "Oui. Les heures sont cessibles entre titulaires et aux suppléants pour bien exercer leurs missions liées à leur mandat.",
  },
  {
    question: "Quelle est la durée du mandat\u00A0?",
    answer:
      "Elle est de 4 ans mais peut être réduite par accord d\u2019entreprise pour une durée comprise entre 2 et 4 ans (articles L\u00A02314-32 et L\u00A02314-33 du code du travail).",
  },
  {
    question: "Quelles formations peuvent suivre les membres du CSE dans une entreprise de plus de 50 salariés\u00A0?",
    answer:
      "Les membres titulaires ont droit à 5 jours de formation économique (article L\u00A02315-63 du code du travail). Tous les membres du CSE peuvent suivre une session sur la santé sécurité et conditions de travail d\u2019une durée de 3 jours pour les élus dont le mandat a été renouvelé et de 5 jours pour les élus en 1er mandat (article L\u00A02315-18 du code du travail).",
  },
]

function FaqItem({
  item,
  index,
}: {
  item: (typeof questions)[number]
  index: number
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <motion.div
        className="bg-[#F8F9FA] border border-[#E0E0E0] overflow-hidden cursor-pointer"
        animate={{
          borderRadius: isOpen ? "1.5rem" : "9999px",
          borderColor: isOpen ? "#78B42B" : "#E0E0E0",
        }}
        whileHover={{
          y: -2,
          boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
          borderColor: "#78B42B",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Question row */}
        <div className="flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-5">
          <span className="text-foreground font-medium text-[1.1rem] leading-snug">
            {item.question}
          </span>
          <motion.span
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
            animate={{
              rotate: isOpen ? 45 : 0,
              backgroundColor: isOpen ? "#78B42B" : "#B5345A",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-white"
            >
              <path
                d="M7 1V13M1 7H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </motion.span>
        </div>

        {/* Answer inside same pill */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-6 lg:px-8 pb-7">
                <div className="w-12 h-px bg-[#78B42B]/30 mb-4" />
                <p className="text-[0.82rem] text-[#6B6B6B] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[800px] px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-[#78B42B] font-semibold tracking-wide uppercase mb-3">
            Questions fréquentes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Le CSE en 1&nbsp;minute
          </h2>
        </motion.div>

        {/* Pill Accordion */}
        <div className="flex flex-col gap-4">
          {questions.map((item, index) => (
            <FaqItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
