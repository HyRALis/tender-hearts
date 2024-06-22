import { CssBaseline } from '@mui/material';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '../globals.css';
import { AuthProvider } from '../_lib/shared/components/layout/providers/AuthProvider';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <AuthProvider>
      <html lang={locale}>
        <body style={{ width: '100vw', height: '100vh', background: 'white' }}>
          <SpeedInsights />
          <NextIntlClientProvider messages={messages}>
            <CssBaseline />
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
