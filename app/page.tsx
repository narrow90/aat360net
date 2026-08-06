"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  LayoutDashboard,
  LayoutTemplate,
  Mail,
  Menu,
  MessageCircle,
  ShoppingBag,
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
    number: "01",
    eyebrow: "Comunicare",
    title: "Siti vetrina",
    description:
      "Esperienze web professionali, veloci e responsive per presentare il brand, valorizzare i servizi e generare nuovi contatti.",
    icon: LayoutTemplate,
    features: [
      "Design su misura",
      "Struttura SEO-ready",
      "Mobile-first",
      "Moduli di conversione",
    ],
  },
  {
    number: "02",
    eyebrow: "Vendere",
    title: "E-commerce",
    description:
      "Negozi online chiari e performanti, progettati per accompagnare l’utente dal catalogo fino all’acquisto.",
    icon: ShoppingBag,
    features: [
      "Catalogo prodotti",
      "Pagamenti online",
      "Gestione ordini",
      "Esperienza mobile",
    ],
  },
  {
    number: "03",
    eyebrow: "Organizzare",
    title: "Gestionali",
    description:
      "Software costruiti intorno ai processi aziendali per centralizzare dati, attività, clienti e flussi operativi.",
    icon: Workflow,
    features: [
      "Dashboard dedicate",
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
    text: "Definiamo obiettivi, pubblico, funzionalità e priorità reali del progetto.",
  },
  {
    number: "02",
    title: "Design",
    text: "Costruiamo una struttura chiara e un’identità digitale coerente con il brand.",
  },
  {
    number: "03",
    title: "Sviluppo",
    text: "Realizziamo una soluzione veloce, responsive e semplice da utilizzare.",
  },
  {
    number: "04",
    title: "Lancio",
    text: "Testiamo ogni dettaglio e prepariamo il progetto per la pubblicazione.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.25,
  });

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 110]);
  const glowY = useTransform(scrollYProgress, [0, 0.5], [0, -160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.26], [1, 0.7]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#04152a] text-white">
      <motion.div
        className="fixed left-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-[#00a7ff] via-[#006bff] to-[#163ccf]"
        style={{ scaleX: progress }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#04152a]/78 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center" onClick={closeMenu}>
            <Image
              src="/logo-aat360.png"
              alt="AAT 360 NetworkLab"
              width={210}
              height={94}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>

          <nav className="hidden items-center gap-9 text-sm font-semibold text-slate-300 md:flex">
            <a href="#servizi" className="transition hover:text-white">
              Servizi
            </a>
            <a href="#metodo" className="transition hover:text-white">
              Metodo
            </a>
            <a href="#contatti" className="transition hover:text-white">
              Contatti
            </a>
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center justify-center rounded-2xl bg-[#087cff] px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#0067df] sm:inline-flex"
          >
            Richiedi preventivo
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
            aria-label="Apri menu"
            aria-expanded={menuOpen}
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-[#061a33] px-4 py-4 md:hidden"
          >
            <nav className="grid gap-2">
              {[
                ["Servizi", "#servizi"],
                ["Metodo", "#metodo"],
                ["Contatti", "#contatti"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-bold"
                >
                  {label}
                </a>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[#087cff] px-5 py-4 font-bold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Richiedi preventivo
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(0,136,255,0.34),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(0,181,255,0.16),transparent_25%),linear-gradient(135deg,#031225_0%,#082447_52%,#04152a_100%)]" />
        <div className="absolute inset-0 opacity-[0.075] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:64px_64px] sm:[background-size:92px_92px]" />

        <motion.div
          style={{ y: glowY }}
          className="absolute -right-24 top-24 h-[420px] w-[420px] rounded-full border border-[#1598ff]/20 sm:h-[620px] sm:w-[620px]"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute right-[7%] top-[18%] hidden h-64 w-64 rounded-full border border-dashed border-[#40aeff]/20 lg:block"
        />

        <div className="relative mx-auto grid w-full max-w-[1380px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div
            style={{ opacity: heroOpacity }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-[#4aadff]/20 bg-[#0785ff]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#8dceff] sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Web solutions for modern business
            </div>

            <h1 className="max-w-4xl text-[3.2rem] font-black leading-[0.9] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.8rem]">
              Il digitale
              <span className="block text-white">che crea valore.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Progettiamo siti vetrina, e-commerce e gestionali capaci di
              comunicare meglio, vendere online e semplificare i processi
              aziendali.
            </p>

            <div className="mt-8 grid gap-3 sm:flex">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 w-full items-center justify-center rounded-2xl bg-[#087cff] px-7 text-base font-bold text-white shadow-xl shadow-blue-700/25 transition hover:-translate-y-0.5 hover:bg-[#0067df] sm:w-auto"
              >
                Inizia un progetto
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#servizi"
                className="inline-flex h-14 w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Esplora i servizi
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-400">
              {["Mobile-first", "SEO-ready", "Design su misura"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#33aaff]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ y: heroY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-[#006bff]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition duration-500 hover:-translate-y-1 sm:rounded-[2.8rem] sm:p-5">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-white p-5 text-[#071a33] sm:rounded-[2.3rem] sm:p-7">
                <div className="absolute right-[-70px] top-[-80px] h-56 w-56 rounded-full bg-[#138eff]/12 blur-2xl" />

                <div className="relative flex items-start justify-between gap-4 border-b border-[#dbe8fb] pb-6">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-[#087cff]">
                      AAT 360 Digital Core
                    </p>
                    <h2 className="mt-3 max-w-lg text-2xl font-black leading-tight sm:text-4xl">
                      Tre soluzioni. Un’unica direzione digitale.
                    </h2>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#087cff] text-white shadow-lg shadow-blue-500/25">
                    <LayoutDashboard className="h-5 w-5" />
                  </div>
                </div>

                <div className="relative mt-5 grid gap-3">
                  {[
                    {
                      title: "Sito vetrina",
                      text: "Presenta il brand e genera contatti.",
                      icon: LayoutTemplate,
                    },
                    {
                      title: "E-commerce",
                      text: "Vendi prodotti con un’esperienza fluida.",
                      icon: ShoppingBag,
                    },
                    {
                      title: "Gestionale",
                      text: "Organizza dati e processi aziendali.",
                      icon: Workflow,
                    },
                  ].map(({ title, text, icon: Icon }, index) => (
                    <motion.div
                      key={title}
                      whileHover={{ x: 5 }}
                      className="group grid grid-cols-[44px_1fr_auto] items-center gap-3 rounded-2xl border border-[#dbe8fb] bg-[#f6faff] p-3.5 sm:grid-cols-[52px_1fr_auto] sm:p-4"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#087cff] shadow-sm sm:h-12 sm:w-12">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="font-black">{title}</p>
                        <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                          {text}
                        </p>
                      </div>

                      <span className="text-xs font-black text-[#087cff]/50">
                        0{index + 1}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="relative mt-5 flex items-center justify-between rounded-2xl bg-[#061a33] p-4 text-white">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#79c8ff]">
                      Focus
                    </p>
                    <p className="mt-1 font-bold">
                      Soluzioni costruite sul tuo business
                    </p>
                  </div>

                  <ChevronRight className="h-5 w-5 text-[#51b4ff]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#04182f] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1380px] gap-3 sm:grid-cols-3">
          {[
            ["01", "Identità", "Design coerente con il brand"],
            ["02", "Performance", "Esperienze rapide e responsive"],
            ["03", "Scalabilità", "Soluzioni pronte a crescere"],
          ].map(([number, title, text]) => (
            <motion.div
              key={number}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-[#68c2ff]">
                  {number}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#168eff]/60 to-transparent" />
              </div>

              <p className="mt-5 text-lg font-black">{title}</p>
              <p className="mt-1 text-sm text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#05182f] py-5">
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center gap-12 whitespace-nowrap px-6 text-sm font-black uppercase tracking-[0.22em] text-[#8fcfff]"
          >
            {[...Array(2)]
              .flatMap(() => [
                "Siti vetrina",
                "E-commerce",
                "Gestionali",
                "Mobile-first",
                "Design su misura",
                "Performance",
              ])
              .map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center gap-12">
                  <span>{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#087cff]" />
                </div>
              ))}
          </motion.div>
        </div>
      </section>

      <section
        id="servizi"
        className="relative bg-[#f6f9fe] px-4 py-16 text-[#071a33] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#006bff_1px,transparent_1px),linear-gradient(to_bottom,#006bff_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto max-w-[1380px]">
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#087cff] sm:text-sm">
                Soluzioni
              </p>

              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Specializzazione, non servizi generici.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
              Non offriamo servizi generici. Progettiamo strumenti digitali
              mirati a comunicare meglio, vendere online e semplificare il
              lavoro quotidiano.
            </p>
          </div>

          <div className="grid gap-5">
            {services.map(
              (
                {
                  number,
                  eyebrow,
                  title,
                  description,
                  icon: Icon,
                  features,
                },
                index
              ) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-[#d8e6f8] bg-white shadow-[0_20px_70px_rgba(15,65,130,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(15,65,130,0.12)] sm:rounded-[2.6rem]"
                >
                  <div className="absolute right-[-100px] top-[-120px] h-72 w-72 rounded-full bg-[#087cff]/10 blur-2xl transition duration-500 group-hover:bg-[#087cff]/15" />

                  <div className="relative grid gap-7 p-6 sm:p-9 lg:grid-cols-[110px_0.9fr_1.1fr] lg:items-center lg:p-11">
                    <div className="flex items-center justify-between lg:block">
                      <span className="text-4xl font-black text-[#087cff]/25 transition group-hover:text-[#087cff]">
                        {number}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#087cff] transition group-hover:bg-[#087cff] group-hover:text-white lg:mt-10">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#087cff]">
                        {eyebrow}
                      </p>

                      <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                        {title}
                      </h3>

                      <p className="mt-4 max-w-xl leading-7 text-slate-600">
                        {description}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-2xl border border-[#e1ebf9] bg-[#f8fbff] p-4"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#087cff] shadow-sm">
                            <Check className="h-4 w-4" />
                          </span>

                          <span className="text-sm font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </div>
        </div>
      </section>

      <section
        id="metodo"
        className="relative overflow-hidden bg-white px-4 py-16 text-[#071a33] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute right-[-15%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[#178eff]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1380px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#087cff] sm:text-sm">
              Metodo
            </p>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Un processo chiaro, dall’idea al lancio.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Ogni fase è pensata per trasformare l’idea iniziale in un prodotto
              digitale concreto, coerente e pronto a crescere.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-gradient-to-b from-[#087cff] via-[#8bcaff] to-transparent sm:block" />

            <div className="grid gap-4">
              {process.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="relative grid gap-4 rounded-[1.8rem] border border-[#dce8f7] bg-[#f8fbff] p-5 sm:grid-cols-[64px_1fr] sm:items-center sm:p-7"
                >
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087cff] text-sm font-black text-white shadow-lg shadow-blue-500/20">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#04152a] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,126,255,0.20),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(24,166,255,0.12),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="relative mx-auto grid max-w-[1380px] gap-8 rounded-[2.2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl sm:rounded-[3rem] sm:p-10 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:p-14">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#75c6ff] sm:text-sm">
              Il risultato
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              Un progetto digitale pensato per produrre valore.
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              "Comunicazione più efficace",
              "Esperienza mobile ottimizzata",
              "Processi più semplici",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <BarChart3 className="h-5 w-5 shrink-0 text-[#58b8ff]" />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contatti"
        className="bg-[#f6f9fe] px-4 py-16 text-[#071a33] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1380px] overflow-hidden rounded-[2.2rem] bg-[#087cff] shadow-[0_30px_90px_rgba(0,94,210,0.22)] sm:rounded-[3rem] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden p-7 text-white sm:p-10 lg:p-14">
            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full border border-white/20" />
            <div className="absolute -bottom-20 -right-12 h-60 w-60 rounded-full border border-white/15" />

            <div className="relative">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100 sm:text-sm">
                Parliamo del tuo progetto
              </p>

              <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                Sito vetrina, e-commerce o gestionale?
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-blue-50">
                Raccontaci cosa vuoi realizzare. Ti aiutiamo a definire una
                soluzione chiara, professionale e adatta alla tua attività.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-white p-7 sm:p-10 lg:p-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#087cff] px-6 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0067df]"
            >
              <MessageCircle className="h-5 w-5" />
              Richiedi un preventivo
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={EMAIL_URL}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-[#d8e6f8] px-6 text-base font-bold text-[#071a33] transition hover:-translate-y-0.5 hover:bg-[#eef6ff]"
            >
              <Mail className="h-5 w-5 text-[#087cff]" />
              Contattaci via email
            </a>

            <div className="mt-4 rounded-2xl bg-[#f6f9fe] p-4 text-sm text-slate-600">
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
