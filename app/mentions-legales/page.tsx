import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Mentions Légales - CO'FORM",
  description: "Mentions légales du site CO'FORM, organisme de formation agréé pour les membres du CSE.",
}

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-12">
            Mentions légales
          </h1>

          <div className="space-y-10">
            {/* Éditeur du site */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Éditeur du site
              </h2>
              <div className="space-y-2 text-foreground leading-relaxed">
                <p><strong>CO&apos;FORM</strong> — Conseil &amp; Formation</p>
                <p>Entreprise individuelle</p>
                <p>Responsable de la publication : Corinne Pallut</p>
                <p>34 Résidence Lanclos, 31380 Montastruc-la-Conseillère</p>
                <p>Téléphone : 06 11 39 28 30</p>
                <p>Email : contactcoform@gmail.com</p>
                <p>N° SIRET : 798 064 150 00013</p>
                <p>Organisme de formation déclaré sous le N° 73 31 07928 31 auprès du préfet de la région Occitanie</p>
                <p>Agrément DREETS Occitanie pour la formation économique des membres du CSE</p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Hébergement
              </h2>
              <div className="space-y-2 text-foreground leading-relaxed">
                <p>Ce site est hébergé par :</p>
                <p><strong>Vercel Inc.</strong></p>
                <p>440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis</p>
                <p>Site web : vercel.com</p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-foreground leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, logos, supports de formation, programmes)
                est la propriété exclusive de CO&apos;FORM ou de ses partenaires. Toute reproduction, représentation,
                modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen
                ou le procédé utilisé, est interdite sans autorisation écrite préalable de CO&apos;FORM.
              </p>
            </section>

            {/* Protection des données */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Protection des données personnelles
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
                Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d&apos;un droit d&apos;accès,
                de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Les informations recueillies via ce site (demandes de devis, inscriptions aux formations)
                sont destinées exclusivement à CO&apos;FORM pour le traitement de votre demande et la gestion
                de la relation commerciale. Elles ne sont en aucun cas cédées à des tiers.
              </p>
              <p className="text-foreground leading-relaxed">
                Pour exercer vos droits ou pour toute question relative à la protection de vos données,
                vous pouvez nous contacter par email à{" "}
                <a href="mailto:contactcoform@gmail.com" className="text-primary hover:underline">
                  contactcoform@gmail.com
                </a>{" "}
                ou par courrier à l&apos;adresse indiquée ci-dessus.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Cookies
              </h2>
              <p className="text-foreground leading-relaxed">
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement ainsi que
                des outils d&apos;analyse d&apos;audience (Vercel Analytics) pour améliorer l&apos;expérience utilisateur.
                Ces outils collectent des données anonymisées et ne permettent pas d&apos;identifier personnellement
                les visiteurs. Aucun cookie publicitaire n&apos;est utilisé.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Limitation de responsabilité
              </h2>
              <p className="text-foreground leading-relaxed">
                CO&apos;FORM s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur ce site.
                Toutefois, CO&apos;FORM ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des
                informations mises à disposition. CO&apos;FORM décline toute responsabilité pour les éventuelles
                erreurs ou omissions, ainsi que pour les dommages directs ou indirects pouvant résulter de
                l&apos;utilisation des informations contenues sur ce site.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
                Droit applicable
              </h2>
              <p className="text-foreground leading-relaxed">
                Les présentes mentions légales sont régies par le droit français.
                En cas de litige, les tribunaux de Toulouse seront seuls compétents.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : mars 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
