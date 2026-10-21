import { BRAND, ABOUT_FEATURES } from "../data/products"

function About() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
              Our Heritage &amp; Quality
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary">
              Your Local Destination for Everyday Favourites &amp; Thoughtful Gifts.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              SDK Enterprise brings together Amul favourites and Arcot Mani Mark snacks, sweets and gift ideas. From
              everyday dairy essentials and refreshing ice creams to traditional burfi bouquets and chocolate gifts,
              discover something delicious for every occasion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              {ABOUT_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs"
                >
                  <div className={`w-10 h-10 rounded-xl ${feature.iconBg} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-[20px]">{feature.icon}</span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface">{feature.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface-container">
              <img
                className="w-full h-[450px] object-cover"
                src={BRAND.aboutImage}
                alt="Store interior of SDK Enterprise parlour in Lawspet Puducherry showcasing tidy Amul deep freezers, shelves stacked with Mani Mark snacks and colourful gift hampers"
              />
              <div className="absolute bottom-6 left-6 right-6 p-space-md rounded-2xl bg-surface/90 backdrop-blur-md shadow-lg flex items-center justify-between">
                <div>
                  <p className="font-title-md text-title-md text-primary">{BRAND.name}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {BRAND.tagline} · Call: {BRAND.phone}
                  </p>
                </div>
                <a
                  className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center hover:bg-primary transition-all"
                  href="tel:7871110615"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
