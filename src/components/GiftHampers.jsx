import { HAMPER_SPOTLIGHT, HAMPER_SIDE_CARDS } from "../data/products"

function GiftHampers() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="hampers">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
              Handcrafted Celebrations
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary">
              Make Every Occasion Sweeter.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Thoughtful gifts, traditional flavours and sweet surprises for the people who matter most.
            </p>
          </div>
          <a
            className="px-space-xl py-space-md rounded-full bg-secondary-container hover:bg-secondary hover:text-on-secondary text-on-surface font-label-lg text-label-lg shadow-md transition-all flex items-center gap-space-xs w-fit"
            href="https://wa.me/917871110615?text=Hello%20SDK%20Enterprise,%20I%20would%20like%20to%20enquire%20about%20your%20Gift%20Hampers%20and%20custom%20bouquet%20options."
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Customise Your Gift on WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          <div className="lg:col-span-7 rounded-3xl bg-surface-container-lowest p-space-lg shadow-md flex flex-col md:flex-row gap-space-lg">
            <div className="md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden bg-surface-container">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                src={HAMPER_SPOTLIGHT.image}
                alt={HAMPER_SPOTLIGHT.alt}
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-between">
              <div className="flex flex-col gap-space-xs">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary text-on-secondary w-fit">
                  <span className="material-symbols-outlined text-[14px]">star</span>
                  <span className="font-label-sm text-label-sm uppercase">Signature Creation</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary">{HAMPER_SPOTLIGHT.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {HAMPER_SPOTLIGHT.description}
                </p>
                <ul className="flex flex-col gap-1 text-on-surface font-body-sm text-body-sm pt-space-xs">
                  {HAMPER_SPOTLIGHT.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-space-md">
                <a
                  className="w-full py-space-sm rounded-full bg-secondary-container hover:bg-secondary hover:text-on-secondary text-on-surface font-label-md text-label-md text-center block transition-all"
                  href={`https://wa.me/917871110615?text=${HAMPER_SPOTLIGHT.whatsappText}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Enquire for Write &amp; Bite
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {HAMPER_SIDE_CARDS.map((card) => (
              <div
                key={card.id}
                className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm hover:shadow-md transition-all flex items-center gap-space-md"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-surface-container shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={card.image}
                    alt={card.alt}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-space-xs">
                  <h4 className="font-title-md text-title-md text-on-surface">{card.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    {card.description}
                  </p>
                  <a
                    className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-space-xs"
                    href={`https://wa.me/917871110615?text=${card.whatsappText}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Enquire Hamper</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GiftHampers
