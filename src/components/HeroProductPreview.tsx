import React, { useState } from 'react';
import { CheckCircle2, MapPin, Mic, QrCode, ShieldCheck, Clock, Sparkles } from 'lucide-react';

type PreviewScreen = 'authenticity' | 'kitchen' | 'onboarding';

interface HeroProductPreviewProps {
  onOpenModal: (role?: string) => void;
}

export const HeroProductPreview: React.FC<HeroProductPreviewProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<PreviewScreen>('authenticity');

  return (
    <div className="bg-white rounded-2xl border border-[#49352D]/12 shadow-sm overflow-hidden flex flex-col justify-between h-full">
      {/* Top interactive view switcher */}
      <div className="px-5 pt-5 pb-4 border-b border-[#49352D]/10 flex flex-wrap items-center justify-between gap-3 bg-[#F7F1E5]/55">
        <div>
          <p className="text-xs font-medium text-[#A64B32]">Platform Preview</p>
          <p className="text-sm font-semibold text-[#49352D] font-[var(--font-display)]">
            Built-in Trust &amp; Creator Tools
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Kalura platform views"
          className="inline-flex items-center p-1 bg-[#F7F1E5] rounded-lg border border-[#49352D]/10"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'authenticity'}
            onClick={() => setActiveTab('authenticity')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'authenticity'
                ? 'bg-[#354C3C] text-white'
                : 'text-[#49352D]/75 hover:text-[#49352D]'
            }`}
          >
            Craft QR
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'kitchen'}
            onClick={() => setActiveTab('kitchen')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'kitchen'
                ? 'bg-[#354C3C] text-white'
                : 'text-[#49352D]/75 hover:text-[#49352D]'
            }`}
          >
            Kitchen Proof
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'onboarding'}
            onClick={() => setActiveTab('onboarding')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === 'onboarding'
                ? 'bg-[#354C3C] text-white'
                : 'text-[#49352D]/75 hover:text-[#49352D]'
            }`}
          >
            Odia Voice
          </button>
        </div>
      </div>

      {/* Screen Content */}
      <div className="p-6 flex-1 flex flex-col justify-between gap-5">
        {activeTab === 'authenticity' && (
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs text-[#49352D]/65">
                  Kala · Cuttack Tarakasi Cluster · Verified Listing
                </p>
                <h3 className="text-xl font-bold text-[#49352D] leading-snug">
                  Handcrafted Silver Filigree Lotus Brooch
                </h3>
                <p className="text-sm text-[#49352D]/80">
                  Crafted by Subhashree Behera · 18-year filigree artisan
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xl font-bold text-[#354C3C] tabular-nums">₹2,450</p>
                <p className="text-xs text-[#49352D]/65">Fair-price verified</p>
              </div>
            </div>

            {/* Verification Chain */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#F7F1E5]/70 border border-[#49352D]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#354C3C] font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>AI Texture &amp; Pattern Check</span>
                </div>
                <p className="text-xs text-[#49352D]/75 leading-relaxed">
                  Silver wire gauge, filigree motif density, and material rate cross-checked against district pricing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F1E5]/70 border border-[#49352D]/10 space-y-1.5">
                <div className="flex items-center gap-2 text-[#A64B32] font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Master Weaver / Co-op Sign-Off</span>
                </div>
                <p className="text-xs text-[#49352D]/75 leading-relaxed">
                  Approved by Cuttack Artisan Guild before publication. Post-delivery photo match enabled.
                </p>
              </div>
            </div>

            {/* QR Provenance strip */}
            <div className="p-4 rounded-xl bg-[#354C3C] text-[#F7F1E5] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-lg bg-white text-[#354C3C] flex items-center justify-center shrink-0">
                  <QrCode className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Unique QR Provenance Record</p>
                  <p className="text-xs text-[#F7F1E5]/80">
                    Scan tag on arrival to inspect artisan profile, origin, and verification log.
                  </p>
                </div>
              </div>
              <span className="text-xs font-medium text-[#D5AD59] whitespace-nowrap shrink-0">
                Protective Box Included
              </span>
            </div>
          </div>
        )}

        {activeTab === 'kitchen' && (
          <div className="space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs text-[#49352D]/65">
                  Rasa · Traditional Odia Kitchen · Daily Proof
                </p>
                <h3 className="text-xl font-bold text-[#49352D] leading-snug">
                  Slow-Roasted Chhenapoda &amp; Poda Pitha
                </h3>
                <p className="text-sm text-[#49352D]/80">
                  Prepared fresh by Mamata Mohanty · Buxi Bazaar, Cuttack
                </p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xl font-bold text-[#354C3C] tabular-nums">₹380</p>
                <p className="text-xs text-[#49352D]/65">500g wood-baked box</p>
              </div>
            </div>

            {/* Live capture frame */}
            <div className="rounded-xl bg-[#354C3C] text-[#F7F1E5] p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Clock className="w-4 h-4 text-[#D5AD59]" />
                  <span className="tabular-nums">Captured Today · 07:42 AM IST</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#D5AD59] tabular-nums">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>20.4625° N, 85.8830° E · Cuttack</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-white/10 rounded-lg p-3 space-y-1">
                  <p className="font-semibold text-white">In-App Live Capture</p>
                  <p className="text-[#F7F1E5]/80">Old gallery photos blocked automatically.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 space-y-1">
                  <p className="font-semibold text-white">Clean Prep Surface</p>
                  <p className="text-[#F7F1E5]/80">Utensils &amp; workspace verified before prep.</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3 space-y-1">
                  <p className="font-semibold text-white">Quality Margin +4%</p>
                  <p className="text-[#F7F1E5]/80">Earned via 14-day unbroken hygiene streak.</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#49352D]/75 leading-relaxed">
              Orders and hygiene proofs remain inside Kalura so buyers get verified cleanliness and creators keep full transaction protection.
            </p>
          </div>
        )}

        {activeTab === 'onboarding' && (
          <div className="space-y-5">
            <div className="space-y-1">
              <p className="text-xs text-[#49352D]/65">
                Creator Digital Tools · Inclusive Access
              </p>
              <h3 className="text-xl font-bold text-[#49352D] leading-snug">
                Odia Voice-to-Listing &amp; Seller Points
              </h3>
              <p className="text-sm text-[#49352D]/80">
                Speak in your regional language—or request a local volunteer visit if you do not own a smartphone.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F1E5] border border-[#49352D]/12 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#A64B32]">
                  <Mic className="w-4 h-4" />
                  <span>Odia Voice Input Sample</span>
                </div>
                <span className="text-xs text-[#49352D]/60">Converted to structured listing</span>
              </div>
              <p className="text-sm text-[#49352D] font-[var(--font-odia)] leading-relaxed bg-white p-3 rounded-lg border border-[#49352D]/10">
                “ଏହା କଟକର ହାତତିଆରି ସମ୍ବଲପୁରୀ ସୂତା ଶାଢ଼ୀ, ଦାମ୍ ୩,୨୦୦ ଟଙ୍କା।”
              </p>
              <div className="grid grid-cols-3 gap-2 text-xs pt-1">
                <div className="bg-white p-2.5 rounded-lg border border-[#49352D]/10">
                  <p className="text-[#49352D]/60">Item</p>
                  <p className="font-semibold text-[#49352D]">Sambalpuri Cotton Saree</p>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#49352D]/10">
                  <p className="text-[#49352D]/60">Origin</p>
                  <p className="font-semibold text-[#49352D]">Cuttack / Handloom</p>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#49352D]/10">
                  <p className="text-[#49352D]/60">Suggested Price</p>
                  <p className="font-semibold text-[#354C3C] tabular-nums">₹3,200</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#F7F1E5]/70 border border-[#49352D]/10">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#D5AD59] shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#49352D]">No Smartphone? Assisted Onboarding</p>
                  <p className="text-xs text-[#49352D]/75">
                    Local representatives visit, photograph your work, and coordinate orders.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenModal('Creator / Artisan')}
                className="text-xs font-semibold text-[#A64B32] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
              >
                Request Visit
              </button>
            </div>
          </div>
        )}

        {/* Bottom quiet bar inside card */}
        <div className="pt-3 border-t border-[#49352D]/10 flex items-center justify-between gap-4 text-xs text-[#49352D]/70">
          <span>Initial Pilot · Cuttack &amp; Nearby Areas, Odisha</span>
          <button
            type="button"
            onClick={() => onOpenModal('Buyer / Cultural Explorer')}
            className="font-semibold text-[#A64B32] hover:text-[#8A3B26] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Join Pilot Waitlist →
          </button>
        </div>
      </div>
    </div>
  );
};
