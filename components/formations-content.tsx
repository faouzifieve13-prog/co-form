"use client"

import { Button } from "@/components/ui/button"
import { Download, Users, MessageSquare, Scale, Clock, Euro, CheckCircle2, BookOpen, FileText, Leaf, CalendarDays } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Formations CSE
const formationsCSE = [
  {
    id: "cse-missions",
    title: "Maîtriser les Missions du CSE dans une entreprise de + de 50 salariés",
    description: "Comprendre et appréhender les missions du CSE. Intégrer les évolutions des règles en matière de négociation collective et maîtriser les attributions du Comité Social Économique.",
    objectives: [
      "Adapter vos pratiques de fonctionnement grâce à un règlement intérieur du CSE modifié",
      "Rédiger un ordre du jour d\u2019une réunion et savoir ce que contient les procès-verbaux des séances",
      "Gérer les budgets de fonctionnement et des activités sociales",
      "Utiliser vos heures de délégation pour vous organiser et être efficace",
      "Comprendre les missions professionnelles et économiques du CSE pour donner un avis motivé lors des consultations"
    ],
    content: [
      "Les informations environnementales intégrées dans la BDESE",
      "Les différentes missions du CSE et les droits d\u2019alerte associés",
      "La commission santé sécurité et conditions de travail",
      "L\u2019organisation de l\u2019instance représentative et ses moyens",
      "La nécessité de négocier un protocole préélectoral"
    ],
    duration: "2-3 jours",
    public: "Élus CSE",
    prerequis: "Aucun pré-requis",
    pricing: {
      inter: "400 € par participant et par jour",
      intra: "Prix établi sur devis après étude de vos attentes"
    },
    programmeUrl: "/pdfs/programme-missions-cse.pdf",
    sessionInter: "Mardi 26 mai et jeudi 28 mai 2026"
  },
  {
    id: "cse-secretaire",
    title: "Devenir un Secrétaire du CSE Efficace",
    description: "Maîtriser les missions clés du secrétaire du Comité Social et Économique, ses droits et responsabilités, et être pleinement opérationnel lors des réunions.",
    objectives: [
      "Connaître les missions du poste de secrétaire du CSE et celles du secrétaire adjoint",
      "Construire un ordre du jour adapté",
      "Rédiger des procès-verbaux conformes et exploitables",
      "Animer « l\u2019équipe » de votre CSE et coordonner l\u2019action des commissions",
      "Piloter le calendrier du CSE"
    ],
    content: [
      "L\u2019élection du secrétaire du CSE et sa révocation",
      "Le mandat et le statut protecteur attaché à cette fonction",
      "Les responsabilités et les missions du secrétaire",
      "La gestion administrative et l\u2019animation des réunions",
      "La stratégie du CSE et les interlocuteurs",
      "Le suivi des décisions et la politique de communication"
    ],
    duration: "1 journée",
    public: "Secrétaires CSE",
    prerequis: "Aucun pré-requis",
    pricing: {
      inter: "400 € par participant et par jour",
      intra: "Prix établi sur devis après étude de vos attentes"
    },
    programmeUrl: "/pdfs/programme-secretaire-cse.pdf",
    sessionInter: "Mardi 19 mai 2026"
  },
  {
    id: "cse-tresorier",
    title: "Devenir un Trésorier Expert",
    description: "Devenir un trésorier efficace et jouer un rôle clé dans la vie de votre CSE. Maîtriser la gestion des budgets et les obligations comptables.",
    objectives: [
      "Connaître le rôle du trésorier du CSE et ses droits et responsabilités",
      "Être opérationnel pour gérer les deux budgets à partir d\u2019outils pertinents",
      "Savoir établir et suivre un budget prévisionnel",
      "Être capable d\u2019établir les documents annuels du CSE",
      "Appréhender les règles de l\u2019URSSAF pour les activités sociales et culturelles",
      "Savoir rédiger le compte annuel de fin de mandat"
    ],
    content: [
      "Le rôle et les responsabilités du trésorier",
      "La gestion des deux budgets du CSE et les règles URSSAF",
      "Les comptes annuels, état du patrimoine et rapport de gestion",
      "Les documents à établir selon les modèles de l\u2019Autorité des normes comptables",
      "Le compte rendu de fin de mandat"
    ],
    duration: "1 journée",
    public: "Trésoriers ou trésoriers adjoints du CSE",
    prerequis: "Formation initiale sur le fonctionnement du CSE",
    pricing: {
      inter: "400 € par participant et par jour",
      intra: "Prix établi sur devis après étude de vos attentes"
    },
    programmeUrl: "/pdfs/programme-tresorier-cse.pdf",
    sessionInter: null
  },
  {
    id: "cse-comptes",
    title: "Analyser les Comptes de l\u2019Entreprise",
    description: "Acquérir une maîtrise des documents comptables pour émettre un avis éclairé lors des consultations du CSE sur la situation économique et financière de l\u2019entreprise.",
    objectives: [
      "Sensibilisation aux notions financières et comptables",
      "Acquérir une maîtrise des documents comptables : lire, comprendre, interpréter",
      "Identifier les indicateurs de performance économique",
      "Évaluer l\u2019état d\u2019endettement et la santé financière de l\u2019entreprise",
      "Poser des questions pertinentes en réunion plénière"
    ],
    content: [
      "Les bases de la comptabilité d\u2019entreprise",
      "Lecture et interprétation des documents comptables",
      "Les indicateurs de performance économique",
      "L\u2019analyse de l\u2019endettement",
      "Consultation sur la situation économique et financière"
    ],
    duration: "2 jours (consécutifs ou non)",
    public: "Membres du CSE",
    prerequis: "Aucun pré-requis",
    pricing: null,
    programmeUrl: null,
    sessionInter: null
  }
]

