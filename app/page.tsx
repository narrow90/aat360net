"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  LayoutTemplate,
  Mail,
  Menu,
  MessageCircle,
  ShoppingCart,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/393793897635?text=Ciao%20AAT%20360%20NetworkLab%2C%20vorrei%20richiedere%20un%20preventivo.";

const EMAIL_URL =
  "mailto:info@aat360networklab.it?subject=Richiesta%20preventivo%20AAT%20360%20NetworkLab&body=Ciao%2C%20vorrei%20ricevere%20informazioni%20per%20un%20nuovo%20progetto.";

const services = [
  {
    title: "Siti vetrina",
    subtitle: "Per presentare il tuo business",
    text: "Siti professionali, veloci e responsive per comunicare con chiarezza, valorizzare i servizi e generare nuovi contatti.",
    icon: LayoutTemplate,
    points: [
      "Design personalizzato",
      "Ottimizzazione mobile",
      "Struttura SEO-ready",
      "Form contatti e CTA",
    ],
  },
  {
    title: "E-commerce",
    subtitle: "Per vendere online",
    text: "Negozi digitali chiari e performanti, semplici da gestire e progettati per accompagnare il cliente fino all’acquisto.",
    icon: ShoppingCart,
    points: [
      "Catalogo prodotti",
      "Pagamenti online",
      "Gestione ordini",
      "Esperienza d’acquisto fluida",
    ],
  },
  {
    title: "Gestionali",
    subtitle: "Per organizzare i processi",
    text: "Software su misura per centralizzare clienti, dati, attività e flussi operativi in un unico ambiente professionale.",
    icon: Workflow,
    points: [
      "Dashboard personalizzate",
      "Ruoli e permessi",
      "Automazioni",
      "Dati centralizzati",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Analisi",
    text: "Studiamo obiettivi, pubblico, contenuti e processi reali.",
  },
  {
    number: "02",
    title: "Progettazione",
    text: "Definiamo struttura, interfaccia e percorso utente.",
  },
  {
    number: "03",
    title: "Sviluppo",
    text: "Realizziamo una soluzione moderna, stabile e responsive.",
  },
  {
    number: "04",
    title: "Lancio",
    text: "Testiamo ogni dettaglio e pubblichiamo il progetto.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 25,
    mass: 0.2,
  });

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#071a33]">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-[#2bb5ff] via-[#087cff] to-[#2142d6]"
      />

      <div className="hidden bg-[#06172d] text-white md:block">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-6 py-2 text-xs font-semibold">
          <p>Soluzioni digitali per aziende e professionisti</p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+393793897635"
              className="transition hover:text-[#79c8ff]"
            >
              +39 379 389 7635
            </a>
            <a
              href={EMAIL_URL}
              className="transition hover:text-[#79c8ff]"
            >
              info@aat360networklab.it
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#dce8f8] bg-white/90 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center">
            <Image
              src="/logo-aat360.png"
              alt="AAT 360 NetworkLab"
              width={220}
              height={96}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex">
            <a href="#servizi" className="relative transition hover:text-[#087cff] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#087cff] after:transition-all after:duration-300 hover:after:w-full">
              Servizi
            </a>
            <a href="#vantaggi" className="relative transition hover:text-[#087cff] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#087cff] after:transition-all after:duration-300 hover:after:w-full">
              Perché noi
            </a>
            <a href="#metodo" className="relative transition hover:text-[#087cff] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#087cff] after:transition-all after:duration-300 hover:after:w-full">
              Metodo
            </a>
            <a href="#contatti" className="relative transition hover:text-[#087cff] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#087cff] after:transition-all after:duration-300 hover:after:w-full">
              Contatti
            </a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden h-11 items-center justify-center gap-2 rounded-xl bg-[#087cff] px-5 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#0067df] hover:shadow-xl hover:shadow-blue-600/30 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Preventivo gratuito
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce8f8] bg-[#f8fbff] md:hidden"
            aria-label="Apri menu"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-[#dce8f8] bg-white px-4 py-4 md:hidden"
          >
            <nav className="grid gap-2">
              {[
                ["Servizi", "#servizi"],
                ["Perché noi", "#vantaggi"],
                ["Metodo", "#metodo"],
                ["Contatti", "#contatti"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-[#f6f9fe] px-5 py-4 font-bold"
                >
                  {label}
                </a>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#087cff] px-5 py-4 font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Preventivo gratuito
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <section
        id="home"
        className="relative overflow-hidden bg-[#f7faff] px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24"
      >
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#006bff_1px,transparent_1px),linear-gradient(to_bottom,#006bff_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[#087cff]/10 blur-3xl sm:h-[620px] sm:w-[620px]" />
        <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-[#2bb5ff]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#cfe2fb] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#087cff] shadow-sm sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Siti web e software su misura
            </div>

            <h1 className="max-w-5xl text-[3rem] font-black leading-[0.95] tracking-[-0.06em] text-[#06172d] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              Costruiamo strumenti digitali
              <span className="block text-[#087cff]">
                per far crescere il business.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Realizziamo siti vetrina, e-commerce e gestionali professionali,
              progettati per comunicare meglio, vendere online e semplificare
              il lavoro quotidiano.
            </p>

            <div className="mt-8 grid gap-3 sm:flex">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#087cff] px-7 text-base font-extrabold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#0067df] hover:shadow-2xl hover:shadow-blue-600/30"
              >
                Richiedi un preventivo
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#servizi"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-[#cfdff5] bg-white px-7 text-base font-extrabold text-[#06172d] transition duration-300 hover:-translate-y-1 hover:border-[#087cff]/40 hover:bg-[#eef6ff] hover:shadow-lg"
              >
                Scopri i servizi
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Design personalizzato",
                "Ottimizzazione mobile",
                "Tecnologie scalabili",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-bold text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#087cff]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-[#087cff]/12 blur-3xl" />

            <div className="group relative overflow-hidden rounded-[2rem] border border-[#d8e6f8] bg-white p-4 shadow-[0_35px_90px_rgba(17,67,130,0.14)] transition duration-500 hover:-translate-y-2 hover:rotate-[0.3deg] hover:shadow-[0_45px_110px_rgba(17,67,130,0.20)] sm:rounded-[2.5rem] sm:p-5">
              <div className="rounded-[1.6rem] bg-[#06172d] p-6 text-white sm:rounded-[2rem] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#79c8ff]">
                  AAT 360 NetworkLab
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Tre servizi, un unico partner digitale.
                </h2>

                <div className="mt-8 grid gap-3">
                  {[
                    ["Siti vetrina", "Comunicazione e acquisizione contatti"],
                    ["E-commerce", "Prodotti, ordini e pagamenti"],
                    ["Gestionali", "Dati, clienti e processi"],
                  ].map(([title, text], index) => (
                    <motion.div
                      key={title}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:translate-x-1 hover:border-[#79c8ff]/30 hover:bg-white/[0.10]"
                    >
                      <div>
                        <p className="font-black">{title}</p>
                        <p className="mt-1 text-sm text-slate-400">{text}</p>
                      </div>
                      <span className="text-xs font-black text-[#79c8ff]">
                        0{index + 1}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#dce8f8] bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1380px] gap-4 text-center sm:grid-cols-3">
          {[
            ["Mobile-first", "Perfetto su ogni dispositivo"],
            ["SEO-ready", "Struttura predisposta per Google"],
            ["Su misura", "Niente soluzioni standardizzate"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="group rounded-xl bg-[#f8fbff] px-5 py-4 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <p className="font-black text-[#06172d]">{title}</p>
              <p className="mt-1 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="servizi"
        className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#087cff] sm:text-sm">
              I nostri servizi
            </p>
            <h2 className="mx-auto max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.045em] text-[#06172d] sm:text-5xl md:text-6xl">
              Soluzioni concrete per comunicare, vendere e organizzare.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[2rem] border border-[#dce8f8] bg-[#f8fbff] transition duration-500 hover:-translate-y-3 hover:rotate-[0.25deg] hover:border-[#087cff]/30 hover:bg-white hover:shadow-[0_30px_90px_rgba(17,67,130,0.16)]"
                >
                  <div className="border-b border-[#dce8f8] p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#087cff] shadow-sm transition duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#087cff] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/20">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-black text-[#087cff]/50">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-[#087cff]">
                      {service.subtitle}
                    </p>
                    <h3 className="mt-2 text-3xl font-black text-[#06172d]">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">
                      {service.text}
                    </p>
                  </div>

                  <div className="grid gap-3 p-6 sm:p-8">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 rounded-xl bg-white p-3 transition duration-300 group-hover:translate-x-1 group-hover:bg-[#f0f6ff]"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#087cff]" />
                        <span className="text-sm font-bold">{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="vantaggi"
        className="relative overflow-hidden bg-[#06172d] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(0,126,255,0.24),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(22,171,255,0.12),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#79c8ff] sm:text-sm">
              Perché AAT 360
            </p>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Un progetto seguito con metodo e visione.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Ogni soluzione nasce da obiettivi concreti, non da un template
              preconfezionato.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Analisi reale", "Partiamo dalle esigenze del business."],
              ["02", "Design professionale", "Interfacce chiare, moderne e coerenti."],
              ["03", "Mobile-first", "Esperienza ottimizzata per smartphone."],
              ["04", "Scalabilità", "Soluzioni pronte a evolvere nel tempo."],
            ].map(([number, title, text]) => (
              <motion.div
                key={number}
                whileHover={{ y: -4 }}
                className="group rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#79c8ff]/30 hover:bg-white/[0.09] hover:shadow-xl hover:shadow-black/10"
              >
                <p className="text-sm font-black text-[#79c8ff]">{number}</p>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-2 leading-7 text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="metodo"
        className="bg-[#f7faff] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#087cff] sm:text-sm">
              Come lavoriamo
            </p>
            <h2 className="text-4xl font-black leading-[0.98] tracking-[-0.045em] text-[#06172d] sm:text-5xl md:text-6xl">
              Un processo chiaro, dall’idea alla pubblicazione.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[1.7rem] border border-[#dce8f8] bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-[#087cff]/30 hover:shadow-xl hover:shadow-blue-100/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087cff] text-sm font-black text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                  {step.number}
                </div>
                <h3 className="mt-8 text-2xl font-black text-[#06172d]">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contatti"
        className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1380px] overflow-hidden rounded-[2.2rem] bg-[#087cff] shadow-[0_30px_90px_rgba(0,94,210,0.20)] sm:rounded-[2.8rem] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden p-7 text-white sm:p-10 lg:p-14">
            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full border border-white/20" />
            <div className="absolute -bottom-20 -right-12 h-60 w-60 rounded-full border border-white/15" />

            <div className="relative">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100 sm:text-sm">
                Richiedi informazioni
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Hai un progetto digitale da realizzare?
              </h2>
              <p className="mt-6 max-w-xl leading-7 text-blue-50">
                Raccontaci cosa vuoi costruire. Ti aiutiamo a individuare la
                soluzione più adatta alla tua attività.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-white p-7 sm:p-10 lg:p-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#087cff] px-6 text-base font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#0067df] hover:shadow-xl hover:shadow-blue-500/25"
            >
              <MessageCircle className="h-5 w-5" />
              Richiedi un preventivo
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={EMAIL_URL}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-[#d8e6f8] px-6 text-base font-extrabold text-[#071a33] transition duration-300 hover:-translate-y-1 hover:border-[#087cff]/40 hover:bg-[#eef6ff] hover:shadow-lg"
            >
              <Mail className="h-5 w-5 text-[#087cff]" />
              Contattaci via email
            </a>

            <div className="mt-4 rounded-xl bg-[#f6f9fe] p-4 text-sm text-slate-600">
              <p>
                <strong className="text-[#071a33]">WhatsApp:</strong>{" "}
                +39 379 389 7635
              </p>
              <p className="mt-1 break-all">
                <strong className="text-[#071a33]">Email:</strong>{" "}
                info@aat360networklab.it
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
