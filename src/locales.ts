'use server';

import {cookies} from 'next/headers';
import {defaultLocale, Locale} from "@/config";

const COOKIE_NAME = 'NEXT_LOCALE';

export async function getUserLocale() {
    const data = await cookies();

    return data.get(COOKIE_NAME)?.value || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
    const data = await cookies();

    data.set(COOKIE_NAME, locale);
}