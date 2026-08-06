"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Layers3,
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
    id: "01",
    label: "Presenza digitale",
    title: "Siti vetrina",
    description:
      "Siti professionali pensati per raccontare il brand, valorizzare i servizi e trasformare le visite in opportunità commerciali.",
    icon: LayoutTemplate,
    features: [
      "Design personalizzato",
      "Esperienza mobile-first",
      "SEO tecnica di base",
      "Moduli contatto",
    ],
  },
  {
    id: "02",
    label: "Vendita online",
    title: "E-commerce",
    description:
      "Negozi digitali veloci, chiari e facili da gestire, progettati per accompagnare il cliente dal prodotto al pagamento.",
    icon: ShoppingCart,
    features: [
      "Catalogo prodotti",
      "Pagamenti online",
      "Gestione ordini",
      "Percorso d’acquisto",
    ],
  },
  {
    id: "03",
    label: "Processi aziendali",
    title: "Gestionali",
    description:
      "Piattaforme personalizzate per organizzare clienti, attività, dati e processi in un unico ambiente operativo.",
    icon: Workflow,
    features: [
      "Dashboard dedicate",
      "Ruoli e permessi",
      "Automazioni",
      "Dati centralizzati",
    ],
  },
];

const steps = [
  ["01", "Ascolto", "Analizziamo obiettivi, utenti, priorità e flussi operativi."],
  ["02", "Progetto", "Definiamo struttura, interfaccia e direzione visiva."],
  ["03", "Sviluppo", "Costruiamo una soluzione veloce, responsive e scalabile."],
  ["04", "Lancio", "Testiamo, ottimizziamo e pubblichiamo il progetto."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.2,
  });

  const orbY = useTransform(scrollYProgress, [0, 0.6], [0, -180]);
  const panelY = useTransform(scrollYProgress, [0, 0.35], [0, 90]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#031326] text-white">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-[#29b6ff] via-[#087cff] to-[#2345df]"
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#031326]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
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
            className="hidden h-11 items-center rounded-2xl bg-white px-5 text-sm font-extrabold text-[#06172d] transition hover:-translate-y-0.5 hover:bg-[#eef6ff] sm:inline-flex"
          >
            Parliamo del progetto
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
            aria-label="Apri menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-[#06182f] px-4 py-4 md:hidden"
          >
            <div className="grid gap-2">
              {[
                ["Servizi", "#servizi"],
                ["Metodo", "#metodo"],
                ["Contatti", "#contatti"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-bold"
                >
                  {label}
                </a>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[#087cff] px-5 py-4 font-bold"
              >
                <MessageCircle className="h-4 w-4" />
                Richiedi preventivo
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <section
        id="home"
        className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(0,135,255,0.34),transparent_27%),radial-gradient(circle_at_84%_15%,rgba(0,188,255,0.14),transparent_22%),linear-gradient(135deg,#021123_0%,#08233f_50%,#031326_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:70px_70px] sm:[background-size:100px_100px]" />

        <motion.div
          style={{ y: orbY }}
          className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full border border-[#2aaeff]/20 sm:h-[720px] sm:w-[720px]"
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1440px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="relative z-10"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-[#47b7ff]/20 bg-[#087cff]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#97d5ff] sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Web studio for modern business
            </div>

            <h1 className="max-w-5xl text-[3.15rem] font-black leading-[0.89] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[7rem]">
              Tre strumenti.
              <span className="block bg-gradient-to-r from-[#43bbff] via-[#087cff] to-[#405dff] bg-clip-text text-transparent">
                Un unico sistema.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Siti vetrina, e-commerce e gestionali progettati per lavorare
              insieme alla tua azienda: comunicare, vendere e organizzare.
            </p>

            <div className="mt-8 grid gap-3 sm:flex">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#087cff] px-7 text-base font-extrabold shadow-[0_18px_50px_rgba(8,124,255,0.28)] transition hover:-translate-y-0.5 hover:bg-[#0068df]"
              >
                Avvia un progetto
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#servizi"
                className="inline-flex h-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 text-base font-extrabold transition hover:bg-white/10"
              >
                Esplora i servizi
              </a>
            </div>

            <a
              href="#servizi"
              className="mt-12 inline-flex items-center gap-3 text-sm font-bold text-slate-400 transition hover:text-white"
            >
              Scopri il nostro approccio
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>

          <motion.div
            style={{ y: panelY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-[#087cff]/20 blur-3xl" />

            <div className="relative grid gap-4 rounded-[2.2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/35 backdrop-blur-2xl sm:rounded-[3rem] sm:p-5">
              <div className="rounded-[1.8rem] bg-[#087cff] p-6 sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-100">
                  Digital framework
                </p>
                <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight sm:text-4xl">
                  Una struttura digitale costruita attorno al business.
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.8rem] bg-white p-5 text-[#071a33] sm:p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#087cff]">
                    Comunicazione
                  </p>
                  <p className="mt-3 text-2xl font-black">Siti vetrina</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Identità, contenuti e conversione.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-white/10 bg-white/10 p-5 sm:p-6">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#79c8ff]">
                    Vendita
                  </p>
                  <p className="mt-3 text-2xl font-black">E-commerce</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Catalogo, ordini e pagamenti.
                  </p>
                </div>

                <div className="rounded-[1.8rem] border border-white/10 bg-[#06182f] p-5 sm:col-span-2 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#79c8ff]">
                        Organizzazione
                      </p>
                      <p className="mt-3 text-2xl font-black">Gestionali</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Dashboard, dati e processi operativi.
                      </p>
                    </div>
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#087cff]">
                      <Layers3 className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#05172d] py-5">
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="flex w-max items-center gap-12 whitespace-nowrap px-6 text-sm font-black uppercase tracking-[0.22em] text-[#8fcfff]"
          >
            {[...Array(2)]
              .flatMap(() => [
                "Siti vetrina",
                "E-commerce",
                "Gestionali",
                "Mobile-first",
                "Performance",
                "Design su misura",
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
        className="relative bg-[#f5f8fd] px-4 py-16 text-[#071a33] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#006bff_1px,transparent_1px),linear-gradient(to_bottom,#006bff_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="mb-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#087cff] sm:text-sm">
                Servizi
              </p>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Una struttura modulare, non un template standard.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
              Ogni soluzione viene progettata attorno agli obiettivi, ai
              contenuti e ai processi reali dell’attività.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[2.2rem] border border-[#d9e6f7] bg-white p-6 shadow-[0_24px_80px_rgba(15,65,130,0.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_90px_rgba(15,65,130,0.12)] sm:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#087cff]/8 blur-2xl transition group-hover:bg-[#087cff]/14" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black text-[#087cff]">
                        {service.id}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#087cff] transition group-hover:bg-[#087cff] group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-[#087cff]">
                      {service.label}
                    </p>

                    <h3 className="mt-2 text-3xl font-black tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-8 grid gap-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-2xl bg-[#f7faff] p-3"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-[#087cff] shadow-sm">
                            <Check className="h-4 w-4" />
                          </span>
                          <span className="text-sm font-bold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="metodo"
        className="relative overflow-hidden bg-white px-4 py-16 text-[#071a33] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#087cff]/8 blur-3xl" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#087cff] sm:text-sm">
              Metodo
            </p>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Quattro fasi. Un percorso trasparente.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text], index) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative rounded-[2rem] border border-[#dce8f7] bg-[#f8fbff] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087cff] text-sm font-black text-white">
                  {number}
                </div>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contatti"
        className="relative overflow-hidden bg-[#031326] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(0,126,255,0.24),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(28,176,255,0.12),transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:78px_78px]" />

        <div className="relative mx-auto grid max-w-[1440px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.07] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-7 sm:p-10 lg:p-14">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#7bc9ff] sm:text-sm">
              Contatti
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Costruiamo il prossimo strumento digitale della tua attività.
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-slate-300">
              Raccontaci il progetto. Ti aiutiamo a definire la soluzione più
              adatta tra sito vetrina, e-commerce e gestionale.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-white p-7 text-[#071a33] sm:p-10 lg:p-14">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#087cff] px-6 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#0068df]"
            >
              <MessageCircle className="h-5 w-5" />
              Richiedi un preventivo
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={EMAIL_URL}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-[#d8e6f8] px-6 text-base font-extrabold transition hover:bg-[#eef6ff]"
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
