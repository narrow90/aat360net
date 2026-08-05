'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  LayoutTemplate,
  Menu,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    number: "01",
    title: "Siti vetrina",
    subtitle: "Presenza online professionale",
    description:
      "Siti moderni, responsive e ottimizzati per presentare la tua attività, valorizzare i servizi e generare nuovi contatti.",
    icon: LayoutTemplate,
    features: [
      "Design personalizzato",
      "Ottimizzazione mobile",
      "Struttura SEO-ready",
      "Moduli contatto e conversione",
    ],
  },
  {
    number: "02",
    title: "Siti e-commerce",
    subtitle: "Vendita online semplice e scalabile",
    description:
      "E-commerce progettati per offrire un’esperienza d’acquisto chiara, veloce e professionale su ogni dispositivo.",
    icon: ShoppingCart,
    features: [
      "Catalogo prodotti",
      "Pagamenti online",
      "Gestione ordini",
      "Esperienza mobile-first",
    ],
  },
  {
    number: "03",
    title: "Gestionali",
    subtitle: "Processi digitali su misura",
    description:
      "Software gestionali costruiti intorno al tuo modo di lavorare, per organizzare dati, clienti, attività e processi aziendali.",
    icon: Workflow,
    features: [
      "Dashboard personalizzate",
      "Automazione dei processi",
      "Gestione clienti e dati",
      "Accessi e ruoli dedicati",
    ],
  },
];

const benefits = [
  "Progetto costruito sulle reali esigenze",
  "Interfacce semplici e professionali",
  "Esperienza ottimizzata per smartphone",
  "Tecnologie moderne e scalabili",
];

