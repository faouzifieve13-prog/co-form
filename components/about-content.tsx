"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function AboutContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Personal intro */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-widest text-primary mb-8">
              Qui suis-je
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-8">
              Corinne Pallut
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Juriste, formatrice et fondatrice de CO'FORM. 
              <br className="hidden md:block" />
              J'accompagne les membres du CSE depuis plus de 20 ans.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Titulaire d'un <strong>Master 2 en droit et management social de l'entreprise</strong>, 
              j'ai passé les vingt dernieres années à former et accompagner les représentants du personnel. 
              En 2013, j'ai fondé CO'FORM à Montastruc-la-Conseillere, près de Toulouse, 
              avec une conviction simple : rendre accessible et concret le droit social pour ceux qui en ont besoin au quotidien.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Mon approche ? <strong>Faciliter la compréhension des missions des représentants du personnel.</strong> 
              {" "}Pas de jargon inutile, pas de théorie déconnectée du terrain. Je vous apporte des outils concrets, 
              des modeles adaptés à votre contexte et une méthodologie qui vous permettra de mettre 
              en pratique vos fonctions dès la fin de la formation.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              CO'FORM est aujourd'hui un organisme <strong>référencé et agréé par la DREETS</strong> 
              {" "}de la région Occitanie. Ce n'est pas qu'un label — c'est la garantie d'une formation 
              qui répond aux exigences légales et aux besoins réels des élus du personnel.
            </p>
          </div>
        </div>
      </section>



      {/* Quote */}
      <section className="py-16 lg:py-24 border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic mb-6">
              "La formation est l'essence de tout succès."
            </p>
            <cite className="text-muted-foreground not-italic">— Arnaud Boti</cite>
          </blockquote>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
            Une question ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Je réponds personnellement à toutes vos demandes concernant le CSE et son fonctionnement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              href="tel:+33611392830"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-colors"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">06 11 39 28 30</span>
            </Link>
            <Link 
              href="mailto:contact@co-form.fr"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">contact@co-form.fr</span>
            </Link>
          </div>

          <Button asChild size="lg" className="rounded-full">
            <Link href="/formations">
              Découvrir mes formations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
