import { Product, formatMRR } from '../data/products'
import { Sparkline } from './Sparkline'

interface Props { product: Product }

export function ProductCard({ product }: Props) {
  const url = product.website || '#'
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card bg-white shadow hover:shadow-xl transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden group hover:scale-[1.02] hover:-translate-y-1"
    >
      <div className="card-body gap-3 p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 grid place-items-center text-primary text-lg font-bold">
              {product.name.charAt(0)}
            </div>
            <h3 className="font-bold leading-tight text-gray-900">{product.name}</h3>
          </div>
          <span className="badge bg-primary/10 text-primary border-0 text-xs font-semibold px-3 py-3">
            {formatMRR(product.mrr, product.currency)}
          </span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.tagline}</p>
        <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden -mx-2 -mb-2 p-4">
          <Sparkline data={product.monthlySeries} stroke="#f59e0b" />
        </div>
      </div>
    </a>
  )
}
