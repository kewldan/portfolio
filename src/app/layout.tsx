import '@/app/globals.css'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import {ThemeProvider as NextThemesProvider} from "next-themes"

const inter = Inter({subsets: ['latin', 'cyrillic'], display: 'fallback'})

export const metadata: Metadata = {
    title: 'kewldan',
    description: 'Indie developer from Russia',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} bg-white dark:bg-[#09090b] overflow-x-hidden min-h-screen w-full antialiased font-sans`}>
        <main className='min-h-screen flex flex-col items-center w-full'>
            <NextThemesProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
            >
                <Navbar/>
                <Socials>
                    {children}
                </Socials>
            </NextThemesProvider>
        </main>
        </body>
        </html>
    )
}
