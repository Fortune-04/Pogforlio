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
    slug: 'codefast',
    name: 'CodeFast',
    tagline: 'Learn to code in weeks, not years',
    mrr: 19300,
    currency: 'USD',
    monthlySeries: [22000, 15000, 11000, 10000, 9500, 8000, 7600, 7400, 7200, 7000, 6900, 6800],
    website: '#'
  },
  {
    slug: 'shipfast',
    name: 'ShipFast',
    tagline: 'Ship your startup in days, not months',
    mrr: 16100,
    currency: 'USD',
    monthlySeries: [6000, 5600, 5200, 5100, 5000, 4700, 4600, 4500, 4400, 4550, 4600, 4650],
    website: '#'
  },
  {
    slug: 'datafast',
    name: 'DataFast',
    tagline: 'Grow your startup with data, not guesses',
    mrr: 14100,
    currency: 'USD',
    monthlySeries: [3500, 3600, 3700, 3750, 3800, 4000, 4300, 4700, 5000, 5600, 6200, 7100],
    website: '#'
  },
  {
    slug: 'zenvoice',
    name: 'Zenvoice',
    tagline: 'Focus on product, not invoices',
    mrr: 285,
    currency: 'USD',
    monthlySeries: [1200, 1000, 900, 850, 820, 780, 760, 750, 730, 720, 710, 705],
    website: '#'
  },
  {
    slug: 'indie-page',
    name: 'Indie Page',
    tagline: 'All your startups in one page',
    mrr: 625,
    currency: 'USD',
    monthlySeries: [3600, 3400, 3200, 3000, 2800, 2700, 2600, 2500, 2450, 2420, 2400, 2390],
    website: '#'
  },
  {
    slug: 'popup',
    name: 'PoopUp',
    tagline: 'Turn visitors into customers with wake‑up call',
    mrr: 66,
    currency: 'USD',
    monthlySeries: [200, 190, 180, 175, 170, 165, 160, 158, 157, 156, 155, 154],
    website: '#'
  }
]

export function formatMRR(value: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: 0 }).format(value) + '/mo'
}
