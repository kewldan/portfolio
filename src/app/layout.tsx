import '@/app/globals.css'

import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import Navbar from "@/components/Navbar";
import {Analytics} from '@vercel/analytics/react';

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
        <head>
            <title>kewldan</title>
            <meta httpEquiv="Content-Security-Policy"
                  content="default-src 'self' vitals.vercel-insights.com"/>
        </head>
        <body className={`${inter.className} bg-[#1d232a] overflow-x-hidden`}>
        <Navbar/>
        {children}
        <Analytics/>
        </body>
        </html>
    )
}
