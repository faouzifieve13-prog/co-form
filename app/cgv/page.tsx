import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Conditions Générales de Vente - CO'FORM",
  description: "Conditions générales de ventes concernant les prestations de formation pour les Comités Sociaux Économiques.",
}

export default function CGVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Conditions Générales de Ventes
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <p className="text-muted-foreground">
              Concernant les prestations de formation pour les Comités Sociaux Économiques
            </p>
            <a
              href="/pdfs/cgv-coform.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Télécharger le PDF
            </a>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 1 : Objet et champ d&apos;application</h2>
              <p className="text-foreground leading-relaxed">
                Les présentes conditions ont pour objet de définir les modalités d&apos;exécution par le prestataire des prestations de services qu&apos;il propose. Toute inscription à une formation implique l&apos;adhésion pleine et entière du client et son adhésion expresse et sans réserve des présentes conditions générales de vente dont il reconnaît en avoir une parfaite connaissance, et qui renonce de ce fait, à se prévaloir de tout document contradictoire et notamment de ses propres conditions générales d&apos;achat qui seront inopposables au prestataire.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Ces conditions peuvent être complétées éventuellement et/ou modifiées par des clauses particulières.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 2 : Propriété intellectuelle</h2>
              <p className="text-foreground leading-relaxed">
                Tous les documents techniques remis à nos clients demeurent la propriété exclusive du prestataire, seul titulaire des droits de propriété intellectuelle sur ces documents, le Client en ayant acquis seulement le droit d&apos;usage lui permettant de les exploiter.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Le prestataire, peut cependant dans certains cas, transférer au Client tout ou partie de ses droits sur l&apos;œuvre précitée : droit de reproduction, de représentation, de détention, d&apos;adaptation, de traduction et de tous les droits d&apos;exploitation. Ce transfert fait l&apos;objet d&apos;un accord écrit entre les parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 3 : Commande</h2>
              <p className="text-foreground leading-relaxed">
                Par commande, il faut entendre tout ordre portant sur nos prestations et accepté par le prestataire, accompagné d&apos;un devis dûment signé et de l&apos;acceptation des présentes conditions générales. Ces actes peuvent être exécutés par mail ou courrier. Les commandes transmises au prestataire sont définitives et irrévocables par le client.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 4 : Obligation de confidentialité</h2>
              <p className="text-foreground leading-relaxed">
                Les parties s&apos;engagent à conserver confidentiellement tous les documents et les informations qui leur ont été communiqués et à prendre toutes les mesures nécessaires afin d&apos;empêcher leur divulgation à des tiers. Cette obligation de confidentialité ne saurait concerner les informations faisant partie du domaine public à la date de divulgation.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Il est formellement interdit sauf dérogation expresse de la responsable de CO&apos;FORM d&apos;enregistrer ou de filmer la session de formation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 5 : Accord des parties</h2>
              <p className="text-foreground leading-relaxed">
                La signature par le client et le prestataire du présent contrat implique leur accord total sur la nature, la consistance et les conditions générales de prix et d&apos;exécution de la prestation ainsi que les conditions particulières du présent contrat.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 6 : Exécution des travaux</h2>
              <p className="text-foreground leading-relaxed">
                Les délais d&apos;exécution des formalités administratives pour l&apos;envoi de la convention de formation par exemple ne sont donnés qu&apos;à titre informatif. Tout retard par rapport aux délais indicatifs initialement prévus, ne saurait justifier une résiliation de la commande passée par le client, devenue définitive.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Les dates de réalisation de la formation sont fixées d&apos;un commun accord entre le client et le prestataire en fonction des disponibilités de la formatrice. Pour l&apos;exécution de la prestation de formation, le client s&apos;engage à communiquer toutes les informations nécessaires à sa réalisation (comme le lieu de la formation choisi par lui ou les modalités de formation à distance, les noms des participants, la CCN applicable, l&apos;effectif de l&apos;entreprise etc.) ceci afin de préparer au mieux et de personnaliser la session.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 7 : Responsabilité du prestataire</h2>
              <p className="text-foreground leading-relaxed">
                La responsabilité du prestataire ne pourra être mise en cause dans le cas où des dégradations ou des dommages seraient causés à des tiers et/ou des propriétaires de locaux mis à disposition par le prestataire, par les participants aux stages pendant la durée des sessions de formation.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Elle ne pourrait pas être recherchée en cas de : faute, négligence, omission ou défaillance du client ou d&apos;un tiers, notamment en cas de non-respect des conseils juridiques préconisés lors de la formation ; force majeure, évènement ou incident imprévisible et indépendant de la volonté du prestataire.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                La responsabilité du prestataire est strictement limitée aux obligations expressément définies par le contrat. Le prestataire ne pourra être tenu responsable des poursuites et charges éventuellement retenues à l&apos;encontre de son client si ce dernier n&apos;a pas respecté la loi suite à la prestation de formation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 8 : Absence et annulation</h2>
              <p className="text-foreground leading-relaxed">
                En cas d&apos;empêchement majeur, un stagiaire a la possibilité de se faire remplacer par un collègue. Toute annulation doit être faite par écrit, au moins 15 jours ouvrés avant le début du stage. En cas d&apos;annulation parvenue entre 10 et 15 jours ouvrés avant le début du stage, les frais d&apos;annulation s&apos;élèvent à 50 % du montant de la facture. Moins de 10 jours ouvrés avant le début du stage, nous conservons 100 % du montant de la facture. Toute demande de report dans ce dernier délai est considérée comme une annulation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 9 : Prescription</h2>
              <p className="text-foreground leading-relaxed">
                Par dérogation au droit commun, toutes les actions auxquelles le contrat conclu entre les parties peut donner lieu, sont prescrites dans un délai d&apos;un an à compter de la signature de la convention de formation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 10 : Clause attributive de juridiction</h2>
              <p className="text-foreground leading-relaxed">
                Toute contestation au niveau de la facturation doit être adressée par courriel dans les cinq jours de ladite facture. Le présent contrat est soumis à la loi française. Toute contestation qui n&apos;aurait pas été réglée à l&apos;amiable sera portée devant le Tribunal de Toulouse.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 11 : Protection des données personnelles</h2>
              <p className="text-foreground leading-relaxed">
                En validant votre inscription, vous acceptez que les informations recueillies soient enregistrées dans le cadre de la réalisation de la prestation. Toute collecte de données nominatives n&apos;a de but que dans le cadre d&apos;un traitement afin d&apos;assurer une formation personnalisée et de qualité. Toute personne pourra avoir accès à ses données ou demander par courriel, la modification ou le retrait de ces données personnelles conformément à la loi informatique et libertés du 6 janvier 1978.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Par l&apos;acceptation de la convention de formation, les participants à la session acceptent que CO&apos;FORM, en tant que prestataire, collecte et sécurise les données collectées les concernant ou relatives aux stagiaires concernés ceci conformément au règlement européen général de protection des données (RGPD) du 15 juin 2016 applicable à compter du 25 mai 2018.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Article 12 : Règlement</h2>
              <p className="text-foreground leading-relaxed">
                CO&apos;FORM est un organisme de formation enregistré sous le N° 73 31 07928 31 et agréé pour la formation économique des membres des comités sociaux économiques par le préfet de la région Occitanie.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Sauf convention particulière avec l&apos;employeur, le montant de cette formation si elle concerne les membres du CSE est à imputer sur son budget de fonctionnement. Dans le cas d&apos;un financement par l&apos;employeur, il doit être cosignataire du devis.
              </p>
              <p className="text-foreground leading-relaxed mt-3">
                Un acompte de 30 % du montant total de la facture sera à régler dès l&apos;acceptation du devis de formation. Le solde sera à régler par le client à la fin de la formation sur présentation de la facture.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              CO&apos;FORM — 34 Résidence Lanclos, 31380 Montastruc-la-Conseillère
              <br />
              Tel : 06.11.39.28.30 — contactcoform@gmail.com
              <br />
              N° SIRET : 79 806 415 000 013 — Organisme de formation déclaré sous le N° 73 31 07928 31
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
