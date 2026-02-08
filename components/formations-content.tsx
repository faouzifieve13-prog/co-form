"use client"

import { Button } from "@/components/ui/button"
import { Download, Users, MessageSquare, Scale, Clock, Euro, MapPin, CheckCircle2, BookOpen, Calculator, FileText, Leaf } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Formations CSE
const formationsCSE = [
  {
    id: "cse-missions",
    title: "Règles de fonctionnement et missions du CSE",
    description: "Comprendre et appréhender les missions du CSE. Intégrer les évolutions des règles en matière de négociation collective et maîtriser les attributions du Comité Social Économique.",
    objectives: [
      "Intégrer les évolutions des règles en matière de négociation collective et de ruptures de contrat",
      "Appréhender les enjeux pour négocier efficacement un protocole d'accord préélectoral",
      "Adapter vos pratiques de fonctionnement et élaborer un règlement intérieur adapté",
      "Comprendre l'impact de l'ordonnance du 22 septembre 2017 sur les IRP",
      "Maîtriser les attributions du CSE"
    ],
    content: [
      "Les informations environnementales intégrées dans la BDESE",
      "Les différentes missions du CSE et les droits d'alerte associés",
      "La commission santé sécurité et conditions de travail",
      "L'organisation de l'instance représentative et ses moyens",
      "La nécessité de négocier un protocole préélectoral"
    ],
    duration: "2 ou 3 jours (intra) / 2 jours (inter)",
    public: "Membres du CSE : débutants ou confirmés, représentants syndicaux non élus",
    prerequis: "Aucun pré-requis"
  },
  {
    id: "cse-secretaire",
    title: "Formation du Secrétaire du CSE",
    description: "Devenir un secrétaire émérite du Comité Social et Économique. Maîtriser les missions clés, les droits et responsabilités, et être pleinement opérationnel lors des réunions.",
    objectives: [
      "Maîtriser les missions clés inhérentes à la fonction de secrétaire",
      "Comprendre les droits et responsabilités du secrétaire",
      "Être pleinement opérationnel lors des réunions préparatoires et plénières",
      "Gérer efficacement les tâches et les moyens associés au rôle",
      "Animer l'équipe du comité et coordonner les actions des commissions",
      "Planifier des actions constructives et anticiper les stratégies"
    ],
    content: [
      "L'élection du secrétaire du CSE et sa révocation",
      "Le mandat et le statut protecteur attaché à cette fonction",
      "Les responsabilités et les missions du secrétaire",
      "La gestion administrative et l'animation des réunions",
      "La stratégie du CSE et les interlocuteurs",
      "Le suivi des décisions et la politique de communication"
    ],
    duration: "1 journée",
    public: "Secrétaires ou secrétaires adjoints du CSE, débutants ou confirmés",
    prerequis: "Aucun pré-requis"
  },
  {
    id: "cse-tresorier",
    title: "Formation du Trésorier du CSE",
    description: "Devenir un trésorier efficace et jouer un rôle clé dans la vie de votre société. Maîtriser la gestion des budgets et les obligations comptables du CSE.",
    objectives: [
      "Maîtriser votre rôle et comprendre vos droits et responsabilités",
      "Être opérationnel dans la gestion des deux budgets du CSE",
      "Savoir établir les documents comptables essentiels",
      "Comprendre et appliquer les règles de l'URSSAF",
      "Rédiger un compte rendu annuel de fin de mandat complet"
    ],
    content: [
      "Le rôle et les responsabilités du trésorier",
      "La gestion des deux budgets du CSE",
      "Les comptes annuels, état du patrimoine et rapport de gestion",
      "Les règles URSSAF pour les activités culturelles",
      "Le compte rendu annuel de fin de mandat"
    ],
    duration: "1 journée",
    public: "Trésoriers ou trésoriers adjoints du CSE, membres de commission ASC",
    prerequis: "Aucun pré-requis"
  },
  {
    id: "cse-comptes",
    title: "Comprendre les comptes de l'entreprise",
    description: "Acquérir une maîtrise des documents comptables pour émettre un avis éclairé lors des consultations du CSE sur la situation économique et financière de l'entreprise.",
    objectives: [
      "Sensibilisation aux notions financières et comptables",
      "Acquérir une maîtrise des documents comptables : lire, comprendre, interpréter",
      "Identifier les indicateurs de performance économique",
      "Évaluer l'état d'endettement et la santé financière de l'entreprise",
      "Poser des questions pertinentes en réunion plénière"
    ],
    content: [
      "Les bases de la comptabilité d'entreprise",
      "Lecture et interprétation des documents comptables",
      "Les indicateurs de performance économique",
      "L'analyse de l'endettement",
      "Consultation sur la situation économique et financière"
    ],
    duration: "2 jours (consécutifs ou non)",
    public: "Membres du CSE",
    prerequis: "Aucun pré-requis"
  }
]

