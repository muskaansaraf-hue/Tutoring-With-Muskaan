export const env = {
  calendly: {
    url: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/your-username/30min-session',
    embedUrl: import.meta.env.VITE_CALENDLY_EMBED_URL || 'https://calendly.com/your-username/30min-session',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '10000'),
  },
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'muskaan.tutoring@email.com',
  },
  isDevelopment: import.meta.env.VITE_NODE_ENV === 'development',
  isProduction: import.meta.env.VITE_NODE_ENV === 'production',
} as const
