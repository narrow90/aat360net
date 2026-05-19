'use client';

import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Cpu, ShoppingCart, Server, Code2, ChevronRight } from 'lucide-react';

export default function AAT360NetworkLab() {
  const services = [
    {
      title: 'Web Development',
      icon: <Globe className="w-10 h-10 text-cyan-400" />,
      desc: 'Siti web corporate, piattaforme responsive e UX moderne ottimizzate per performance e conversioni.'
    },
    {
      title: 'Portali & Software',
      icon: <Code2 className="w-10 h-10 text-cyan-400" />,
      desc: 'Gestionali, CRM, ERP e piattaforme cloud personalizzate progettate per automatizzare il business.'
    },
    {
      title: 'E-Commerce Solutions',
      icon: <ShoppingCart className="w-10 h-10 text-cyan-400" />,
      desc: 'Soluzioni e-commerce scalabili integrate con pagamenti, logistica e gestione prodotti.'
    },
    {
      title: 'IT Support & Security',
      icon: <ShieldCheck className="w-10 h-10 text-cyan-400" />,
      desc: 'Supporto informatico, sicurezza reti, manutenzione server e assistenza tecnica professionale.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-wide">
              AAT 360 <span className="text-cyan-400">NetworkLab</span>
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#servizi" className="hover:text-cyan-400 transition">Servizi</a>
            <a href="#about" className="hover:text-cyan-400 transition">Chi Siamo</a>
            <a href="#contatti" className="hover:text-cyan-400 transition">Contatti</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 px-4 py-2 rounded-full text-cyan-300 text-sm mb-8">
              <Cpu className="w-4 h-4" />
              Digital Innovation & Enterprise Solutions
            </div>

            <h2 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">
              Trasformiamo
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                il tuo business
              </span>
              nel digitale.
            </h2>

            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mb-10">
              AAT 360 NetworkLab sviluppa ecosistemi digitali ad alte prestazioni:
              siti web professionali, software gestionali, portali enterprise,
              e-commerce avanzati e infrastrutture IT affidabili.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="mailto:info@aat360networklab.it?subject=Richiesta Consulenza"
                className="group bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center gap-2"
              >
                Richiedi Consulenza
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>

              <button className="border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/5 px-8 py-4 rounded-2xl transition-all duration-300 text-slate-200">
                Scopri i Servizi
              </button>
            </div>
          </motion.div>

          {/* Tech Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-30" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    title: 'Cloud Systems',
                    icon: '☁️'
                  },
                  {
                    title: 'Cyber Security',
                    icon: '🔒'
                  },
                  {
                    title: 'Web Platforms',
                    icon: '🌐'
                  },
                  {
                    title: 'Server Support',
                    icon: '🖥️'
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#0d1328] border border-white/5 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                    <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servizi" className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Soluzioni Digitali
            </p>
            <h2 className="text-5xl font-black leading-tight mb-6">
              Servizi tecnologici progettati per la crescita aziendale
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Sviluppiamo piattaforme digitali professionali con focus su sicurezza,
              performance, scalabilità e innovazione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 hover:border-cyan-400/30 transition-all duration-500"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 transition duration-500" />

                <div className="relative z-10">
                  <div className="mb-8">
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-bold mb-5">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Chi Siamo
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              Tecnologia avanzata per aziende moderne
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              AAT 360 NetworkLab è specializzata nella progettazione di infrastrutture digitali,
              sviluppo software enterprise e supporto informatico professionale.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Il nostro obiettivo è fornire soluzioni affidabili, scalabili e performanti
              capaci di accelerare la trasformazione digitale delle imprese.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl border border-white/10 bg-[#0d1328] p-8">
                <h3 className="text-5xl font-black text-cyan-400 mb-3">360°</h3>
                <p className="text-slate-400">Servizi IT integrati</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#0d1328] p-8">
                <h3 className="text-5xl font-black text-cyan-400 mb-3">24/7</h3>
                <p className="text-slate-400">Supporto tecnico continuo</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-white/10 bg-[#0b1020] p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <Server className="w-12 h-12 text-cyan-400" />
                <div>
                  <h3 className="text-3xl font-bold">Infrastructure & Development</h3>
                  <p className="text-slate-400 mt-1">Performance • Security • Scalability</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  'Architetture cloud moderne',
                  'Cyber security e protezione dati',
                  'Applicazioni web ad alte prestazioni',
                  'Sistemi gestionali personalizzati',
                  'Assistenza tecnica enterprise'
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border border-white/5 bg-white/[0.02] rounded-2xl px-6 py-5"
                  >
                    <span className="text-lg text-slate-200">{item}</span>
                    <span className="text-cyan-400">●</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contatti" className="py-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-cyan-500/5 blur-3xl" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-5">
            Start Your Project
          </p>

          <h2 className="text-6xl font-black leading-tight mb-8">
            Costruiamo insieme
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              la tua infrastruttura digitale
            </span>
          </h2>

          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            Contattaci per sviluppare soluzioni web professionali,
            software aziendali personalizzati e supporto IT avanzato.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:info@aat360networklab.it?subject=Prenotazione Consulenza"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-10 py-5 rounded-2xl transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              Prenota una Consulenza
            </a>

            <a
              href="mailto:info@aat360networklab.it?subject=Contatto dal sito"
              className="border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/5 px-10 py-5 rounded-2xl transition-all duration-300 text-slate-200"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/40 backdrop-blur-xl py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-3xl font-black tracking-wide">
              AAT 360 <span className="text-cyan-400">NetworkLab</span>
            </h3>
            <p className="text-slate-500 mt-3">
              Enterprise Web Solutions • IT Support • Digital Innovation
            </p>
          </div>

          <div className="text-slate-400 text-sm text-center md:text-right space-y-2">
            <p>info@aat360networklab.it</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
