import React, { useState } from 'react';
import {
  ArrowRight,
  Award,
  Camera,
  ChevronDown,
  Compass,
  Menu,
  Mic,
  PackageCheck,
  Phone,
  ShieldCheck,
  Users,
  X,
} from 'lucide-react';
import { KonarkEmblem, TarakasiDivider } from './components/CulturalMotifs';
import { HeroProductPreview } from './components/HeroProductPreview';
import { EarlyAccessModal } from './components/EarlyAccessModal';
import {
  BUYER_STEPS,
  CORE_FEATURES,
  CREATOR_STEPS,
  ECOSYSTEM_METRICS,
  FAQ_ITEMS,
  FeatureItem,
  PILOT_PHASES,
  PILLARS,
  PROBLEM_ITEMS,
  SOLUTION_ITEMS,
} from './data/kaluraContent';

function FeatureIcon({ name }: { name: FeatureItem['iconName'] }) {
  const iconClass = 'w-5 h-5 text-[#A64B32]';
  switch (name) {
    case 'mic':
      return <Mic className={iconClass} />;
    case 'shield':
      return <ShieldCheck className={iconClass} />;
    case 'camera':
      return <Camera className={iconClass} />;
    case 'award':
      return <Award className={iconClass} />;
    case 'package':
      return <PackageCheck className={iconClass} />;
    case 'compass':
      return <Compass className={iconClass} />;
  }
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePillarId, setActivePillarId] = useState<string>(PILLARS[0].id);
  const [journeyView, setJourneyView] = useState<'buyer' | 'creator'>('buyer');
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState<string>('Buyer / Cultural Explorer');

  const activePillar = PILLARS.find((p) => p.id === activePillarId) ?? PILLARS[0];
  const currentSteps = journeyView === 'buyer' ? BUYER_STEPS : CREATOR_STEPS;

  const openAccessModal = (role = 'Buyer / Cultural Explorer') => {
    setModalRole(role);
    setModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E5] text-[#49352D] flex flex-col">
      {/* Sticky Top Bar — Strict 3-zone contract */}
      <header className="sticky top-0 z-40 h-16 bg-[#F7F1E5]/95 backdrop-blur-md border-b border-[#49352D]/10">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-[#354C3C] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A64B32] rounded-md"
          >
            <KonarkEmblem className="w-7 h-7 text-[#A64B32]" />
            <span className="font-[var(--font-display)]">Kalura</span>
          </a>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#49352D]/80"
          >
            <a
              href="#pillars"
              className="hover:text-[#A64B32] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Pillars
            </a>
            <a
              href="#features"
              className="hover:text-[#A64B32] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#A64B32] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              How It Works
            </a>
            <a
              href="#vision"
              className="hover:text-[#A64B32] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
            >
              Vision
            </a>
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openAccessModal('Buyer / Cultural Explorer')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#A64B32] text-white text-sm font-semibold hover:bg-[#8E3E28] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354C3C]"
            >
              Get Early Access
            </button>

            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden w-11 h-11 rounded-lg flex items-center justify-center text-[#49352D] hover:bg-[#49352D]/5 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#49352D]/12 px-4 py-4 shadow-md">
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {[
                { label: 'Pillars', href: '#pillars' },
                { label: 'Features', href: '#features' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Vision', href: '#vision' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#49352D] hover:bg-[#F7F1E5] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openAccessModal('Buyer / Cultural Explorer')}
                  className="w-full py-3 px-4 rounded-lg bg-[#A64B32] text-white text-sm font-semibold hover:bg-[#8E3E28] transition-colors cursor-pointer"
                >
                  Get Early Access
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="flex-1">
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Copy Column */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-8 py-2">
              <div className="space-y-6">
                <p className="text-sm font-semibold text-[#A64B32]">
                  Five Pillars · One Living Heritage
                </p>

                <h1
                  className="font-extrabold tracking-tight text-[#354C3C] leading-[1.1] text-balance"
                  style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
                >
                  Odisha’s living culture, verified and within reach.
                </h1>

                <p className="text-base sm:text-lg text-[#49352D]/85 leading-relaxed max-w-xl">
                  Kalura brings handcrafted textiles, heirloom cuisine, folk performances, festivals, and hands-on workshops into one connected home—linking buyers directly to verified local creators without excluding makers who lack smartphones.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="button"
                    onClick={() => openAccessModal('Buyer / Cultural Explorer')}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#A64B32] text-white text-sm font-semibold hover:bg-[#8E3E28] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#354C3C]"
                  >
                    <span>Get Early Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#pillars"
                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white border border-[#49352D]/15 text-[#354C3C] text-sm font-semibold hover:border-[#354C3C]/40 transition-colors whitespace-nowrap shrink-0"
                  >
                    Explore the Five Pillars
                  </a>
                </div>
              </div>

              {/* Clean unboxed trust strip */}
              <div className="pt-6 border-t border-[#49352D]/12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-[#354C3C]">Master-Artisan Sign-Off</p>
                  <p className="text-xs text-[#49352D]/70 mt-0.5">
                    AI checks + cooperative approval before listing
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#354C3C]">Daily Kitchen Proof</p>
                  <p className="text-xs text-[#49352D]/70 mt-0.5">
                    Time- and GPS-stamped live captures
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#354C3C]">Phone-Free Inclusion</p>
                  <p className="text-xs text-[#49352D]/70 mt-0.5">
                    Odia voice tools or local volunteer visits
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Product Mockup */}
            <div className="lg:col-span-6">
              <HeroProductPreview onOpenModal={openAccessModal} />
            </div>
          </div>
        </section>

        {/* 2. The Problem & Solution */}
        <section className="bg-white border-y border-[#49352D]/10 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#A64B32]">Why Kalura Exists</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#354C3C] tracking-tight text-balance">
                Culture is everywhere. Discovery and trust shouldn’t be fragmented.
              </h2>
              <p className="text-base text-[#49352D]/80 leading-relaxed">
                Odisha’s heritage thrives in village looms, home kitchens, and folk troupes—yet online pathways remain scattered, opaque, and built only for digitally fluent sellers.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              {/* The Challenge */}
              <div className="rounded-2xl bg-[#F7F1E5]/65 border border-[#49352D]/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-1 border-b border-[#49352D]/10 pb-4">
                  <p className="text-xs font-semibold text-[#A64B32]">Today’s Reality</p>
                  <h3 className="text-xl font-bold text-[#49352D]">
                    Where cultural makers and buyers get stuck
                  </h3>
                </div>

                <div className="space-y-5 flex-1">
                  {PROBLEM_ITEMS.map((item) => (
                    <div key={item.index} className="flex items-start gap-4">
                      <span className="text-sm font-bold text-[#A64B32] tabular-nums pt-0.5 shrink-0">
                        {item.index}.
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold text-[#49352D]">{item.title}</h4>
                        <p className="text-sm text-[#49352D]/75 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Kalura Solution */}
              <div className="rounded-2xl bg-[#354C3C] text-[#F7F1E5] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-1 border-b border-white/15 pb-4">
                  <p className="text-xs font-semibold text-[#D5AD59]">The Kalura Way</p>
                  <h3 className="text-xl font-bold text-white">
                    One verified home built for human craft and trust
                  </h3>
                </div>

                <div className="space-y-5 flex-1">
                  {SOLUTION_ITEMS.map((item) => (
                    <div key={item.index} className="flex items-start gap-4">
                      <span className="text-sm font-bold text-[#D5AD59] tabular-nums pt-0.5 shrink-0">
                        {item.index}.
                      </span>
                      <div className="space-y-1">
                        <h4 className="text-base font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-[#F7F1E5]/85 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Five Cultural Pillars Interactive Explorer */}
        <section id="pillars" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#A64B32]">Five Linked Pillars</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#354C3C] tracking-tight text-balance">
                Every letter in Kalura is a living pillar of heritage
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#49352D]/80 max-w-md">
              Select a pillar to see how Kalura brings artisans, home cooks, folk artists, festivals, and workshops together.
            </p>
          </div>

          {/* Interactive Pillar Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3" role="tablist" aria-label="Five pillars of Kalura">
            {PILLARS.map((pillar) => {
              const selected = pillar.id === activePillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A64B32] ${
                    selected
                      ? 'bg-[#354C3C] text-white border-[#354C3C]'
                      : 'bg-white text-[#49352D] border-[#49352D]/12 hover:border-[#A64B32]/40'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <span
                      className={`text-2xl font-extrabold font-[var(--font-display)] ${
                        selected ? 'text-[#D5AD59]' : 'text-[#A64B32]'
                      }`}
                    >
                      {pillar.letter}
                    </span>
                    <span
                      className={`text-xs font-[var(--font-odia)] ${
                        selected ? 'text-[#F7F1E5]/75' : 'text-[#49352D]/55'
                      }`}
                    >
                      {pillar.odiaName}
                    </span>
                  </div>
                  <p className="mt-2 text-base font-bold">{pillar.name}</p>
                  <p
                    className={`text-xs mt-0.5 line-clamp-1 ${
                      selected ? 'text-[#F7F1E5]/85' : 'text-[#49352D]/70'
                    }`}
                  >
                    {pillar.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Spotlight Panel */}
          <div className="bg-white rounded-2xl border border-[#49352D]/12 p-6 sm:p-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-sm font-medium text-[#A64B32]">
                <span>Pillar · {activePillar.name}</span>
                <span aria-hidden="true">/</span>
                <span className="font-[var(--font-odia)]">{activePillar.odiaName}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#354C3C]">
                {activePillar.subtitle}
              </h3>
              <p className="text-base text-[#49352D]/85 leading-relaxed">
                {activePillar.summary}
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#F7F1E5]/75 rounded-xl border border-[#49352D]/10 p-6 space-y-4">
              <p className="text-xs font-semibold text-[#354C3C]">
                What you can discover and book
              </p>
              <div className="grid grid-cols-2 gap-3">
                {activePillar.examples.map((example) => (
                  <div
                    key={example}
                    className="bg-white px-3.5 py-2.5 rounded-lg border border-[#49352D]/10 text-sm font-medium text-[#49352D]"
                  >
                    {example}
                  </div>
                ))}
              </div>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => openAccessModal('Buyer / Cultural Explorer')}
                  className="text-sm font-semibold text-[#A64B32] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore {activePillar.name} in the Cuttack Pilot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <TarakasiDivider />
        </section>

        {/* 4. Core Features / Product Breakdown */}
        <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold text-[#A64B32]">Built-In Trust &amp; Access</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#354C3C] tracking-tight text-balance">
              Designed for creators without barriers—and buyers without guesswork
            </h2>
            <p className="text-base text-[#49352D]/80 leading-relaxed">
              Every feature in Kalura solves a real ground-level challenge: language literacy, fair pricing, counterfeit prevention, and food hygiene transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_FEATURES.map((feature) => (
              <article
                key={feature.id}
                className="bg-white rounded-2xl border border-[#49352D]/12 p-6 sm:p-7 flex flex-col justify-between gap-5 hover:border-[#A64B32]/35 transition-colors"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F7F1E5] border border-[#49352D]/10 flex items-center justify-center">
                    <FeatureIcon name={feature.iconName} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#354C3C] leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#49352D]/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <p className="text-xs font-medium text-[#A64B32] pt-3 border-t border-[#49352D]/10">
                  {feature.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* 5. How It Works */}
        <section id="how-it-works" className="bg-white border-y border-[#49352D]/10 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <p className="text-sm font-semibold text-[#A64B32]">How It Works</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#354C3C] tracking-tight text-balance">
                  Three clear steps from local craft to verified delivery
                </h2>
              </div>

              {/* Segmented Buyer / Creator Switch */}
              <div
                role="tablist"
                aria-label="User journey view"
                className="inline-flex items-center p-1 bg-[#F7F1E5] rounded-xl border border-[#49352D]/12 self-start md:self-auto"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={journeyView === 'buyer'}
                  onClick={() => setJourneyView('buyer')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    journeyView === 'buyer'
                      ? 'bg-[#354C3C] text-white'
                      : 'text-[#49352D]/75 hover:text-[#49352D]'
                  }`}
                >
                  For Buyers
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={journeyView === 'creator'}
                  onClick={() => setJourneyView('creator')}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    journeyView === 'creator'
                      ? 'bg-[#354C3C] text-white'
                      : 'text-[#49352D]/75 hover:text-[#49352D]'
                  }`}
                >
                  For Creators
                </button>
              </div>
            </div>

            {/* 3-Step Visual Flow */}
            <div className="grid md:grid-cols-3 gap-6">
              {currentSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-[#F7F1E5]/60 border border-[#49352D]/12 p-6 sm:p-7 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-[#A64B32] font-[var(--font-display)] tabular-nums">
                      Step {item.step}
                    </span>
                    <span className="h-px flex-1 ml-4 bg-[#49352D]/12" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#354C3C]">{item.title}</h3>
                  <p className="text-sm text-[#49352D]/80 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Two Creator Onboarding Routes Highlight */}
            <div className="rounded-2xl bg-[#354C3C] text-[#F7F1E5] p-6 sm:p-10 grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-[#D5AD59] font-semibold text-sm">
                  <Phone className="w-4 h-4" />
                  <span>Route 01 · Phone Available (Self-Service)</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Speak in Odia or send photos on WhatsApp
                </h3>
                <p className="text-sm text-[#F7F1E5]/85 leading-relaxed">
                  Creators with smartphones speak product name, origin, materials, and price in Odia or regional languages. Speech-to-text drafts the listing for quick confirmation, and a unique QR record is generated after verification.
                </p>
              </div>

              <div className="space-y-3 md:border-l md:border-white/15 md:pl-8">
                <div className="flex items-center gap-2.5 text-[#D5AD59] font-semibold text-sm">
                  <Users className="w-4 h-4" />
                  <span>Route 02 · No Smartphone (Assisted Onboarding)</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Local representatives visit and list on your behalf
                </h3>
                <p className="text-sm text-[#F7F1E5]/85 leading-relaxed">
                  Trained local representatives and student volunteers visit creators without smartphones, gather details with full consent, photograph crafts, maintain profiles, and coordinate customer orders—so no maker is left behind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Vision & Ecosystem Scale (Odisha & Cuttack Pilot) */}
        <section id="vision" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-14">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-sm font-semibold text-[#A64B32]">Why Odisha · Initial Pilot in Cuttack</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#354C3C] tracking-tight text-balance">
                Start focused in Cuttack. Prove trust locally. Grow across Odisha.
              </h2>
            </div>
            <p className="lg:col-span-5 text-sm sm:text-base text-[#49352D]/80 leading-relaxed">
              Odisha carries one of India’s richest craft and culinary traditions. Rather than launching thinly everywhere at once, Kalura begins in Cuttack and neighbouring communities to validate every verification workflow alongside real creators.
            </p>
          </div>

          {/* 4-Column Ecosystem Scale Strip */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ECOSYSTEM_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-white rounded-2xl border border-[#49352D]/12 p-6 space-y-2"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-[#A64B32] font-[var(--font-display)] tabular-nums">
                  {metric.value}
                </p>
                <p className="text-sm font-bold text-[#354C3C]">{metric.label}</p>
                <p className="text-xs text-[#49352D]/70 leading-relaxed">{metric.context}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#49352D]/65">
            Source: Directorate of Handicrafts, Government of Odisha; Odisha Economic Survey 2025–26.
          </p>

          {/* 3-Phase Community-Validated Rollout */}
          <div className="grid md:grid-cols-3 gap-6">
            {PILOT_PHASES.map((phase) => (
              <div
                key={phase.phase}
                className="bg-white rounded-2xl border border-[#49352D]/12 p-6 space-y-3"
              >
                <p className="text-xs font-semibold text-[#A64B32]">{phase.phase}</p>
                <h3 className="text-lg font-bold text-[#354C3C]">{phase.title}</h3>
                <p className="text-sm text-[#49352D]/80 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FAQ Section */}
        <section id="faq" className="bg-white border-t border-[#49352D]/10 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-3 text-center">
              <p className="text-sm font-semibold text-[#A64B32]">Common Questions</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#354C3C] tracking-tight">
                Answers for buyers, artisans, and food makers
              </h2>
            </div>

            <div className="divide-y divide-[#49352D]/12 border-y border-[#49352D]/12">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div key={item.id} className="py-5">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A64B32] rounded-md py-1"
                    >
                      <span className="text-base sm:text-lg font-semibold text-[#354C3C]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#A64B32] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        id={`faq-panel-${item.id}`}
                        className="pt-3 pr-8 text-sm sm:text-base text-[#49352D]/80 leading-relaxed"
                      >
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Final CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="rounded-3xl bg-[#354C3C] text-[#F7F1E5] px-6 py-12 sm:px-12 sm:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#D5AD59]">Cuttack &amp; Odisha Pilot</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
                Help shape Odisha’s first verified home for living culture.
              </h2>
              <p className="text-base text-[#F7F1E5]/85 leading-relaxed">
                Whether you want to discover authentic crafts and regional cuisine, list your handmade work, or volunteer for assisted onboarding in Cuttack—we would love to welcome you early.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => openAccessModal('Buyer / Cultural Explorer')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#D5AD59] text-[#354C3C] text-sm font-bold hover:bg-[#DFBC6D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Join Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => openAccessModal('Creator / Artisan')}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-white/10 border border-white/25 text-white text-sm font-semibold hover:bg-white/20 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Partner as a Creator
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-[#49352D]/12 bg-[#F7F1E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-lg font-extrabold text-[#354C3C]">
              <KonarkEmblem className="w-6 h-6 text-[#A64B32]" />
              <span className="font-[var(--font-display)]">Kalura</span>
            </div>
            <p className="text-xs text-[#49352D]/70">
              Connecting Culture · Empowering Creators · Preserving Heritage · Pilot in Cuttack, Odisha
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-[#49352D]/80">
            <a href="#pillars" className="hover:text-[#A64B32] transition-colors">
              Pillars
            </a>
            <a href="#features" className="hover:text-[#A64B32] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[#A64B32] transition-colors">
              How It Works
            </a>
            <a href="#vision" className="hover:text-[#A64B32] transition-colors">
              Vision
            </a>
            <a href="#faq" className="hover:text-[#A64B32] transition-colors">
              FAQ
            </a>
          </div>

          <p className="text-xs text-[#49352D]/65">
            © {new Date().getFullYear()} Kalura. All rights reserved.
          </p>
        </div>
      </footer>

      <EarlyAccessModal
        isOpen={modalOpen}
        initialRole={modalRole}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
