import React from "react";
import {useTranslations} from "next-intl";
import {StackCard} from "@/components/sections/skills/stackCard";
import Image from "next/image";
import {CheckCircle} from "lucide-react";
import CareerTitle from "@/components/career/title";
import CareerDescription from "@/components/career/description";
import {CareerButton} from "@/components/career/button";
import {technologies, Technology} from "@/lib/technologies";
import CareerList from "@/components/career/list";
import CareerDate from "@/components/career/date";
import {CareerSlot} from "@/components/career/slot";
import CareerTemplate from "@/components/career/template";
import {CareerSlotTitle} from "@/components/career/slotTitle";

const used: Technology[] = [
    'git',
    'github',
    'ubuntu',
    'windows',
    'aiogram',
    'pycharm',
    'beanie',
    'cloudflare',
    'mongodb',
    'docker',
    'telegram'
]

const anchor = "FreeShopBot";

export default function ShopBot() {
    const t = useTranslations('ShopBot');

    return (
        <CareerTemplate anchor={anchor}>
            <CareerSlot>
                <div className="w-full max-w-xl flex flex-col items-start gap-4">
                    <CareerTitle anchor={anchor} name="FreeShop Bot"/>
                    <CareerDescription>
                        {t('description')}
                    </CareerDescription>
                    <CareerList items={[
                        t('about'),
                        <p key='details'>{t('details')} <CheckCircle className="ml-1 inline"/></p>,
                        t('now')
                    ]}/>
                    <CareerDate>
                        13.08.2023 - 27.07.2024
                    </CareerDate>
                </div>
                <div className="w-full max-w-xl grid grid-cols-1 gap-2">
                    <CareerButton href="https://t.me/FreeShopPain_Bot" name="Telegram" icon="telegram.svg"
                                  iconNeedInvert={true}/>
                </div>
            </CareerSlot>
            <CareerSlot>
                <Image src="https://cdn.kyl-team.ru/projects/ShopBot.gif" alt="Project" width={400}
                       height={400} className="object-fill rounded-md"/>
            </CareerSlot>
            <CareerSlot>
                <div className="w-full max-w-xl flex flex-col items-center gap-4">
                    <CareerSlotTitle>
                        {t("solutions")}
                    </CareerSlotTitle>
                    <CareerList items={[
                        t("hierarchy")
                    ]}/>
                </div>
            </CareerSlot>
            <CareerSlot>
                <CareerSlotTitle>
                    {t('tech')}
                </CareerSlotTitle>
                <div className="flex flex-row flex-wrap gap-4 justify-center max-w-2xl">
                    {
                        used.map(k => technologies[k]).sort((a, b) => a.type.localeCompare(b.type)).map(item => (
                            <StackCard item={item} key={item.name}/>
                        ))
                    }
                </div>
            </CareerSlot>
        </CareerTemplate>
    )
}