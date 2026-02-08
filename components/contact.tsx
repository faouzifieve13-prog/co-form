"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-[#78B42B] font-semibold tracking-wide uppercase mb-3">
              Contact
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Parlons de votre projet
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              {"Contactez Corinne Pallut pour discuter de vos besoins en formation CSE. Nous vous proposons un programme personnalis\u00e9."}
            </p>

            <div className="mt-6">
              <Button
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-sm font-medium tracking-wide shadow-md shadow-primary/20"
              >
                <Link href="mailto:contact@co-form.fr">Demander un devis gratuit</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right - Info cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Link
              href="tel:+33611392830"
              className="flex items-start gap-5 p-6 rounded-xl border border-border/50 hover:border-[#78B42B]/30 bg-secondary/40 hover:bg-secondary/70 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#78B42B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#78B42B]/15 transition-colors">
                <Phone className="h-4 w-4 text-[#78B42B]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{"T\u00e9l\u00e9phone"}</p>
                <p className="text-foreground font-semibold">06 11 39 28 30</p>
              </div>
            </Link>

            <Link
              href="mailto:contact@co-form.fr"
              className="flex items-start gap-5 p-6 rounded-xl border border-border/50 hover:border-[#78B42B]/30 bg-secondary/40 hover:bg-secondary/70 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#78B42B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#78B42B]/15 transition-colors">
                <Mail className="h-4 w-4 text-[#78B42B]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email</p>
                <p className="text-foreground font-semibold">contact@co-form.fr</p>
              </div>
            </Link>

            <div className="flex items-start gap-5 p-6 rounded-xl border border-border/50 bg-secondary/40">
              <div className="w-10 h-10 rounded-lg bg-[#78B42B]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-4 w-4 text-[#78B42B]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Adresse</p>
                <p className="text-foreground font-semibold">{"34 R\u00e9sidence Lanclos, 31380 Montastruc-la-Conseill\u00e8re"}</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 rounded-xl border border-border/50 bg-secondary/40">
              <div className="w-10 h-10 rounded-lg bg-[#78B42B]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="h-4 w-4 text-[#78B42B]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Horaires</p>
                <p className="text-foreground font-semibold">Lundi - Vendredi : 9h - 12h / 14h - 18h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
