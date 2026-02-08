"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const questions = [
  {
    question: "Le CSE est-il obligatoire pour ma structure\u00A0?",
    answer:
      "D\u00e8s que vous atteignez 11 salari\u00e9s pendant 12 mois cons\u00e9cutifs. C\u2019est le socle de la repr\u00e9sentation du personnel.",
  },
  {
    question: "Quelles sont nos missions en entreprise de 50+\u00A0?",
    answer:
      "Vous devenez acteur de la strat\u00e9gie\u00A0: sant\u00e9 (SSCT), situation \u00e9conomique et gestion autonome de vos budgets.",
  },
  {
    question: "Peut-on partager nos heures de d\u00e9l\u00e9gation\u00A0?",
    answer:
      "Absolument. Les heures sont mutualisables entre titulaires et suppl\u00e9ants pour garantir la continuit\u00e9 de vos mandats.",
  },
  {
    question: "Quelle est la dur\u00e9e r\u00e9elle de notre mandat\u00A0?",
    answer:
      "Le mandat classique est de 4\u00A0ans. Un accord d\u2019entreprise peut le r\u00e9duire, mais jamais en dessous de 2\u00A0ans.",
  },
]

const agrements = [
  {
    icon: ShieldCheck,
    label: "DREETS Occitanie",
    sublabel: "Agr\u00e9ment r\u00e9gional",
  },
  {
    icon: Award,
    label: "Qualiopi",
    sublabel: "Certification qualit\u00e9",
  },
  {
    icon: GraduationCap,
    label: "Agr\u00e9ment Formation",
    sublabel: "N\u00b073310792831",
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
        <div className="flex items-center justify-between gap-6 px-8 py-5">
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
              <div className="px-8 pb-7">
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
            Questions fr\u00e9quentes
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            {"Le CSE en 1\u00A0minute"}
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
