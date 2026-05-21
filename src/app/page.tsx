"use client";

import { ZarpfyHero } from "@/components/ZarpfyHero";
import { ZarpfySections } from "@/components/ZarpfySections";
import ZarpfyFooter from "@/components/ZarpfyFooter";

export default function HomePage() {
  return (
    <>
      <ZarpfyHero />
      <ZarpfySections />
      <ZarpfyFooter />
    </>
  );
}
