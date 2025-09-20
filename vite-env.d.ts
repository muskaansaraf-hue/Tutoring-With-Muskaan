
interface ImportMetaEnv {
  readonly VITE_CALENDLY_URL: string
  readonly VITE_CALENDLY_EMBED_URL: string
  readonly VITE_CALENDLY_API_TOKEN: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_API_TIMEOUT: string
  readonly VITE_NODE_ENV: string
  readonly VITE_CONTACT_EMAIL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
