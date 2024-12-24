'use client';

import {cn} from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";
import {useTranslations} from "next-intl";

export type NavItem = {
    name: string;
    href: string;
}

export default function NavbarLink({item}: { item: NavItem }) {
    const t = useTranslations('Nav');
    const pathname = usePathname();

    return (
        <Link href={item.href}
              className={cn("px-4 py-2 transition-colors", pathname !== item.href && "text-neutral-600 hover:text-neutral-400 dark:text-neutral-400 dark:hover:text-neutral-300")}>
            {t(item.name)}
        </Link>
    )
}