import { CssBaseline } from '@mui/material';
import { grey } from '@mui/material/colors';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '../globals.css';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ width: '100vw', height: '100vh', background: grey[900] }}>
        <NextIntlClientProvider messages={messages}>
          <CssBaseline />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
