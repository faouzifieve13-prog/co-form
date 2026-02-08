import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "À propos - CO'FORM | Centre de Formation CSE",
  description: "Découvrez CO'FORM, centre de formation agréé DREETS fondé par Corinne Pallut, juriste experte en droit social avec 20 ans d'expérience.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
