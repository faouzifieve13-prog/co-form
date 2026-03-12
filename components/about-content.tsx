"use client"

import { Mail, Phone, GraduationCap, Briefcase, MapPin, Heart, Users, Handshake } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function AboutContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero - Personal intro */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-sm uppercase tracking-widest text-primary mb-8">
            Qui suis-je
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-8">
            Corinne Pallut
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            Juriste, formatrice et fondatrice de CO&apos;FORM.
            <br className="hidden md:block" />
            J&apos;accompagne les membres du CSE depuis plus de 20 ans.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_360px] gap-14 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">
                Mon parcours
              </h2>
              <p className="text-base text-foreground leading-relaxed mb-6">
                Titulaire d&apos;un <strong>Master 2 en droit et management social de l&apos;entreprise</strong>,
                j&apos;ai passé les vingt dernières années à former et accompagner les représentants du personnel.
                En 2013, j&apos;ai fondé CO&apos;FORM à Montastruc-la-Conseillère, près de Toulouse,
                avec une conviction simple : rendre accessible et concret le droit social pour ceux qui en ont besoin au quotidien.
              </p>

              <p className="text-base text-foreground leading-relaxed mb-6">
                Mon approche ? <strong>Faciliter la compréhension des missions des représentants du personnel.</strong>
                {" "}Pas de jargon inutile, pas de théorie déconnectée du terrain. Je vous apporte des outils concrets,
                des modèles adaptés à votre contexte et une méthodologie qui vous permettra de mettre
                en pratique vos fonctions dès la fin de la formation.
              </p>

              <p className="text-base text-foreground leading-relaxed">
                CO&apos;FORM est aujourd&apos;hui un organisme <strong>référencé et agréé par la DREETS</strong>
                {" "}de la région Occitanie. C&apos;est la garantie d&apos;une formation
                qui répond aux exigences légales et aux besoins réels des élus du personnel.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/about-formation.jpg"
                  alt="Documents et supports de formation"
                  fill
                  className="object-cover"
                  sizes="360px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socle de confiance */}
      <section className="py-12 lg:py-16 bg-secondary/60">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">
            Le socle de confiance
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-[#78B42B]/10 flex items-center justify-center mb-5">
                <GraduationCap className="h-5 w-5 text-[#78B42B]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Qualification</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Corinne apporte une rigueur juridique indispensable aux instances représentatives du personnel.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-[#B5345A]/10 flex items-center justify-center mb-5">
                <Briefcase className="h-5 w-5 text-[#B5345A]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Expérience Terrain</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                20 années dédiées à la formation professionnelle continue et au conseil juridique des élus CSE (ex-CE, CHSCT, DP).
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-[#4A4A4A]/10 flex items-center justify-center mb-5">
                <MapPin className="h-5 w-5 text-[#4A4A4A]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Ancrage & Agrément</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Organisme de formation agréé par arrêté préfectoral et référencé par la DREETS Occitanie. Il est basé à Montastruc-la-Conseillère, garantissant un service de proximité et de qualité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-12 lg:py-16 border-t border-border bg-primary/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground italic mb-6">
              &laquo;&nbsp;Ma mission : sécuriser vos actions et valoriser votre rôle au sein de l&apos;entreprise.&nbsp;&raquo;
            </p>
            <cite className="text-muted-foreground not-italic">— Corinne Pallut</cite>
          </blockquote>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Nos engagements
          </h2>
          <p className="text-lg text-muted-foreground mb-10">Pourquoi Co&apos;Form ?</p>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-secondary/40 border border-border/50">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">
                Une approche pédagogique personnalisée qui rend le droit accessible à tous les membres du CSE et aux salariés des services des ressources humaines.
              </p>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-secondary/40 border border-border/50">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">
                La garantie de support de formation numérique spécifique à votre CSE et l&apos;accès à des outils et des modèles pratiques pour être efficace.
              </p>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-secondary/40 border border-border/50">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">
                Une structure à taille humaine pour une réactivité optimale (réponse sous 24 à 48h).
              </p>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-secondary/40 border border-border/50">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <p className="text-foreground leading-relaxed">
                Une tarification modérée pour permettre à tous les CSE de se former, quel que soit leur budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-12 lg:py-16 bg-secondary/60">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-[#78B42B]/10 flex items-center justify-center mb-5 mx-auto">
                <Users className="h-5 w-5 text-[#78B42B]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">L&apos;accompagnement social et constructif</h3>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-[#B5345A]/10 flex items-center justify-center mb-5 mx-auto">
                <Heart className="h-5 w-5 text-[#B5345A]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">La bienveillance</h3>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl bg-[#4A4A4A]/10 flex items-center justify-center mb-5 mx-auto">
                <Handshake className="h-5 w-5 text-[#4A4A4A]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">La solidarité interpersonnelle</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 lg:py-16 border-t border-border">
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
              href="mailto:contactcoform@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 hover:bg-white/80 transition-colors"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">contactcoform@gmail.com</span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
