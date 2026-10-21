import { BRAND, FOOTER_CATEGORIES } from "../data/products"

function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl border-t border-surface-variant">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
          <div className="flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="SDK Enterprise Brand Logo"
                className="h-8 w-auto object-contain"
                src={BRAND.logoSrc}
              />
              <span className="font-headline-sm text-headline-sm text-primary">{BRAND.name}</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Exclusive Amul Parlour and authentic Arcot Mani Mark traditional snacks, pure ghee sweets, and celebratory
              gift hampers crafted for every festivity.
            </p>
            <div className="flex items-center gap-space-xs text-on-surface">
              <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
              <span className="font-label-md text-label-md">Amul Cold-Chain &amp; Mani Mark Recipe</span>
            </div>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-primary">Quick Categories</span>
            <ul className="flex flex-col gap-space-xs">
              {FOOTER_CATEGORIES.map((item) => (
                <li key={item.label}>
                  <a
                    className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-primary">Store &amp; Contact</span>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">location_on</span>
                <span>{BRAND.location}</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[18px]">call</span>
                <a className="hover:text-primary" href="tel:7871110615">
                  +91 {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-secondary text-[18px]">schedule</span>
                <span>{BRAND.hours}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            <span className="font-title-md text-title-md text-primary">Follow &amp; Connect</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Stay updated with festival hampers, seasonal sweet specials, and fresh arrivals.
            </p>
            <div className="flex items-center gap-space-sm">
              <a
                className="flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container text-on-surface hover:bg-primary-container hover:text-on-primary transition-colors"
                href={BRAND.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                <span className="font-label-md text-label-md">Instagram</span>
              </a>
              <a
                className="p-space-sm rounded-full bg-secondary-container text-on-surface hover:bg-secondary hover:text-on-secondary transition-colors"
                href="https://wa.me/917871110615?text=Hello%20SDK%20Enterprise,%20I%20would%20like%20to%20enquire%20about%20your%20products."
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-space-xl pt-space-md border-t border-surface-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            &copy; 2025 SDK Enterprise. All rights reserved. Exclusive Parlour, Lawspet, Puducherry.
          </p>
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Puducherry's Trusted Dairy &amp; Heritage Sweets
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
