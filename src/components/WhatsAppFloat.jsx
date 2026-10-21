function WhatsAppFloat() {  return (
    <aside className="fixed bottom-6 right-6 z-50">
      <a
        aria-label="Quick WhatsApp Contact"
        className="flex items-center gap-space-sm px-space-lg py-space-md rounded-full bg-secondary-container text-on-surface hover:bg-secondary hover:text-on-secondary transition-all shadow-[0_12px_28px_-4px_rgba(13,71,161,0.25)] hover:scale-105 active:scale-95"
        href="https://wa.me/917871110615?text=Hello%20SDK%20Enterprise,%20I%20would%20like%20to%20enquire%20about%20your%20products."
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[24px]">chat</span>
        <span className="font-label-lg text-label-lg font-bold hidden sm:inline">WhatsApp Order</span>
      </a>
    </aside>
  )
}

export default WhatsAppFloat
