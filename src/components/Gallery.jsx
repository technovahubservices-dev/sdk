import { BRAND, GALLERY_TILES } from "../data/products"

function Gallery() {
  return (
    <section className="w-full py-space-xl bg-surface" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">Follow Our Journey</span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary">
              A Little Taste of Our World
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Discover our latest products, sweet creations, gift ideas, and new arrivals straight from Lawspet.
            </p>
          </div>
          <a
            className="px-space-lg py-space-sm rounded-full bg-surface-container-highest hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md transition-all flex items-center gap-space-xs w-fit"
            href={BRAND.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            <span>{BRAND.instagramHandle}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md">
          {GALLERY_TILES.map((tile) => (
            <a
              key={tile.id}
              className="group relative rounded-2xl overflow-hidden h-64 bg-surface-container block shadow-sm"
              href={BRAND.instagram}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={tile.image}
                alt={tile.alt}
              />
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-space-sm text-center text-on-primary">
                <span className="material-symbols-outlined text-[24px]">favorite</span>
                <span className="font-label-sm text-label-sm mt-1">{tile.label}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            className="px-space-xl py-space-md rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all flex items-center gap-space-xs"
            href={BRAND.instagram}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">photo_camera</span>
            <span>Follow Us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
