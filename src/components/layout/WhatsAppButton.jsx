import React from 'react';
import { MessageCircle } from 'lucide-react';
import { hospitalConfig } from '../../config/hospitalConfig';

export function WhatsAppButton() {
  const { whatsapp } = hospitalConfig;

  // When disabled or when phone number is empty, hide completely
  if (!whatsapp?.enabled || !whatsapp.number) {
    return null;
  }

  const encodedMsg = encodeURIComponent(
    whatsapp.message || 'Hello, I would like to enquire about an appointment.'
  );
  const whatsappUrl = `https://wa.me/${whatsapp.number}?text=${encodedMsg}`;

  return (
    <aside aria-label="WhatsApp Quick Chat" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Chat on WhatsApp with patient support"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          WhatsApp Support
        </span>
      </a>
    </aside>
  );
}
