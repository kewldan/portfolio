import {getRequestConfig} from "next-intl/server";
import {getUserLocale} from "@/locales";
import {defaultLocale, locales} from "@/i18n/config";

export default getRequestConfig(async () => {
    let locale = await getUserLocale();

    if (!locale || !locales.includes(locale as any)) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});