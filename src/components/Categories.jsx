import { CATEGORY_CARDS } from "../data/products"

function Categories() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="categories">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Our Collections</span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary">
              Explore Our Collections
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Browse genuine Amul dairy products, Arcot Mani Mark savoury snacks, edible burfi bouquets, and festive
              gift boxes.
            </p>
          </div>
          <a
            className="px-space-lg py-space-sm rounded-full bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-all flex items-center gap-space-xs w-fit"
            href="https://wa.me/917871110615?text=Hello%20SDK%20Enterprise,%20please%20send%20me%20your%20complete%20product%20catalog."
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Request Full Catalog</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {CATEGORY_CARDS.map((card) => (
            <div
              key={card.id}
              className="rounded-3xl bg-surface-container-lowest p-space-lg flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col gap-space-md">
                <div className="h-44 w-full rounded-2xl overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={card.image}
                    alt={card.alt}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`font-label-sm text-label-sm ${card.badgeColor} uppercase font-bold`}>
                      {card.badge}
                    </span>
                    <span className={`material-symbols-outlined ${card.badgeColor} text-[18px]`}>{card.badgeIcon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">{card.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">{card.description}</p>
                </div>
              </div>
              <div className="pt-space-md">
                <a
                  className={`w-full py-space-sm rounded-full bg-surface-container ${card.linkBg} ${card.linkText === "Enquire Snacks" ? "text-secondary" : "text-primary"} font-label-md text-label-md text-center block transition-all`}
                  href={card.linkHref}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  target={card.external ? "_blank" : undefined}
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
