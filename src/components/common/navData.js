export const navData = [
  {
    label: 'Domain',
    items: [
      { label: 'Domain Registration', href: 'https://billing.unifiedit.xyz/cart.php?a=add&domain=register', desc: 'Register your domain' },
      { label: 'Domain Renew', href: 'https://billing.unifiedit.xyz/index.php?rp=/login', desc: 'Renew from next year' },
      { label: 'Domain Transfer', href: 'https://billing.unifiedit.xyz/cart.php?a=add&domain=transfer', desc: 'Transfer from other registrar' },
      { label: 'Manage Domain', href: 'https://billing.unifiedit.xyz/index.php?rp=/login', desc: 'Manage your domains' },
      { label: 'WHOIS Privacy', href: 'https://billing.unifiedit.xyz/cart.php?a=add&domain=register', desc: 'Domain privacy protection' },
    ]
  },
  {
    label: 'Hosting',
    items: [
      { label: 'Web Hosting', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/web-hosting', desc: 'cPanel web hosting' },
      { label: 'Email Hosting', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/email-hosting', desc: 'cPanel email hosting' },
      { label: 'Reseller Hosting', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/reseller-hosting', desc: 'Provide hosting to your clients' },
    ]
  },
  {
    label: 'VPS',
    items: [
      { label: 'Managed VPS', href: 'https://billing.unifiedit.xyz/contact.php', desc: 'We manage your VPS' },
      { label: 'Unmanaged VPS', href: 'https://billing.unifiedit.xyz/contact.php', desc: 'Self-managed VPS' },
    ]
  },
  {
    label: 'Cloud',
    to: '/cloud',
  },
  {
    label: 'Web Development',
    to: '/services',
  },
  {
    label: 'Business Email',
    items: [
      { label: 'Business Email', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/business-email', desc: 'Professional email plan' },
      { label: 'Business Email Plus', href: 'https://billing.unifiedit.xyz/index.php?rp=/store/business-email', desc: 'Advanced email features' },
    ]
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]
