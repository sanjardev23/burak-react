/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVER_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "swiper/css";
declare module "swiper/css/*";
