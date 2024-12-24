import {getTranslations} from "next-intl/server";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default async function NotFound() {
    const t = await getTranslations('NotFound');

    return (
        <main className="flex flex-col items-center footer-screen-slide justify-center">
            <div className="text-center space-y-4">
                <p className="text-9xl font-extrabold">404</p>
                <p className="z-10">{t('details')}</p>
                <Button asChild className="w-full">
                    <Link href="/">
                        {t('back')}
                    </Link>
                </Button>
            </div>
        </main>
    )
}