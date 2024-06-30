import { CssBaseline } from '@mui/material';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '../globals.css';
import { AuthProvider } from '../_lib/shared/components/layout/providers/AuthProvider';
import connectDb from '../config/db';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  await connectDb();

  return (
    <html lang={locale}>
      <body style={{ width: '100vw', height: '100vh', background: 'white' }}>
        <SpeedInsights />
        <AuthProvider>
          <NextIntlClientProvider messages={messages}>
            <CssBaseline />
            {children}
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
