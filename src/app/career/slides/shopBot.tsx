import React from "react";
import {useTranslations} from "next-intl";
import {StackCard, StackCardItem} from "@/components/sections/skills/stackCard";
import Image from "next/image";
import {CheckCircle, ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const used: StackCardItem[] = [
    {type: 'software', name: 'Git', icon: 'git.svg'},
    {type: 'service', name: 'Github', icon: 'github.svg', needToInvert: true},
    {type: 'os', name: 'Ubuntu', icon: 'ubuntu.svg'},
    {type: 'os', name: 'Windows', icon: 'windows.svg'},
    {type: 'framework', name: 'Aiogram', icon: 'aiogram.webp'},
    {type: 'ide', name: 'Pycharm', icon: 'pycharm.svg'},
    {type: 'lib', name: 'Beanie', icon: 'beanie.svg'},
    {type: 'service', name: 'Cloudflare', icon: 'cloudflare.svg'},
    {type: 'db', name: 'MongoDB', icon: 'mongodb.svg'},
    {type: 'software', name: 'Docker', icon: 'docker.svg'},
]

export default function ShopBot() {
    const t = useTranslations('ShopBot');

    return (
        <div className="grid grid-cols-2 w-full slide" id="FreeShopBot">
            <div className="flex flex-col items-center justify-center gap-3">
                <div className="w-full max-w-xl flex flex-col items-start gap-4">
                    <Link href="#FreeShopBot" className="font-extrabold tracking-tighter text-7xl">
                        FreeShop Bot
                    </Link>
                    <span>
                        {t('description')}
                    </span>
                    <ul className="list-disc space-y-2">
                        <li>
                            {t('about')}
                        </li>
                        <li>
                            {t('details')} <CheckCircle className="ml-1 inline"/>
                        </li>
                        <li>
                            {t('now')}
                        </li>
                    </ul>
                    <span className="text-neutral-400">
                        13.08.2023 - 27.07.2024
                    </span>
                </div>
                <div className="w-full max-w-xl grid grid-cols-1 gap-2">
                    <Button className="w-full" asChild>
                        <Link href="https://t.me/FreeShopPain_Bot"
                              className="w-full flex flex-row items-center justify-between">
                            <span className="w-full"></span>
                            Telegram
                            <div className="w-full flex flex-row items-center justify-end">
                                <ExternalLink/>
                            </div>
                        </Link>
                    </Button>
                </div>
            </div>
            <div className=" flex flex-row items-center justify-center p-2">
                <Image src="https://cdn.kyl-team.ru/projects/ShopBot.gif" alt="Project" width={400}
                       height={400} className="object-fill rounded-md"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-full">
                <div className="w-full max-w-xl flex flex-col items-center gap-4">
                    <h3 className="text-4xl font-bold">
                        {t("solutions")}
                    </h3>
                    <ul className="list-disc space-y-2">
                        <li>{t("hierarchy")}</li>
                    </ul>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4">
                <h3 className="text-4xl font-bold">
                    {t('tech')}
                </h3>
                <div className="flex flex-row flex-wrap gap-4 justify-center max-w-2xl">
                    {
                        used.sort((a, b) => a.type.localeCompare(b.type)).map(item => (
                            <StackCard item={item} key={item.name}/>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}