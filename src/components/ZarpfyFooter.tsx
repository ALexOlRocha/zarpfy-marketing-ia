"use client";

import { Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

function LogoIcon() {
  return (
    <Image src="/logo.png" alt="Zarpfy Logo" width={100} height={100} className="w-auto h-8" />
  );
}

const socials = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
];

type ColProps = { title: string; links: string[] };
function FooterCol({ title, links }: ColProps) {
  return (
    <div className="space-y-6">
      <h4 className="text-[15px] font-semibold text-[#0F172A]">{title}</h4>
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="text-[15px] font-medium text-[#1E293B] hover:text-[#31A8FF] transition-colors"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GlassText() {
  return (
    <div className="relative w-full flex items-center justify-center select-none pt-0 overflow-hidden">
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <defs>
          <filter id="zarpfy-glass" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="8" />
            <feGaussianBlur stdDeviation="0.4" />
          </filter>
        </defs>
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="w-full text-center"
        style={{ filter: "url(#zarpfy-glass)" }}
      >
        <span
          className="block font-bold leading-[0.85] tracking-[-0.06em] text-[clamp(96px,20vw,260px)] bg-clip-text text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15,23,42,0.18) 0%, rgba(15,23,42,0.04) 100%)",
          }}
        >
          zarpfy
        </span>
      </motion.div>
    </div>
  );
}

function FooterCard() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Outer gray body */}
      <div className="bg-[#E9EBEE] rounded-[48px] border border-slate-200 shadow-sm overflow-hidden">
        {/* Inner white box */}
        <div className="bg-white rounded-[40px] m-2 shadow-sm">
          <div className="p-8 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center gap-2.5">
                <LogoIcon />
                <span className="text-[22px] font-semibold text-[#0F172A] tracking-tight"></span>
              </div>
              <p className="text-[15px] leading-relaxed text-[#475569] max-w-sm">
                Inteligência artificial para sellers de marketplace. Analise produtos, concorrência
                e gere anúncios melhores antes de investir.
              </p>
              <div className="flex items-center gap-2.5">
                {socials.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-[44px] h-[44px] flex items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-slate-50 transition-all active:scale-95 group"
                  >
                    <Icon className="w-5 h-5 text-slate-800" strokeWidth={1.7} />
                  </a>
                ))}
              </div>
            </div>

            <FooterCol
              title="Produto"
              links={["Análise de produtos", "Extensão Chrome", "Dashboard", "Anúncios com IA"]}
            />
            <FooterCol
              title="Inteligência"
              links={["Score de oportunidade", "Concorrência", "Tendências", "Margem"]}
            />
            <FooterCol title="Empresa" links={["Sobre", "Parceiros", "Carreiras", "Contato"]} />
          </div>

          {/* Glass wordmark inside the white box */}
          <div className="px-6 sm:px-10 pb-4">
            <GlassText />
          </div>
        </div>

        {/* Bottom legal bar (inside gray outer wrap, outside the white box) */}
        <div className="px-6 sm:px-12 md:px-16 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-6 text-[15px]">
          <p className="text-[#475569] font-medium">
            © {new Date().getFullYear()} Zarpfy. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[#64748B] font-medium items-center">
            <a href="#" className="hover:text-[#31A8FF] transition-colors">
              Centro Legal
            </a>
            <span className="w-px h-4 bg-slate-300" />
            <a href="#" className="hover:text-[#31A8FF] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ZarpfyFooter() {
  return (
    <footer className="zfooter">
      <FooterCard />
    </footer>
  );
}
