"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  LayoutTemplate,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
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
    number: "01",
    label: "Comunicare",
    title: "Siti vetrina",
    text: "Esperienze digitali professionali, veloci e responsive per valorizzare il brand, presentare i servizi e generare nuovi contatti.",
    image: "/mockup-vetrina.svg",
    icon: LayoutTemplate,
    features: [
      "Design personalizzato",
      "Mobile-first",
      "SEO-ready",
      "Form e CTA",
    ],
  },
  {
    number: "02",
    label: "Vendere",
    title: "E-commerce",
    text: "Negozi online chiari e performanti, progettati per accompagnare l’utente dal catalogo fino all’acquisto.",
    image: "/mockup-ecommerce.svg",
    icon: ShoppingCart,
    features: [
      "Catalogo prodotti",
      "Pagamenti online",
      "Gestione ordini",
      "UX di acquisto",
    ],
  },
  {
    number: "03",
    label: "Organizzare",
    title: "Gestionali",
    text: "Software su misura per centralizzare clienti, dati, attività e processi in un’unica piattaforma operativa.",
    image: "/mockup-gestionale.svg",
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
  {
    number: "01",
    title: "Analisi",
    text: "Obiettivi, utenti, contenuti, processi e priorità.",
  },
  {
    number: "02",
    title: "Design",
    text: "Architettura, interfaccia, identità e percorso utente.",
  },
  {
    number: "03",
    title: "Sviluppo",
    text: "Realizzazione, integrazioni, test e ottimizzazione.",
  },
  {
    number: "04",
    title: "Lancio",
    text: "Pubblicazione, verifica e preparazione alla crescita.",
  },
];

const benefits = [
  "Design su misura",
  "Esperienza mobile-first",
  "Performance elevate",
  "Struttura scalabile",
];

