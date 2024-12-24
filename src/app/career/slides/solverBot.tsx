import React from "react";
import Image from "next/image";
import {CheckCircle} from "lucide-react";
import CareerTitle from "@/components/career/title";
import CareerDescription from "@/components/career/description";
import {CareerButton} from "@/components/career/button";
import CareerList from "@/components/career/list";
import CareerDate from "@/components/career/date";
import {CareerSlot} from "@/components/career/slot";
import CareerTemplate from "@/components/career/template";
import {CareerSlotTitle} from "@/components/career/slotTitle";
import {getTranslations} from "next-intl/server";
import {FaTelegram} from "react-icons/fa6"

const anchor = "SolverBot";

export default async function SolverBot() {
    const t = await getTranslations('SolverBot');

    return (
        <CareerTemplate anchor={anchor}>
            <CareerSlot>
                <div className="w-full max-w-xl flex flex-col items-start gap-4">
                    <CareerTitle anchor={anchor} name="Solver Bot"/>
                    <CareerDescription>
                        {t('description')}
                    </CareerDescription>
                    <CareerList items={[
                        t('about'),
                        <p key='details'>{t('details')} <CheckCircle className="ml-1 inline"/></p>,
                        t('now')
                    ]}/>
                    <CareerDate>
                        01.10.2023 - 22.05.2024
                    </CareerDate>
                </div>
                <div className="w-full max-w-xl grid grid-cols-1 gap-2">
                    <CareerButton href="https://t.me/kwld_solver_bot" name="Telegram" icon={<FaTelegram size={24}/>}
                                  iconNeedInvert={true}/>
                </div>
            </CareerSlot>
            <CareerSlot>
                <Image src="https://cdn.kyl-team.ru/projects/SolverBot.gif" alt="Project" width={400}
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
        </CareerTemplate>
    )
}