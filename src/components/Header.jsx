import { useState } from "react"
import { BRAND, NAV_LINKS } from "../data/products"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(43,36,30,0.06)]">
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <img src="/SDK%20Enterprises%20Purple%20Logo.png" alt="SDK Enterprises" className="h-12 w-auto max-w-[180px] object-contain shrink-0" />
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-title-md text-title-md text-primary">{BRAND.name}</span>
                <span className="text-secondary text-title-md">&#10023;</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[14px]">location_on</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Lawspet, Puducherry
                </span>
              </div>
            </div>
          </div>

          <nav
            className="hidden xl:flex items-center gap-space-sm bg-surface-container-low px-space-md py-space-xs rounded-full"
            data-active-classes="bg-primary-container text-on-primary font-title-md rounded-full shadow-[0_2px_8px_rgba(13,71,161,0.2)]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className="px-space-md py-space-xs rounded-full font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-space-sm shrink-0">
            <a
              className="hidden lg:flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
              href="tel:7871110615"
            >
              <span className="material-symbols-outlined text-primary text-[18px]">call</span>
              <span className="font-label-md text-label-md text-on-surface">{BRAND.phone}</span>
            </a>
            <a
              className="hidden sm:inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-secondary-container hover:bg-secondary hover:text-on-secondary text-on-surface transition-all shadow-[0_4px_16px_rgba(254,166,25,0.25)]"
              href="https://wa.me/917871110615?text=Hello%20SDK%20Enterprise,%20I%20would%20like%20to%20enquire%20about%20your%20products."
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="font-label-lg text-label-lg">Order on WhatsApp</span>
            </a>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
            <button
              aria-label="Toggle Mobile Menu"
              className="xl:hidden p-space-sm rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-surface z-50 transform transition-transform duration-300 ease-in-out shadow-[0_20px_40px_-8px_rgba(43,36,30,0.25)] flex flex-col p-space-lg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="mobile-drawer"
      >
        <div className="flex items-center justify-between pb-space-lg border-b border-surface-variant">
        <div className="flex items-center gap-space-sm">
          <img src="/SDK%20Enterprises%20Purple%20Logo.png" alt="SDK Enterprises" className="h-9 w-auto max-w-[150px] object-contain shrink-0" />
          <span className="font-title-md text-title-md text-primary">{BRAND.name}</span>
        </div>
          <button
            aria-label="Close Menu"
            className="p-space-xs rounded-full bg-surface-container text-on-surface"
            onClick={() => setMenuOpen(false)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="mt-space-md flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low">
          <span className="material-symbols-outlined text-secondary text-[16px]">location_on</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Lawspet, Puducherry</span>
        </div>
        <nav className="mt-space-lg flex flex-col gap-space-sm flex-1 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="px-space-md py-space-sm rounded-xl font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="pt-space-md border-t border-surface-variant flex flex-col gap-space-sm">
          <a
            className="flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container text-on-surface"
            href="tel:7871110615"
          >
            <span className="material-symbols-outlined text-primary text-[18px]">call</span>
            <span className="font-label-md text-label-md">Call: {BRAND.phone}</span>
          </a>
          <a
            className="flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-full bg-secondary-container text-on-surface font-label-lg text-label-lg shadow-md"
            href="https://wa.me/917871110615?text=Hello%20SDK%20Enterprise,%20I%20would%20like%20to%20enquire%20about%20your%20products."
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Header
