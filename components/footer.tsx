import Link from "next/link"
import Image from "next/image"
import { Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#F9F9F9]">
      {/* Main content - 3 columns */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="py-10 lg:py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left - Adresse */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Adresse
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              34 Résidence Lanclos
            </p>
            <p className="text-foreground font-medium">
              31380 Montastruc-la-Conseillère
            </p>
            <div className="mt-4 space-y-1.5">
              <Link href="tel:+33611392830" className="block text-sm text-muted-foreground hover:text-[#78B42B] transition-colors">
                06 11 39 28 30
              </Link>
              <Link href="mailto:contactcoform@gmail.com" className="block text-sm text-muted-foreground hover:text-[#78B42B] transition-colors">
                contactcoform@gmail.com
              </Link>
            </div>
          </div>

          {/* Center - Horaires */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Horaires
            </p>
            <p className="text-foreground font-medium">
              Lundi &ndash; Vendredi
            </p>
            <p className="text-2xl font-serif text-foreground mt-2">
              9h &ndash; 12h / 14h &ndash; 18h
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Fermé le week-end et les jours fériés
            </p>
          </div>

          {/* Right - LinkedIn */}
          <div className="flex flex-col">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
              Suivez-nous
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Retrouvez l&apos;actualité juridique et nos conseils CSE sur LinkedIn.
            </p>
            <Link
              href="https://www.linkedin.com/company/co-form"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#B5345A] text-white hover:bg-[#B5345A]/90 transition-all duration-300 shadow-md shadow-[#B5345A]/15 self-start"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom - Legal */}
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/">
            <Image
              src="/images/logo-coform.png"
              alt="CO'FORM - Conseil & Formation"
              width={120}
              height={48}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-xs text-muted-foreground text-center">
            SIRET 798 064 150 00013 | Organisme de formation n°73310792831 | Agrément DREETS Occitanie
          </p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </Link>
            <Link href="/cgv" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
