export interface Product {
  slug: string
  name: string
  tagline: string
  mrr: number // monthly recurring revenue (placeholder)
  currency?: string
  monthlySeries: number[] // chronological revenue points
  website?: string
}

// Placeholder sample data; replace with real metrics or fetch from an API.
export const products: Product[] = [
  {
    slug: 'nextlife',
    name: 'NextLife',
    tagline: 'Financial tracking for the modern age',
    mrr: 19300,
    currency: 'USD',
    monthlySeries: [22000, 15000, 11000, 10000, 9500, 8000, 7600, 7400, 7200, 7000, 6900, 6800],
    website: '#'
  },
  {
    slug: 'robloxshooting',
    name: 'RobloxShooting',
    tagline: 'The ultimate FPS experience on Roblox',
    mrr: 16100,
    currency: 'USD',
    monthlySeries: [6000, 5600, 5200, 5100, 5000, 4700, 4600, 4500, 4400, 4550, 4600, 4650],
    website: '#'
  }
]

export function formatMRR(value: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value) + '/mo'
}