// Formations Communication
const formationsCommunication = [
  {
    id: "comm-politique",
    title: "Circulation de l\u2019information au CSE",
    description: "Mettre en place une politique de communication structurée et efficace au sein de votre CSE. Développer une communication impactante avec les salariés.",
    objectives: [
      "Maîtriser les différents modes et supports de communication",
      "Développer une communication efficace et impactante",
      "Mettre en place une politique structurée de transmission de l\u2019information",
      "Apprendre à concevoir des outils de communication (flashs, newsletters)",
      "Acquérir les connaissances pour mener des enquêtes auprès des salariés"
    ],
    content: [
      "Les modes et supports de communication (écrits, oraux, directs, indirects)",
      "Le processus de mise en \u0153uvre de la transmission de l\u2019information",
      "De la décision en réunion préparatoire à sa validation en réunion plénière",
      "La politique de communication du CSE",
      "L\u2019évaluation et le réajustement des actions de communication"
    ],
    duration: "1 journée",
    public: "Élus débutants ou confirmés chargés de la communication et des activités culturelles",
    prerequis: "Aucun pré-requis",
    pricing: {
      inter: "400 € par participant et par jour",
      intra: "Prix établi sur devis après étude de vos attentes"
    },
    programmeUrl: null,
    sessionInter: null
  },
  {
    id: "comm-reglement",
    title: "Règlement intérieur du CSE",
    description: "Élaborer un règlement intérieur efficace et conforme. Sécuriser les pratiques de votre CSE grâce à un document adapté à votre fonctionnement.",
    objectives: [
      "Identifier les clauses essentielles du règlement intérieur",
      "Comprendre et appliquer les règles du contenu légalement obligatoire",
      "Développer la capacité de rédiger un règlement intérieur adapté",
      "Sécuriser les pratiques de votre CSE",
      "Maîtriser les clauses impératives de la loi du 5 mars 2014"
    ],
    content: [
      "Les clauses essentielles du règlement intérieur",
      "Le contenu légalement obligatoire",
      "Les clauses impératives (loi du 5 mars 2014 sur la transparence)",
      "La rédaction adaptée au fonctionnement du CSE",
      "La gestion des activités sociales et culturelles dans le règlement"
    ],
    duration: "1 journée",
    public: "Secrétaires, trésoriers, membres de commission ASC",
    prerequis: "Aucun pré-requis",
    pricing: {
      inter: "400 € par participant et par jour",
      intra: "Prix établi sur devis après étude de vos attentes"
    },
    programmeUrl: null,
    sessionInter: null
  }
]