export default function AAT360NetworkLab() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06172d] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#06172d]/85 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8 lg:py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#006BFF] shadow-lg shadow-[#006BFF]/30 sm:h-11 sm:w-11">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-black leading-none sm:text-lg">
                AAT 360
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#66b2ff] sm:text-xs">
                NetworkLab
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#servizi" className="transition hover:text-white">
              Servizi
            </a>
            <a href="#approccio" className="transition hover:text-white">
              Approccio
            </a>
            <a href="#contatti" className="transition hover:text-white">
              Contatti
            </a>
          </nav>

          <Button className="hidden rounded-2xl bg-white px-5 font-bold text-[#06172d] hover:bg-[#eef5ff] sm:flex">
            Richiedi preventivo
          </Button>

          <button
            className="rounded-2xl border border-white/10 bg-white/5 p-2 md:hidden"
            aria-label="Apri menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen overflow-hidden px-4 pb-12 pt-24 sm:px-5 sm:pt-32 lg:px-8 lg:pt-40"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(0,107,255,0.34),transparent_28%),radial-gradient(circle_at_90%_20%,rgba(102,178,255,0.18),transparent_24%),linear-gradient(135deg,#06172d_0%,#082447_52%,#06172d_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] sm:[background-size:90px_90px]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-3 py-2 text-xs font-bold text-[#b8d9ff] backdrop-blur-xl sm:mb-8 sm:px-4 sm:text-sm">
              <Store className="h-4 w-4" />
              Soluzioni web per aziende e professionisti
            </div>

            <h1 className="text-[3rem] font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
              Siti che
              <br />
              presentano,
              <span className="block bg-gradient-to-r from-[#66b2ff] to-white bg-clip-text text-transparent">
                vendono e gestiscono.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:mt-8 sm:text-lg sm:leading-8">
              Progettiamo siti vetrina, e-commerce e gestionali su misura per
              trasformare la tua presenza digitale in uno strumento concreto
              per il business.
            </p>

            <div className="mt-7 grid gap-3 sm:mt-9 sm:flex sm:flex-row">
              <Button className="h-13 rounded-2xl bg-[#006BFF] px-6 text-sm font-bold hover:bg-[#0052c4] sm:h-14 sm:px-8 sm:text-base">
                Parliamo del progetto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="h-13 rounded-2xl border-white/15 bg-white/5 px-6 text-sm font-bold text-white hover:bg-white/10 sm:h-14 sm:px-8 sm:text-base"
              >
                Scopri i servizi
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#006BFF]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-4 text-[#071a33] shadow-2xl shadow-black/25 sm:rounded-[2.5rem] sm:p-6">
              <div className="rounded-[1.5rem] border border-[#d8e6ff] bg-[#f8fbff] p-5 sm:p-7">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#006BFF] sm:text-sm">
                      AAT 360 Digital Suite
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      Tre soluzioni, un unico partner
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#006BFF] text-white">
                    <SlidersHorizontal className="h-5 w-5" />
                  </div>
                </div>

                <h2 className="text-2xl font-black leading-tight sm:text-4xl">
                  Tutto ciò che serve per presentare, vendere e organizzare.
                </h2>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  ["Siti vetrina", "Comunicazione e acquisizione contatti"],
                  ["E-commerce", "Catalogo, ordini e pagamenti"],
                  ["Gestionali", "Processi, dati e automazioni"],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 rounded-2xl border border-[#d8e6ff] bg-white p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eef5ff] text-xs font-black text-[#006BFF]">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-black">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="servizi"
        className="bg-[#f8fbff] px-4 py-14 text-[#071a33] sm:px-5 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl sm:mb-16">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#006BFF] sm:text-sm">
              Cosa realizziamo
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Tre servizi specializzati per far crescere la tua attività.
            </h2>
          </div>

          <div className="grid gap-5">
            {services.map(
              ({ number, title, subtitle, description, icon: Icon, features }) => (
                <article
                  key={title}
                  className="group overflow-hidden rounded-[1.8rem] border border-[#d8e6ff] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,80,255,0.10)] sm:rounded-[2.3rem]"
                >
                  <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[100px_0.85fr_1.15fr] lg:items-center lg:p-10">
                    <div className="flex items-center justify-between lg:block">
                      <span className="text-3xl font-black text-[#006BFF]/30 group-hover:text-[#006BFF] sm:text-4xl">
                        {number}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef5ff] text-[#006BFF] lg:mt-8">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#006BFF]">
                        {subtitle}
                      </p>
                      <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                        {title}
                      </h3>
                      <p className="mt-4 leading-7 text-slate-600">
                        {description}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-2xl bg-[#f8fbff] p-4"
                        >
                          <Check className="h-4 w-4 shrink-0 text-[#006BFF]" />
                          <span className="text-sm font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section
        id="approccio"
        className="relative overflow-hidden bg-white px-4 py-14 text-[#071a33] sm:px-5 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="absolute right-0 top-0 hidden h-full w-1/3 bg-[#eef5ff] lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#006BFF] sm:text-sm">
              Il nostro approccio
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
              Meno servizi generici. Più specializzazione.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Ci concentriamo su ciò che sappiamo fare meglio: costruire
              strumenti digitali chiari, professionali e realmente utili.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="rounded-[1.7rem] border border-[#d8e6ff] bg-white p-6 shadow-sm"
              >
                <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#006BFF] text-sm font-black text-white">
                  0{index + 1}
                </div>
                <p className="text-lg font-black">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06172d] px-4 py-14 sm:px-5 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-12">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#66b2ff] sm:text-sm">
              Dal progetto al risultato
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-6xl">
              Una soluzione costruita intorno al tuo business.
            </h2>
          </div>

          <div className="flex flex-col justify-center gap-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            <p>
              Analizziamo le esigenze, definiamo il percorso e realizziamo una
              soluzione digitale semplice da usare e pronta a crescere.
            </p>
            <div className="flex items-center gap-4 rounded-2xl bg-white/8 p-5 ring-1 ring-white/10">
              <BarChart3 className="h-7 w-7 text-[#66b2ff]" />
              <span className="font-bold text-white">
                Strategia, design e sviluppo in un unico progetto
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contatti"
        className="bg-[#f8fbff] px-4 py-14 text-[#071a33] sm:px-5 sm:py-20 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#006BFF] shadow-[0_30px_80px_rgba(0,80,255,0.18)] sm:rounded-[2.5rem] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 text-white sm:p-8 lg:p-14">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100 sm:text-sm">
              Contatti
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-6xl">
              Hai bisogno di un sito, un e-commerce o un gestionale?
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-blue-50">
              Raccontaci il progetto e individuiamo insieme la soluzione più
              adatta alla tua attività.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-white p-6 sm:p-8 lg:p-14">
            <Button className="h-13 rounded-2xl bg-[#006BFF] text-sm font-bold hover:bg-[#0052c4] sm:h-14 sm:text-base">
              Richiedi un preventivo
            </Button>
            <Button
              variant="outline"
              className="h-13 rounded-2xl border-[#d8e6ff] text-sm font-bold text-[#071a33] hover:bg-[#eef5ff] sm:h-14 sm:text-base"
            >
              Parliamo del progetto
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}


