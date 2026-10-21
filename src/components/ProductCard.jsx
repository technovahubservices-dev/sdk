function ProductCard({ product, tabKey }) {
  const isEpic = tabKey === "epic"
  const isTub = tabKey === "tubs"

  return (
    <div className="rounded-3xl bg-surface-container-lowest p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col gap-space-sm">
        <div className={`relative ${isEpic ? "h-48" : "h-44"} w-full rounded-2xl bg-surface-container overflow-hidden`}>
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.alt}
          />
          {isEpic && (
            <span
              className={`absolute top-3 left-3 px-space-sm py-0.5 rounded-full ${product.badgeColor} font-label-sm text-label-sm`}
            >
              {product.badge}
            </span>
          )}
        </div>
        {!isEpic && (
          <span className={`font-label-sm text-label-sm ${product.badgeColor} uppercase`}>{product.badge}</span>
        )}
        <h4 className="font-title-md text-title-md text-on-surface">{product.name}</h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{product.description}</p>
      </div>
      {isEpic ? (
        <a
          className="mt-space-md w-full py-space-xs rounded-full bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md text-center transition-all flex items-center justify-center gap-space-xs"
          href={`https://wa.me/917871110615?text=${product.whatsappText}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[16px]">chat</span>
          <span>Enquire on WhatsApp</span>
        </a>
      ) : isTub ? (
        <a
          className="mt-space-md py-space-xs rounded-full bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md text-center transition-all"
          href={`https://wa.me/917871110615?text=${product.whatsappText}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Enquire Availability
        </a>
      ) : (
        <a
          className="mt-space-md py-space-xs rounded-full bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-md text-label-md text-center transition-all"
          href={`https://wa.me/917871110615?text=${product.whatsappText}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Enquire on WhatsApp
        </a>
      )}
    </div>
  )
}

export default ProductCard
