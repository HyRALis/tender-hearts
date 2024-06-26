declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      NEXT_PUBLIC_DOMAIN: string;
      NEXT_PUBLIC_DOMAIN_API: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      FACEBOOK_CLIENT_ID: string;
      FACEBOOK_CLIENT_SECRET: string;
      TWITCH_CLIENT_ID: string;
      TWITCH_CLIENT_SECRET: string;
    }
  }
}

export {};
