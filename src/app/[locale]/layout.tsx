import clsx from 'clsx';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import Footer from 'components/Footer';
import Header from 'components/Header';
import MobileHeader from 'components/HeaderMobile';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'de'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title'),
    description: 'Superlative Software Home',
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html className="h-full scroll-smooth" lang={locale}>
      <body className={clsx(roboto.className, 'relative flex h-full flex-col bg-black text-white pt-10')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <MobileHeader />
          <main className='flex-1'>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
