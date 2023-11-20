import '@/app/globals.css'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Navbar from "@/components/Navbar";
import {Analytics} from '@vercel/analytics/react';
import Socials from "@/components/Socials";

const inter = Inter({subsets: ['latin']})

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
        <body className={`${inter.className} bg-[#1d232a] overflow-x-hidden min-h-screen w-full`}>
        <main className='min-h-screen flex flex-col items-center w-full'>
            <Navbar/>
            <Socials>
                {children}
            </Socials>
        </main>
        <Analytics/>
        </body>
        </html>
    )
}
