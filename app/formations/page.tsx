import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FormationsContent } from "@/components/formations-content"

export const metadata = {
  title: "Formations CSE | CO'FORM - Centre de Formation Agréé",
  description: "Découvrez nos formations CSE, activités sociales et culturelles, et communication. Tarif inter-entreprises : 400€/jour. Programmes personnalisés.",
}

export default function FormationsPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <FormationsContent />
      </main>
      <Footer />
    </>
  )
}
