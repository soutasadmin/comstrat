// Central place for company facts so copy stays consistent across pages.
// VERIFY these against the user before launch.
export const site = {
  name: 'Comstrat Industrial Ltd',
  shortName: 'Comstrat',
  tagline: 'Automotive batteries, lubricants & spare parts — sourced worldwide, delivered to Europe.',
  url: 'https://www.comstrat-ltd.com',
  email: 'info@comstrat-ltd.com',
  phone: '+852 1842 5498',
  phoneHref: '+85218425498',
  address: {
    line1: '1101, 11F, China Insurance Group Building',
    line2: '141 Des Voeux Road Central',
    city: 'Hong Kong',
  },
  // Manufacturing / sourcing regions
  sourcing: ['Korea', 'China', 'Indonesia', 'Bulgaria', 'Italy', 'Ukraine'],
};

// Prepends Astro's BASE_URL so asset links stay correct regardless of deployment base.
// Usage: url('/about') → '/about'
export const url = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];
