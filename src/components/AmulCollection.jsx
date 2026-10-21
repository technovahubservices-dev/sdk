import { useState } from "react"
import { AMUL_TABS, AMUL_PRODUCTS } from "../data/products"
import ProductCard from "./ProductCard"

function AmulCollection() {
  const [activeTab, setActiveTab] = useState("epic")

  const tabBtnBase =
    "px-space-lg py-space-xs rounded-full font-label-md text-label-md transition-all"

  return (
    <section className="w-full py-space-xl bg-surface" id="amul-collection">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-space-xl">
        <div className="flex flex-col gap-space-xs text-center max-w-2xl mx-auto">
          <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
            Exclusive Dairy Flavours
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary">
            Featured Amul Delights &amp; Flavours
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            From artisan EPIC ice creams to rich 1-litre family tubs and dark chocolates. Availability to be confirmed
            upon WhatsApp enquiry.
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-space-xs bg-surface-container-low p-1.5 rounded-full w-fit mx-auto">
          {AMUL_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={
                activeTab === tab.id
                  ? `${tabBtnBase} bg-primary-container text-on-primary`
                  : `${tabBtnBase} text-on-surface-variant hover:text-on-surface hover:bg-surface-container`
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {AMUL_TABS.map((tab) => (
          <div
            key={tab.id}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg ${
              activeTab === tab.id ? "grid" : "hidden"
            }`}
          >
            {AMUL_PRODUCTS[tab.id].map((product) => (
              <ProductCard key={product.id} product={product} tabKey={tab.id} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default AmulCollection
