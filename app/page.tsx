import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Valeurs } from "@/components/valeurs"
import { Agrements } from "@/components/agrements"
import { IdeesRecues } from "@/components/idees-recues"
import { Faq } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Valeurs />
        <Agrements />
        <IdeesRecues />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
