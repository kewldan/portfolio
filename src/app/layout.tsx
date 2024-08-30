import '@/app/globals.css'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Navbar from "@/components/navbar";
import {ThemeProvider as NextThemesProvider} from "next-themes"
import {twMerge} from "tailwind-merge";
import Footer from "@/components/footer";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages} from "next-intl/server";

const inter = Inter({subsets: ['latin', 'cyrillic'], display: 'fallback'})

export const metadata: Metadata = {
    title: 'kewldan',
    description: 'Indie developer from Russia',
}

export default async function RootLayout({
                                             children,
                                         }: {
    children: React.ReactNode
}) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning className="scroll-smooth">
        <body
            className={twMerge(`bg-white dark:bg-[#09090b] overflow-x-hidden antialiased font-sans`, inter.className)}>
        <main className='min-h-screen flex flex-col items-center w-full justify-between'>
            <NextIntlClientProvider messages={messages}>
                <NextThemesProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                        <Navbar/>
                        {children}
                        <Footer/>
                </NextThemesProvider>
            </NextIntlClientProvider>
        </main>
        </body>
        </html>
    )
}
