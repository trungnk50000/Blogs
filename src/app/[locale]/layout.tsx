import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import { locales } from "@/config";
import localFont from "next/font/local";
import Transition from "@/app/transition";
import Footer from "@/components/Footer";

const mali = localFont({
  src: [
    {
      path: "../../../public/fonts/Mali-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mali-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Mali-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Mali-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mali-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Mali-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mali-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Mali-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mali-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Mali-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Mali-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="" lang={locale}>
      <body className={clsx(mali.className, "")}>
        <NextIntlClientProvider messages={messages}>
          <main className="relative min-f-screen bg-background">
            <Navigation />
            <Transition>
              <div className="flex-grow mt-20 mb-20">{children}</div>
            </Transition>
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