// Formations Droit Social
const formationsDroitSocial = [
  {
    id: "droit-climat",
    title: "Loi Climat et Résilience (22 août 2021)",
    description: "Comprendre l\u2019impact de la loi \u2018Climat et Résilience\u2019 sur les missions du CSE. Connaître l\u2019obligation d\u2019information et de consultation sur l\u2019impact écologique.",
    objectives: [
      "Comprendre les évolutions introduites par la loi \u2018Climat et Résilience\u2019",
      "Connaître l\u2019obligation d\u2019information et de consultation du CSE sur l\u2019impact écologique",
      "Maîtriser les effets environnementaux des décisions de l\u2019employeur",
      "Découvrir l\u2019enrichissement de la BDESE",
      "Apprendre à formaliser les initiatives environnementales"
    ],
    content: [
      "Présentation de la loi \u2018Climat et Résilience\u2019 et ses mesures phares",
      "Impact sur les missions du CSE",
      "L\u2019enrichissement de la BDESE (données environnementales)",
      "La nouvelle consultation obligatoire sur l\u2019impact environnemental",
      "Le rôle élargi de l\u2019expert-comptable",
      "Actions concrètes pour le CSE"
    ],
    duration: "1 journée",
    public: "Membres titulaires et suppléants du CSE",
    prerequis: "Aucun pré-requis",
    pricing: {
      inter: "400 € par participant et par jour",
      intra: "Prix établi sur devis après étude de vos attentes"
    },
    programmeUrl: null,
    sessionInter: null
  },
  {
    id: "droit-actualites",
    title: "Actualités Sociales",
    description: "Faire le point sur les dernières évolutions législatives et jurisprudentielles en droit social impactant le fonctionnement du CSE et les relations de travail.",
    objectives: [
      "Maîtriser les dernières réformes du droit du travail",
      "Comprendre les évolutions jurisprudentielles récentes",
      "Anticiper les impacts sur le fonctionnement du CSE",
      "Adapter les pratiques du CSE aux nouvelles obligations",
      "Échanger sur les problématiques terrain"
    ],
    content: [
      "Les réformes législatives récentes en droit social",
      "La jurisprudence marquante de l\u2019année",
      "Les évolutions en matière de santé et sécurité au travail",
      "Les nouveautés relatives au CSE et à ses missions",
      "Questions/réponses et cas pratiques"
    ],
    duration: "1 journée",
    public: "Membres du CSE, délégués syndicaux",
    prerequis: "Connaissances de base en droit social",
    pricing: {
      inter: "400 € par participant et par jour",
      intra: "Prix établi sur devis après étude de vos attentes"
    },
    programmeUrl: null,
    sessionInter: "Jeudi 23 avril 2026"
  },
  {
    id: "droit-harcelement",
    title: "Référent Harcèlement Sexuel et Agissements Sexistes",
    description: "Former le référent harcèlement sexuel du CSE à ses missions. Connaître le cadre juridique, savoir identifier les situations et mettre en place des actions de prévention.",
    objectives: [
      "Connaître le cadre juridique du harcèlement sexuel et des agissements sexistes",
      "Comprendre le rôle et les missions du référent harcèlement du CSE",
      "Savoir identifier les situations de harcèlement sexuel",
      "Mettre en place des actions de prévention efficaces",
      "Accompagner les victimes et orienter vers les bons interlocuteurs"
    ],
    content: [
      "Définitions légales : harcèlement sexuel, agissements sexistes",
      "Le cadre juridique et les obligations de l\u2019employeur",
      "Le rôle du référent harcèlement du CSE (loi du 5 septembre 2018)",
      "Identifier et caractériser les situations",
      "La procédure d\u2019alerte et d\u2019enquête",
      "Les mesures de prévention à mettre en place"
    ],
    duration: "1 journée",
    public: "Référents harcèlement CSE, membres du CSE",
    prerequis: "Aucun pré-requis",
    pricing: {
      inter: "400 € par participant et par jour",
      intra: "Prix établi sur devis après étude de vos attentes"
    },
    programmeUrl: null,
    sessionInter: "Mardi 16 juin 2026"
  }
]

type CategoryKey = "cse" | "communication" | "droit-social"

const categories = [
  { id: "cse" as CategoryKey, label: "Formation CSE", icon: Users, formations: formationsCSE },
  { id: "communication" as CategoryKey, label: "Communication", icon: MessageSquare, formations: formationsCommunication },
  { id: "droit-social" as CategoryKey, label: "Droit Social", icon: Scale, formations: formationsDroitSocial },
]