// Formations Communication
const formationsCommunication = [
  {
    id: "comm-politique",
    title: "Circulation de l'information au CSE",
    description: "Mettre en place une politique de communication structurée et efficace au sein de votre CSE. Développer une communication impactante avec les salariés.",
    objectives: [
      "Maîtriser les différents modes et supports de communication",
      "Développer une communication efficace et impactante",
      "Mettre en place une politique structurée de transmission de l'information",
      "Apprendre à concevoir des outils de communication (flashs, newsletters)",
      "Acquérir les connaissances pour mener des enquêtes auprès des salariés"
    ],
    content: [
      "Les modes et supports de communication (écrits, oraux, directs, indirects)",
      "Le processus de mise en œuvre de la transmission de l'information",
      "De la décision en réunion préparatoire à sa validation en réunion plénière",
      "La politique de communication du CSE",
      "L'évaluation et le réajustement des actions de communication"
    ],
    duration: "1 journée",
    public: "Élus débutants ou confirmés chargés de la communication et des activités culturelles",
    prerequis: "Aucun pré-requis"
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
    prerequis: "Aucun pré-requis"
  }
]

// Formations Droit Social
const formationsDroitSocial = [
  {
    id: "droit-climat",
    title: "Loi Climat et Résilience (22 août 2021)",
    description: "Comprendre l'impact de la loi 'Climat et Résilience' sur les missions du CSE. Connaître l'obligation d'information et de consultation sur l'impact écologique.",
    objectives: [
      "Comprendre les évolutions introduites par la loi 'Climat et Résilience'",
      "Connaître l'obligation d'information et de consultation du CSE sur l'impact écologique",
      "Maîtriser les effets environnementaux des décisions de l'employeur",
      "Découvrir l'enrichissement de la BDESE",
      "Apprendre à formaliser les initiatives environnementales"
    ],
    content: [
      "Présentation de la loi 'Climat et Résilience' et ses mesures phares",
      "Impact sur les missions du CSE",
      "L'enrichissement de la BDESE (données environnementales)",
      "La nouvelle consultation obligatoire sur l'impact environnemental",
      "Le rôle élargi de l'expert-comptable",
      "Actions concrètes pour le CSE"
    ],
    duration: "1 journée",
    public: "Membres titulaires et suppléants du CSE",
    prerequis: "Aucun pré-requis"
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
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

            {/* Pricing badge */}
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl">
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">400€</span>
                <span className="text-muted-foreground">/jour/participant</span>
              </div>
              <div className="w-px h-8 bg-border" />
              <span className="text-sm text-muted-foreground">Tarif inter-entreprises</span>
            </div>
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

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-4xl">
                      {formation.description}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Objectives */}
                      <div>
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          Objectifs de la formation
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
                        <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10">
                          <Euro className="h-5 w-5 text-primary" />
                          <span className="font-bold text-foreground">400€ / jour / participant</span>
                          <span className="text-sm text-muted-foreground">(inter-entreprises)</span>
                        </div>

                        <div className="flex gap-3">
                          <Button 
                            asChild
                            className="rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                          >
                            <Link href="#">
                              <Download className="h-4 w-4 mr-2" />
                              Programme PDF
                            </Link>
                          </Button>
                          
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
                  <Link href="mailto:contact@co-form.fr">
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
