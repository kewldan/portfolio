'use client';

import React from 'react'
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";
import Link from "next/link";
import ThemeButton from "@/components/themeToggle";
import I18nSwitch from "@/components/i18nSwitch";
import {cn} from "@/lib/utils";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";

const navigation = [
    {name: 'home', href: '/'},
    {name: 'career', href: '/career'},
]

export default function Example() {
    const t = useTranslations('Nav');

    const pathname = usePathname();

    return (
        <nav className="w-full sticky top-0 border-b-2 h-14 px-4 z-50 bg-background">
            <div className="flex justify-between items-center h-full">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="shrink-0 flex sm:hidden" size="icon" variant="outline">
                            <Menu/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle></SheetTitle>
                            <SheetDescription></SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col items-start gap-4 text-md font-medium">
                            {navigation.map(item => (
                                <Link href={item.href} key={item.href}>
                                    <span
                                        className={cn(pathname !== item.href && "text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300")}>{t(item.name)}</span>
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="flex gap-6 items-center">
                    <div className="text-xl font-bold space-x-0.5">
                        <span className="text-muted-foreground font-medium">dev://</span>
                        <span>kewldan</span>
                    </div>
                    <div className="gap-4 text-md font-medium hidden sm:flex">
                        {
                            navigation.map(item => (
                                <Link href={item.href} key={item.href}>
                                    <span
                                        className={cn(pathname !== item.href && "text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300")}>{t(item.name)}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <I18nSwitch/>
                    <ThemeButton/>
                </div>
            </div>
        </nav>
    )
}
