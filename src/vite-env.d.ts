/// <reference types="vite/client" />

// No VITE_ env vars — contact API runs server-side via Resend
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ImportMetaEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Static asset declarations
declare module "*.webp" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}
