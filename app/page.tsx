import { products } from '../data/products'
import { ProductCard } from '../components/ProductCard'
import { ProfileSidebar } from '../components/ProfileSidebar'

export default function HomePage() {
  return (
    <div className="space-y-12">
      <div className="max-w-2xl mx-auto">
        <ProfileSidebar />
      </div>
      <section id="products" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </section>
    </div>
  )
}
