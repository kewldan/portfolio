import '@/app/globals.css'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Navbar from "@/components/navbar";
import {ThemeProvider as NextThemesProvider} from "next-themes"
import {twMerge} from "tailwind-merge";
import {getSession} from "next-auth/react";
import AuthProvider from "@/components/authProvider";
import Footer from "@/components/footer";

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
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={twMerge(`bg-white dark:bg-[#09090b] overflow-x-hidden w-full antialiased font-sans`, inter.className)}>
        <main className='min-h-screen flex flex-col items-center w-full justify-between'>
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
            >
                <AuthProvider session={await getSession()}>
                    <Navbar/>
                    {children}
                    <Footer/>
                </AuthProvider>
            </NextThemesProvider>
        </main>
        </body>
        </html>
    )
}
