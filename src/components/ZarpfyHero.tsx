"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaAmazon, FaStore as FaShop } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { SiMercadopago, SiOpenai, SiShopee } from "react-icons/si";

export function ZarpfyHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const nodeStackRef = useRef<HTMLDivElement>(null);
  const nodeXRef = useRef<HTMLDivElement>(null);
  const nodeShieldRef = useRef<HTMLDivElement>(null);
  const beamGlowRef = useRef<SVGPathElement>(null);
  const beamCoreRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<SVGLinearGradientElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    let raf = 0;
    let state: "p1" | "splash" | "p2" | "idle" = "p1";
    let lastStateChange = performance.now();

    const computePath = () => {
      const pipeline = pipelineRef.current;
      const nodeStack = nodeStackRef.current;
      const nodeX = nodeXRef.current;
      const nodeShield = nodeShieldRef.current;
      if (!pipeline || !nodeStack || !nodeX || !nodeShield) return;
      const pRect = pipeline.getBoundingClientRect();
      const sRect = nodeStack.getBoundingClientRect();
      const xRect = nodeX.getBoundingClientRect();
      const shRect = nodeShield.getBoundingClientRect();
      const startX = sRect.left + sRect.width / 2 - pRect.left;
      const startY = sRect.top + sRect.height / 2 - pRect.top;
      const midX = xRect.left + xRect.width / 2 - pRect.left;
      const midY = xRect.top + xRect.height / 2 - pRect.top;
      const endX = shRect.left + shRect.width / 2 - pRect.left;
      const endY = shRect.top + shRect.height / 2 - pRect.top;
      const d = `M ${startX},${startY} L ${midX},${midY} L ${endX},${endY}`;
      beamGlowRef.current?.setAttribute("d", d);
      beamCoreRef.current?.setAttribute("d", d);
    };

    const setGradient = (percentage: number) => {
      const g = gradientRef.current;
      if (!g) return;
      const center = percentage * 100;
      const halfWidth = 5;
      g.setAttribute("x1", `${center - halfWidth}%`);
      g.setAttribute("x2", `${center + halfWidth}%`);
      g.setAttribute("y1", "0%");
      g.setAttribute("y2", "0%");
    };

    computePath();
    const onResize = () => computePath();
    window.addEventListener("resize", onResize);

    const loop = (t: number) => {
      const elapsed = t - lastStateChange;
      if (state === "p1") {
        const p = Math.min(elapsed / 800, 1);
        const percentage = p * 0.5;
        setGradient(percentage);
        if (p < 0.4) nodeStackRef.current?.classList.add("active");
        else nodeStackRef.current?.classList.remove("active");
        if (elapsed >= 800) {
          nodeStackRef.current?.classList.remove("active");
          state = "splash";
          lastStateChange = t;
          beamGlowRef.current?.setAttribute("opacity", "0");
          beamCoreRef.current?.setAttribute("opacity", "0");
          splashRef.current?.classList.add("animate");
        }
      } else if (state === "splash") {
        if (elapsed >= 800) {
          state = "p2";
          lastStateChange = t;
          splashRef.current?.classList.remove("animate");
          beamGlowRef.current?.setAttribute("opacity", "0.6");
          beamCoreRef.current?.setAttribute("opacity", "1");
        }
      } else if (state === "p2") {
        const p = Math.min(elapsed / 800, 1);
        const percentage = 0.5 + p * 0.5;
        setGradient(percentage);
        if (p > 0.6) nodeShieldRef.current?.classList.add("active");
        if (elapsed >= 800) {
          nodeShieldRef.current?.classList.remove("active");
          state = "idle";
          lastStateChange = t;
        }
      } else if (state === "idle") {
        if (elapsed >= 1000) {
          state = "p1";
          lastStateChange = t;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <Image
          src="/zarpfy.png"
          alt="Zarpfy Logo"
          width={100}
          height={100}
          className="w-auto h-6"
        />
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
        </button>
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <a href="#como-funciona">Método</a>
            </li>
            <li>
              <a href="#funcionalidades">Funcionalidades</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
          <div className="nav-actions">
            <button className="btn-login">Entrar</button>
            <button className="btn-signup">Acesso antecipado</button>
          </div>
        </div>
      </nav>

      <section className="hero-card">
        <div className="hero-grid" />

        <div className="icon-pipeline" ref={pipelineRef}>
          <svg className="beam-svg" style={{ overflow: "visible" }}>
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="b" />
                <feComposite in="b" in2="SourceGraphic" operator="over" />
              </filter>
              <linearGradient id="beam-gradient" gradientUnits="userSpaceOnUse" ref={gradientRef}>
                <stop offset="0%" stopColor="#b04090" stopOpacity="0" />
                <stop offset="20%" stopColor="#b04090" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="80%" stopColor="#c8a0e0" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#c8a0e0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              ref={beamGlowRef}
              stroke="url(#beam-gradient)"
              strokeWidth={2}
              fill="none"
              filter="url(#glow)"
              opacity={0.6}
            />
            <path ref={beamCoreRef} stroke="url(#beam-gradient)" strokeWidth={0.8} fill="none" />
          </svg>

          <div ref={nodeStackRef} className="icon-node node-light-right" id="node-stack">
            <div className="icon-node-inner">
              <FaShop size={20} style={{ fill: "#fff", stroke: "none" }} />
            </div>
          </div>

          <div className="pipeline-line" />

          <div className="pipeline-center">
            <div ref={splashRef} className="splash" />
            <div ref={nodeXRef} className="icon-node-center" id="node-x">
              <div className="icon-node-inner icon-z">Z</div>
            </div>
          </div>

          <div className="pipeline-line right" />

          <div ref={nodeShieldRef} className="icon-node node-light-left" id="node-shield">
            <div className="icon-node-inner">
              <GoGraph size={20} />
            </div>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-heading">
            Venda em marketplaces com
            <strong>dados, estratégia e IA</strong>
          </h1>
          <p className="hero-sub">
            A Zarpfy Marketing AI analisa produtos, concorrentes, preços, demanda e margem para você
            decidir o que vale vender — antes de investir tempo e dinheiro.
          </p>
          <div className="hero-ctas">
            <button className="btn-cta">Começar análise gratuita</button>
            <button className="btn-cta-secondary">Ver demonstração</button>
          </div>
        </div>
      </section>

      <div className="brands">
        <div className="brand-item">
          <FaAmazon />
          Amazon
        </div>
        <div className="brand-item">
          <SiMercadopago />
          Mercado Livre
        </div>
        <div className="brand-item">
          <SiShopee />
          Shopee
        </div>
        <div className="brand-item">
          <SiOpenai />
          Openai
          {/* <span className="brand-item-text">AI</span> */}
        </div>
        <div className="brand-item"></div>
      </div>
    </>
  );
}
