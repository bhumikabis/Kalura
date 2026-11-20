import React, { useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  initialRole?: string;
  onClose: () => void;
}

const ROLES = [
  'Buyer / Cultural Explorer',
  'Creator / Artisan',
  'Traditional Food Maker',
  'Folk Artist / Performer',
  'Local Representative / Volunteer',
];

const PILLARS = ['Kala (Crafts)', 'Rasa (Cuisine)', 'Lok (Folk Arts)', 'Utsav (Festivals)', 'Anubhav (Workshops)'];

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({
  isOpen,
  initialRole = 'Buyer / Cultural Explorer',
  onClose,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState(initialRole);
  const [city, setCity] = useState('Cuttack, Odisha');
  const [pillar, setPillar] = useState(PILLARS[0]);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setRole(initialRole);
  }, [initialRole]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedContact = contact.trim();

    if (!trimmedName) {
      setError('Please enter your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-]{8,15}$/;
    if (!emailRegex.test(trimmedContact) && !phoneRegex.test(trimmedContact)) {
      setError('Please enter a valid email address or 10-digit mobile number.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setContact('');
    setError('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#49352D]/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="kalura-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) resetAndClose();
      }}
    >
      <div className="bg-white rounded-2xl border border-[#49352D]/15 shadow-xl w-full max-w-lg overflow-hidden">
        <div className="px-6 py-5 bg-[#F7F1E5] border-b border-[#49352D]/10 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#A64B32]">Cuttack &amp; Odisha Early Access</p>
            <h2 id="kalura-modal-title" className="text-xl font-bold text-[#49352D]">
              {submitted ? 'You are on the Kalura list' : 'Join the Kalura Pilot'}
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#49352D]/70 hover:text-[#49352D] hover:bg-[#49352D]/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 space-y-5 text-center">
            <div className="w-12 h-12 rounded-full bg-[#354C3C]/10 text-[#354C3C] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#49352D]">
                Thank you, {name.trim()}.
              </h3>
              <p className="text-sm text-[#49352D]/80 leading-relaxed">
                We have noted your interest as a <span className="font-semibold text-[#49352D]">{role}</span> in{' '}
                <span className="font-semibold text-[#49352D]">{city}</span>. As we open onboarding and verified listings in Cuttack, our local team will reach out via{' '}
                <span className="font-semibold text-[#49352D]">{contact.trim()}</span>.
              </p>
            </div>
            <button
              type="button"
              onClick={resetAndClose}
              className="w-full py-3 px-5 rounded-lg bg-[#354C3C] text-white font-semibold text-sm hover:bg-[#2A3D30] transition-colors cursor-pointer"
            >
              Return to Kalura
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4" noValidate>
            <p className="text-sm text-[#49352D]/80">
              Reserve early buyer access, register as a local artisan or food maker, or volunteer to assist creators without smartphones.
            </p>

            {error && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-[#A64B32]/10 border border-[#A64B32]/25 text-xs font-medium text-[#A64B32]"
              >
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="modal-role" className="block text-xs font-semibold text-[#49352D]">
                I am joining as
              </label>
              <select
                id="modal-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#49352D]/20 bg-white text-sm text-[#49352D] focus:outline-none focus:ring-2 focus:ring-[#A64B32]/30 focus:border-[#A64B32]"
              >
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="modal-name" className="block text-xs font-semibold text-[#49352D]">
                  Full Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Ananya Das"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#49352D]/20 text-sm text-[#49352D] placeholder:text-[#49352D]/40 focus:outline-none focus:ring-2 focus:ring-[#A64B32]/30 focus:border-[#A64B32]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-contact" className="block text-xs font-semibold text-[#49352D]">
                  Email or WhatsApp Number
                </label>
                <input
                  id="modal-contact"
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="you@example.com or +91..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#49352D]/20 text-sm text-[#49352D] placeholder:text-[#49352D]/40 focus:outline-none focus:ring-2 focus:ring-[#A64B32]/30 focus:border-[#A64B32]"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="modal-city" className="block text-xs font-semibold text-[#49352D]">
                  City / District
                </label>
                <input
                  id="modal-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Cuttack, Odisha"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#49352D]/20 text-sm text-[#49352D] focus:outline-none focus:ring-2 focus:ring-[#A64B32]/30 focus:border-[#A64B32]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-pillar" className="block text-xs font-semibold text-[#49352D]">
                  Primary Interest
                </label>
                <select
                  id="modal-pillar"
                  value={pillar}
                  onChange={(e) => setPillar(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#49352D]/20 bg-white text-sm text-[#49352D] focus:outline-none focus:ring-2 focus:ring-[#A64B32]/30 focus:border-[#A64B32]"
                >
                  {PILLARS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="py-2.5 px-4 rounded-lg text-sm font-medium text-[#49352D]/75 hover:text-[#49352D] hover:bg-[#49352D]/5 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2.5 px-6 rounded-lg bg-[#A64B32] text-white text-sm font-semibold hover:bg-[#8E3E28] transition-colors cursor-pointer"
              >
                Request Early Access
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
