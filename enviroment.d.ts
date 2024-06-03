declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      NEXT_PUBLIC_DOMAIN: string;
      NEXT_PUBLIC_DOMAIN_API: string;
    }
  }
}

export {};
