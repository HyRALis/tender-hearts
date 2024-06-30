declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      NEXT_PUBLIC_DOMAIN: string;
      NEXT_PUBLIC_DOMAIN_API: string;
      AUTH_SECRET: string;
      AUTH_GOOGLE_ID: string;
      AUTH_GOOGLE_SECRET: string;
      AUTH_FACEBOOK_ID: string;
      AUTH_FACEBOOK_SECRET: string;
      AUTH_TWITCH_ID: string;
      AUTH_TWITCH_SECRET: string;
    }
  }
}

export {};
