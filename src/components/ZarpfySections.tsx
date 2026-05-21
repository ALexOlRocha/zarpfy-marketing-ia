"use client";

import { useState } from "react";
import {
  Sparkle,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Store,
  Package,
  BarChart3,
  Target,
  Tag,
  Layers,
  Search,
  Bot,
} from "lucide-react";
import { SiMercadopago, SiShopee } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import type { IconType } from "react-icons";

export function ZarpfySections() {
  return (
    <>
      <BentoSection />
      <CoreFeatures />
      <CtaFaqFooter />
    </>
  );
}

/* ============================================================
   BENTO — "Sua central de inteligência de marketplace"
   ============================================================ */
function BentoSection() {
  return (
    <section className="zbento" id="como-funciona">
      <div className="zbento-head">
        <div>
          <h2 className="zbento-title">
            Sua central de inteligência
            <br />
            para marketplaces.
          </h2>
          <p className="zbento-sub">
            A Zarpfy reúne análise de produto, leitura de concorrência e geração de anúncios em um
            só lugar — para você parar de apostar e começar a decidir com dados.
          </p>
        </div>
        <a href="#cta" className="liquid-glass zbento-cta">
          Entrar na lista de espera
        </a>
      </div>

      <div className="zbento-grid">
        {/* Col 1 — TRAJETÓRIA */}
        <article className="zbento-card zbento-bg">
          <div className="zbento-gradient zbento-gradient-1" />
          <div className="zbento-card-inner">
            <Label text="TRAJETÓRIA" />
            <div className="zbento-timeline">
              {[
                ["2026", "Lançamento beta", "Zarpfy Marketing AI"],
                ["2025", "Validação com sellers", "Comunidade"],
                ["2024", "Pesquisa de mercado", "Marketplaces BR"],
              ].map(([y, role, place]) => (
                <div className="zbento-timeline-row" key={y}>
                  <span className="zbento-y">{y}</span>
                  <Sparkle className="zbento-spark" strokeWidth={1.5} />
                  <span className="zbento-role">{role}</span>
                  <span className="zbento-place">{place}</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Col 2 top — DEPOIMENTO */}
        <article className="zbento-card zbento-voice noise-overlay">
          <Label text="VOZ DO SELLER" align="start" />
          <p className="zbento-quote">
            “Eu escolhia produto no instinto. A Zarpfy me mostrou em segundos que o nicho estava
            saturado — me economizou meses de estoque parado.”
          </p>
          <cite className="zbento-cite">
            <strong>Mariana Alves</strong> · Seller Mercado Livre
          </cite>
        </article>

        {/* Col 2 bottom — STAT */}
        <article className="zbento-card zbento-stat">
          <div className="zbento-gradient zbento-gradient-2" />
          <div className="zbento-stat-inner">
            <div className="zbento-stat-num">+10K</div>
            <div className="zbento-stat-cap">produtos analisados em teste</div>
          </div>
        </article>

        {/* Col 3 top — MARKETPLACES */}
        <article className="zbento-card zbento-marquee">
          <div className="zbento-gradient zbento-gradient-3" />
          <div className="zbento-marquee-inner">
            <Label text="MARKETPLACES SUPORTADOS" />
            <div className="zbento-rows">
              <MarqueeRow
                direction="left"
                icons={[
                  FaAmazon,
                  SiShopee,
                  SiMercadopago,
                  FaAmazon,
                  SiShopee,
                  SiMercadopago,
                  FaAmazon,
                  SiShopee,
                ]}
                labels={[
                  "Amazon",
                  "Shopee",
                  "Mercado Livre",
                  "Amazon",
                  "Shopee",
                  "Mercado Livre",
                  "Amazon",
                  "Shopee",
                ]}
              />
              <MarqueeRow
                direction="right"
                icons={[
                  SiMercadopago,
                  FaAmazon,
                  SiShopee,
                  SiMercadopago,
                  FaAmazon,
                  SiShopee,
                  SiMercadopago,
                  FaAmazon,
                ]}
                labels={[
                  "Mercado Livre",
                  "Amazon",
                  "Shopee",
                  "Mercado Livre",
                  "Amazon",
                  "Shopee",
                  "Mercado Livre",
                  "Amazon",
                ]}
              />
            </div>
          </div>
        </article>

        {/* Col 3 bottom — CONTATO */}
        <article className="zbento-card zbento-reach noise-overlay">
          <Label text="FALE COM A GENTE" align="start" />
          <a className="zbento-reach-link" href="mailto:contato@zarpfy.ai">
            contato@zarpfy.ai
          </a>
          <div className="zbento-reach-phone">@zarpfy.ai no Instagram</div>
          <button className="zbento-arrow" aria-label="abrir contato">
            <ArrowUpRight strokeWidth={1.5} />
          </button>
        </article>
      </div>
    </section>
  );
}

function Label({ text, align = "center" }: { text: string; align?: "start" | "center" }) {
  return (
    <div className={`zbento-label ${align === "start" ? "is-start" : ""}`}>
      <Sparkle strokeWidth={1.5} />
      <span>{text}</span>
      <Sparkle strokeWidth={1.5} />
    </div>
  );
}

function MarqueeRow({
  direction,
  icons,
  labels,
}: {
  direction: "left" | "right";
  icons: IconType[];
  labels: string[];
}) {
  return (
    <div className="zbento-marquee-mask">
      <div className={`zbento-marquee-track ${direction === "left" ? "to-left" : "to-right"}`}>
        {icons.map((Icon, i) => (
          <div className="liquid-glass zbento-tile" key={i} title={labels[i]}>
            <Icon className="zbento-tile-icon" />
            <span className="zbento-tile-label">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   CORE FEATURES — light section, 3 gradient cards
   ============================================================ */
function CoreFeatures() {
  return (
    <section className="zcore" id="funcionalidades">
      <div className="zcore-head">
        <div className="zcore-badge">RECURSOS PRINCIPAIS</div>
        <h2 className="zcore-title">Construído para vender mais rápido</h2>
        <p className="zcore-sub">
          Do produto certo ao anúncio campeão —<br />a IA faz o trabalho pesado para você.
        </p>
      </div>

      <div className="zcore-grid">
        {/* Card 1 — Prompt suggestions */}
        <div className="zcore-card zcore-card-1">
          <div className="zcore-prompt">
            “Analise este fone bluetooth no Mercado Livre e me diga se vale entrar — quero{" "}
            <em>margem mínima de 25%</em> e baixa concorrência.”
          </div>
          <button className="zcore-pill">
            <span className="zcore-spark">✦</span> Refinar análise
          </button>
          <svg className="zcore-cursor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M4 2L20 11L11 13L9 22L4 2Z" fill="#0f172a" stroke="#fff" strokeWidth="1" />
          </svg>
          <h3>Sugestões inteligentes</h3>
        </div>

        {/* Card 2 — API / Network */}
        <div className="zcore-card zcore-card-2">
          <div className="zcore-network">
            <div className="zcore-orb zcore-orb-c">
              <Bot strokeWidth={1.5} />
            </div>
            {[ShoppingBag, Store, Package, BarChart3, Target, Tag].map((Icon, i) => (
              <div key={i} className={`zcore-orb zcore-orb-${i}`}>
                <Icon strokeWidth={1.5} />
              </div>
            ))}
            <svg className="zcore-lines" viewBox="0 0 300 200" preserveAspectRatio="none">
              {[
                "M150,100 L40,30",
                "M150,100 L260,30",
                "M150,100 L20,100",
                "M150,100 L280,100",
                "M150,100 L40,170",
                "M150,100 L260,170",
              ].map((d, i) => (
                <path key={i} d={d} stroke="rgba(15,23,42,0.18)" strokeWidth="1" fill="none" />
              ))}
            </svg>
          </div>
          <h3>Integração com marketplaces</h3>
        </div>

        {/* Card 3 — Library */}
        <div className="zcore-card zcore-card-3">
          <div className="zcore-mesh" />
          <div className="zcore-folder">
            <Layers strokeWidth={1.2} />
          </div>
          <div className="zcore-search">
            <Search size={14} /> Buscar nos produtos salvos
          </div>
          <h3>Biblioteca de análises</h3>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA + FAQ + FOOTER
   ============================================================ */
const FAQ = [
  [
    "Como a Zarpfy analisa um produto?",
    "Nossa IA combina dados públicos do anúncio (preço, avaliações, vendedores, tendências) com modelos de score de oportunidade — gerando uma leitura clara em segundos.",
  ],
  [
    "Quais marketplaces são suportados?",
    "Começamos com Amazon, Mercado Livre e Shopee. Outros marketplaces brasileiros e internacionais entram no roadmap conforme a demanda.",
  ],
  [
    "Preciso instalar algo?",
    "A análise principal acontece via extensão Chrome. Também teremos um dashboard web para salvar produtos, comparar oportunidades e gerar relatórios.",
  ],
  [
    "Posso usar para criar anúncios?",
    "Sim. A IA gera título, bullet points, descrição e palavras-chave otimizados para o marketplace e categoria escolhidos.",
  ],
  [
    "Quando começa o acesso antecipado?",
    "Estamos liberando convites em lotes para quem entra na lista de espera. Inscreva-se abaixo para garantir prioridade.",
  ],
] as const;

function CtaFaqFooter() {
  const [open, setOpen] = useState(0);
  return (
    <section className="zctafaq" id="cta">
      <div className="zctafaq-grid">
        {/* CTA */}
        <div className="z-animated-gradient zctafaq-cta">
          <h2>
            Pronto para vender
            <br />
            com inteligência?
          </h2>
          <p>Entre na lista e seja um dos primeiros a usar a Zarpfy.</p>
          <form
            className="zctafaq-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Inscrição recebida!");
            }}
          >
            <input id="contato" type="email" required placeholder="seu@email.com" />
            <button type="submit">Quero acesso</button>
          </form>
        </div>

        {/* FAQ */}
        <div className="zctafaq-faq">
          {FAQ.map(([q, a], i) => {
            const active = i === open;
            return (
              <button
                type="button"
                key={i}
                className={`zfaq-item ${active ? "is-active" : ""}`}
                onClick={() => setOpen(active ? -1 : i)}
              >
                <div className="zfaq-row">
                  <span>{q}</span>
                  {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {active && <p className="zfaq-answer">{a}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