export function FormationsContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("cse")
  const activeFormations = categories.find(c => c.id === activeCategory)?.formations || []

  return (
    <div className="relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Header section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <Image
            src="/images/formations-header.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.07]"
            sizes="100vw"
            priority
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">Organisme agréé DREETS</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6 text-balance">
              Nos Formations
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              Des formations sur mesure pour les membres du CSE, dispensées par des formateurs experts
              en droit social et relations professionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Prochaines sessions inter-entreprises */}
      <section className="relative pb-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg p-6 lg:p-8">
            <h2 className="flex items-center gap-3 font-serif text-xl font-medium text-foreground mb-6">
              <CalendarDays className="h-5 w-5 text-accent" />
              Prochaines sessions inter-entreprises
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { date: "Jeudi 23 avril 2026", formation: "Actualités Sociales" },
                { date: "Mardi 19 mai 2026", formation: "Secrétaire du CSE" },
                { date: "Mardi 26 & jeudi 28 mai 2026", formation: "Missions du CSE (+50 salariés)" },
                { date: "Mardi 16 juin 2026", formation: "Référent Harcèlement Sexuel" },
              ].map((session, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{session.date}</p>
                    <p className="text-sm text-muted-foreground">{session.formation}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Tarif inter-entreprise : 400 € par participant et par jour — Inscriptions ouvertes, places limitées.
            </p>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300
                    ${isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-white/60 backdrop-blur-xl border border-white/40 text-foreground hover:bg-white/80"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  {category.label}
                  <span className={`
                    ml-1 px-2 py-0.5 rounded-full text-xs
                    ${isActive ? "bg-white/20" : "bg-primary/10 text-primary"}
                  `}>
                    {category.formations.length}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formations list */}
      <section className="relative pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-8">
            {activeFormations.map((formation, index) => (
              <div
                key={formation.id}
                className="group relative"
              >
                <div className="relative bg-white/60 backdrop-blur-2xl rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Number badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>

                  <div className="p-8 lg:p-10">
                    {/* Title */}
                    <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4 pr-16">
                      {formation.title}
                    </h2>

                    {/* Session inter-entreprise */}
                    {formation.sessionInter && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 mb-4">
                        <CalendarDays className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium text-foreground">
                          Prochaine session inter-entreprise : {formation.sessionInter}
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-4xl">
                      {formation.description}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Objectives */}
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Ce que vous allez apprendre à
                        </h3>
                        <ul className="space-y-3">
                          {formation.objectives.map((objective, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{objective}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          <BookOpen className="h-4 w-4 text-primary" />
                          Contenu de la formation
                        </h3>
                        <ul className="space-y-3">
                          {formation.content.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Footer with meta info and CTAs */}
                    <div className="mt-8 pt-8 border-t border-border/50">
                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Durée :</span>
                          <span className="font-medium text-foreground">{formation.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-muted-foreground">Public :</span>
                          <span className="font-medium text-foreground">{formation.public}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="font-medium text-foreground">{formation.prerequis}</span>
                        </div>
                      </div>

                      {/* Price and CTAs */}
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        {formation.pricing ? (
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10">
                              <Euro className="h-4 w-4 text-primary" />
                              <span className="text-sm text-foreground">Inter-entreprise : {formation.pricing.inter}</span>
                            </div>
                            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-accent/5 border border-accent/10">
                              <Euro className="h-5 w-5 text-accent" />
                              <span className="text-sm text-muted-foreground">Intra-entreprise : {formation.pricing.intra}</span>
                            </div>
                          </div>
                        ) : (
                          <div />
                        )}

                        <div className="flex gap-3">
                          {formation.programmeUrl && (
                            <Button
                              asChild
                              className="rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                            >
                              <a href={formation.programmeUrl} target="_blank" rel="noopener noreferrer" download>
                                <Download className="h-4 w-4 mr-2" />
                                Programme PDF
                              </a>
                            </Button>
                          )}

                          <Button
                            asChild
                            variant="outline"
                            className="rounded-xl border-primary/30 hover:bg-primary/5 bg-transparent"
                          >
                            <Link href="/#contact">
                              Demander un devis
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary to-accent rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

            <div className="relative text-center">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-white mb-4">
                Besoin d&apos;une formation sur mesure ?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Nous adaptons nos programmes à vos besoins spécifiques.
                Contactez-nous pour un devis personnalisé en intra-entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl bg-white text-primary hover:bg-white/90 shadow-lg h-12 px-8"
                >
                  <Link href="tel:+33611392830">
                    Nous appeler
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-white/30 text-white hover:bg-white/10 h-12 px-8 bg-transparent"
                >
                  <Link href="mailto:contactcoform@gmail.com">
                    Envoyer un email
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
