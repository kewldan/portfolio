import {getTranslations} from "next-intl/server";

export default async function MarketPage() {
    const t = await getTranslations('NotFound');

    return (
        <main className="flex items-center footer-screen-slide justify-center text-5xl font-black">
            {t('ops')}
        </main>
    )
}