function MagneticLink({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const classes = {
    primary:
      "bg-[#087cff] text-white shadow-[0_18px_50px_rgba(8,124,255,0.28)] hover:bg-[#0068df]",
    secondary:
      "border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.11]",
    light:
      "bg-white text-[#06172d] hover:bg-[#eef6ff]",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((event.clientX - rect.left - rect.width / 2) * 0.13);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.13);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`group inline-flex h-14 items-center justify-center gap-2 rounded-2xl px-7 text-sm font-extrabold transition duration-300 sm:text-base ${classes[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </motion.a>
  );
}

function Counter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [visibleValue, setVisibleValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const duration = 1100;

        const animate = (time: number) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setVisibleValue(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="border-l border-white/10 pl-5">
      <p className="text-3xl font-black tracking-tight sm:text-4xl">
        {visibleValue}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-400">{label}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [interactiveBackground, setInteractiveBackground] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px)"
    );

    const updateInteractionMode = () => {
      setInteractiveBackground(mediaQuery.matches);
    };

    updateInteractionMode();
    mediaQuery.addEventListener("change", updateInteractionMode);

    return () => {
      mediaQuery.removeEventListener("change", updateInteractionMode);
    };
  }, []);

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.25,
  });

  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });
  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  const spotlight = useMotionTemplate`radial-gradient(
    560px circle at ${smoothX}px ${smoothY}px,
    rgba(26, 162, 255, 0.19),
    rgba(8, 124, 255, 0.07) 38%,
    transparent 72%
  )`;

  const gridX = useTransform(smoothX, [0, 1600], [-16, 16]);
  const gridY = useTransform(smoothY, [0, 1000], [-12, 12]);

  const shapeOneX = useTransform(smoothX, [0, 1600], [-24, 24]);
  const shapeOneY = useTransform(smoothY, [0, 1000], [-18, 18]);

  const shapeTwoX = useTransform(smoothX, [0, 1600], [30, -30]);
  const shapeTwoY = useTransform(smoothY, [0, 1000], [22, -22]);
  const shapeTwoRotate = useTransform(smoothX, [0, 1600], [-10, 10]);

  const shapeThreeX = useTransform(smoothX, [0, 1600], [-14, 14]);
  const shapeThreeY = useTransform(smoothY, [0, 1000], [20, -20]);

  const mockupY = useTransform(scrollYProgress, [0, 0.32], [0, 110]);
  const orbY = useTransform(scrollYProgress, [0, 0.55], [0, -170]);

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#031326] text-white"
      onMouseMove={(event) => {
        if (!interactiveBackground) return;
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
      onMouseLeave={() => {
        if (!interactiveBackground) return;
        mouseX.set(-500);
        mouseY.set(-500);
      }}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-[#2bb5ff] via-[#087cff] to-[#2442dc]"
      />

      {interactiveBackground && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[1]"
            style={{ background: spotlight }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-[-40px] z-0 opacity-[0.04]"
            style={{
              x: gridX,
              y: gridY,
              backgroundImage:
                "linear-gradient(to right, #087cff 1px, transparent 1px), linear-gradient(to bottom, #087cff 1px, transparent 1px)",
              backgroundSize: "92px 92px",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-[7%] top-[20%] z-[2] h-24 w-24 rounded-full border border-[#38afff]/25 bg-[#087cff]/[0.04] backdrop-blur-sm"
            style={{ x: shapeOneX, y: shapeOneY }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed right-[8%] top-[25%] z-[2] h-44 w-44 rounded-full border border-dashed border-[#5bc0ff]/25"
            style={{
              x: shapeTwoX,
              y: shapeTwoY,
              rotate: shapeTwoRotate,
            }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed bottom-[12%] left-[14%] z-[2] h-14 w-14 rotate-45 rounded-2xl border border-[#087cff]/20 bg-[#2bb5ff]/[0.04]"
            style={{ x: shapeThreeX, y: shapeThreeY }}
          />
        </>
      )}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#031326]/78 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="relative z-10 flex items-center">
            <Image
              src="/logo-aat360.png"
              alt="AAT 360 NetworkLab"
              width={230}
              height={100}
              priority
              className="h-12 w-auto object-contain sm:h-14"
            />
          </a>

          <nav className="hidden items-center gap-9 text-sm font-semibold text-slate-300 md:flex">
            {[
              ["Servizi", "#servizi"],
              ["Metodo", "#metodo"],
              ["Contatti", "#contatti"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="relative py-2 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#58baff] after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 items-center rounded-2xl bg-white px-5 text-sm font-extrabold text-[#06172d] transition hover:-translate-y-0.5 hover:bg-[#eef6ff] sm:inline-flex"
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
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-[#06182f] px-4 py-4 md:hidden"
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
            </nav>
          </motion.div>
        )}
      </header>

      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(0,136,255,0.35),transparent_28%),radial-gradient(circle_at_85%_18%,rgba(0,190,255,0.14),transparent_24%),linear-gradient(135deg,#021123_0%,#08233f_50%,#031326_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:70px_70px] sm:[background-size:100px_100px]" />

        {interactiveBackground && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: spotlight }}
          />
        )}

        <motion.div
          style={{ y: orbY }}
          className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full border border-[#2aaeff]/20 sm:h-[720px] sm:w-[720px]"
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute right-[9%] top-[17%] hidden h-72 w-72 rounded-full border border-dashed border-[#4ab9ff]/20 lg:block"
        />

        <div className="relative mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-2xl border border-[#47b7ff]/20 bg-[#087cff]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#99d8ff] sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Digital products for modern business
            </div>

            <h1 className="max-w-5xl text-[3.15rem] font-black leading-[0.89] tracking-[-0.07em] sm:text-6xl md:text-7xl lg:text-[5.7rem] xl:text-[6.8rem]">
              Il digitale
              <span className="block bg-gradient-to-r from-[#43bbff] via-[#087cff] to-[#405dff] bg-clip-text text-transparent">
                che lavora per te.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Progettiamo siti vetrina, e-commerce e gestionali capaci di
              comunicare meglio, vendere online e semplificare i processi
              aziendali.
            </p>

            <div className="mt-8 grid gap-3 sm:flex">
              <MagneticLink href={WHATSAPP_URL} external>
                Inizia un progetto
              </MagneticLink>
              <MagneticLink href="#servizi" variant="secondary">
                Esplora i servizi
              </MagneticLink>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:flex sm:gap-8">
              <Counter value={3} suffix="" label="Aree specializzate" />
              <Counter value={100} suffix="%" label="Responsive" />
              <Counter value={1} suffix="" label="Partner digitale" />
            </div>

            <a
              href="#servizi"
              className="mt-12 inline-flex items-center gap-3 text-sm font-bold text-slate-400 transition hover:text-white"
            >
              Scopri come lavoriamo
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </motion.div>

          <motion.div
            style={{ y: mockupY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
            className="relative"
          >
            <div className="absolute -inset-10 rounded-[3rem] bg-[#087cff]/20 blur-3xl" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-3 shadow-2xl shadow-black/35 backdrop-blur-2xl sm:rounded-[3rem] sm:p-5"
            >
              <div className="relative overflow-hidden rounded-[1.6rem] bg-white p-4 sm:rounded-[2.4rem] sm:p-6">
                <Image
                  src="/hero-dashboard.svg"
                  alt="Mockup dashboard AAT 360"
                  width={1200}
                  height={850}
                  priority
                  className="h-auto w-full"
                />
              </div>
            </motion.div>

            <motion.div
  animate={{ y: [0, 12, 0], rotate: [-1.5, 1.5, -1.5] }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -bottom-10 -left-3 hidden w-[220px] sm:block lg:w-[250px]"
>
  {/* Area interna dello schermo */}
  <div className="absolute bottom-[5%] left-[13%] right-[12%] top-[14%] z-10 overflow-hidden rounded-[26px] bg-black">
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Anteprima video mobile"
      className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center"
    >
      <source src="/mobile-preview-scale2.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Cornice del telefono sopra al video */}
  <Image
    src="/cornice-smartphone.png"
    alt=""
    width={324}
    height={488}
    className="relative z-20 h-auto w-full object-contain"
    priority
  />
</motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#05172d] py-5">
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
        className="relative z-10 bg-[#f5f8fd] px-4 py-16 text-[#071a33] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#006bff_1px,transparent_1px),linear-gradient(to_bottom,#006bff_1px,transparent_1px)] [background-size:90px_90px]" />

        <div className="relative mx-auto max-w-[1440px]">
          <div className="mb-16 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#087cff] sm:text-sm">
                Servizi
              </p>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Tre strumenti. Un’unica strategia.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
              Ogni progetto nasce da obiettivi concreti e viene costruito senza
              template standardizzati.
            </p>
          </div>

          <div className="grid gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              const reverse = index % 2 === 1;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6 }}
                  className="group overflow-hidden rounded-[2.2rem] border border-[#d9e6f7] bg-white shadow-[0_24px_80px_rgba(15,65,130,0.08)] sm:rounded-[3rem]"
                >
                  <div
                    className={`grid gap-0 lg:grid-cols-2 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="relative min-h-[340px] overflow-hidden bg-[#06172d] p-5 sm:min-h-[450px] sm:p-8">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(8,124,255,0.28),transparent_35%),linear-gradient(135deg,#06172d,#0a294d)]" />
                      <motion.div
                        whileHover={{ scale: 1.025 }}
                        transition={{ duration: 0.45 }}
                        className="relative flex h-full items-center justify-center"
                      >
                        <Image
                          src={service.image}
                          alt={`Mockup ${service.title}`}
                          width={900}
                          height={650}
                          className="h-auto w-full max-w-[720px] drop-shadow-2xl"
                        />
                      </motion.div>
                    </div>

                    <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm font-black text-[#087cff]">
                          {service.number}
                        </span>
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#087cff] transition duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[#087cff] group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-[#087cff]">
                        {service.label}
                      </p>

                      <h3 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                        {service.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                        {service.text}
                      </p>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 rounded-2xl bg-[#f6f9fe] p-4"
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-[#087cff] shadow-sm">
                              <Check className="h-4 w-4" />
                            </span>
                            <span className="text-sm font-bold">{feature}</span>
                          </div>
                        ))}
                      </div>
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
        className="relative z-10 overflow-hidden bg-white px-4 py-16 text-[#071a33] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-[#087cff]/8 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#087cff] sm:text-sm">
              Metodo
            </p>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              Dall’idea al lancio, con un processo chiaro.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Riduciamo la complessità e trasformiamo gli obiettivi in un
              prodotto digitale concreto.
            </p>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[31px] top-8 hidden w-px bg-gradient-to-b from-[#087cff] via-[#80c9ff] to-transparent sm:block" />

            <div className="grid gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: index * 0.08 }}
                  className="group relative grid gap-5 rounded-[2rem] border border-[#dce8f7] bg-[#f8fbff] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#087cff]/30 hover:shadow-xl hover:shadow-blue-100/70 sm:grid-cols-[70px_1fr] sm:items-center sm:p-8"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#087cff] text-sm font-black text-white shadow-lg shadow-blue-500/20 transition group-hover:rotate-6 group-hover:scale-110">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#031326] px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,126,255,0.22),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(24,166,255,0.12),transparent_25%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:78px_78px]" />

        {interactiveBackground && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{ background: spotlight }}
          />
        )}

        <div className="relative mx-auto max-w-[1440px]">
          <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-xl sm:rounded-[3rem] sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:p-14">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#78c9ff] sm:text-sm">
                Perché AAT 360
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Un progetto digitale costruito per produrre valore.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  whileHover={{ y: -5 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <MonitorSmartphone className="h-5 w-5 text-[#58b8ff]" />
                  <p className="mt-6 font-bold">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contatti"
        className="relative z-10 bg-[#f5f8fd] px-4 py-16 text-[#071a33] sm:px-6 sm:py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-[#087cff] shadow-[0_35px_100px_rgba(0,94,210,0.24)] sm:rounded-[3rem] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative overflow-hidden p-7 text-white sm:p-10 lg:p-14">
            <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full border border-white/20" />
            <div className="absolute -bottom-20 -right-12 h-60 w-60 rounded-full border border-white/15" />
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-28 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-blue-100 sm:text-sm">
                Parliamo del tuo progetto
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Sito vetrina, e-commerce o gestionale?
              </h2>
              <p className="mt-6 max-w-xl leading-7 text-blue-50">
                Raccontaci cosa vuoi realizzare. Costruiamo una soluzione
                professionale, chiara e adatta alla tua attività.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3 bg-white p-7 sm:p-10 lg:p-14">
            <MagneticLink href={WHATSAPP_URL} external>
              <MessageCircle className="h-5 w-5" />
              Richiedi un preventivo
            </MagneticLink>

            <a
              href={EMAIL_URL}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-[#d8e6f8] px-6 text-base font-extrabold transition hover:-translate-y-0.5 hover:bg-[#eef6ff]"
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

      <footer className="relative z-10 border-t border-white/10 bg-[#031326] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-[1fr_auto_auto] md:items-end">
          <div>
            <Image
              src="/logo-aat360.png"
              alt="AAT 360 NetworkLab"
              width={220}
              height={96}
              className="h-14 w-auto object-contain"
            />
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Siti vetrina, e-commerce e gestionali su misura per aziende e
              professionisti.
            </p>
          </div>

          <div className="grid gap-2 text-sm font-semibold text-slate-300">
            <a href="#servizi" className="hover:text-white">
              Servizi
            </a>
            <a href="#metodo" className="hover:text-white">
              Metodo
            </a>
            <a href="#contatti" className="hover:text-white">
              Contatti
            </a>
          </div>

          <div className="grid gap-2 text-sm text-slate-400">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              +39 379 389 7635
            </a>
            <a href={EMAIL_URL}>info@aat360networklab.it</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
