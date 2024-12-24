import React from "react";
import {useTranslations} from "next-intl";
import {StackCard} from "@/components/sections/skills/stackCard";
import {YouTubeEmbed} from '@next/third-parties/google'
import Image from "next/image";
import {CheckCircle} from "lucide-react";
import CareerTemplate from "@/components/career/template";
import CareerTitle from "@/components/career/title";
import {technologies, Technology} from "@/lib/technologies";
import CareerList from "@/components/career/list";
import {CareerButton} from "@/components/career/button";
import CareerDescription from "@/components/career/description";
import CareerDate from "@/components/career/date";
import {CareerSlot} from "@/components/career/slot";
import {CareerSlotTitle} from "@/components/career/slotTitle";

const anchor = "LogicalSystem"

const used: Technology[] = ['git', 'clion', 'vcpkg'];

export default function LogicalSystem() {
    const t = useTranslations('LogicalSystem');

    return (
        <CareerTemplate anchor={anchor}>
            <CareerSlot>
                <div className="w-full max-w-xl flex flex-col items-start gap-4">
                    <CareerTitle anchor={anchor} name="Logical System" opensource={true}/>

                    <CareerDescription>
                        {t('description')}
                    </CareerDescription>

                    <CareerList items={[
                        t('about'),
                        <p key={'details'}>{t('details')} <CheckCircle className="ml-1 inline"/></p>,
                        t('now')
                    ]}/>
                    <CareerDate>
                        21.04.2023 - 18.03.2024
                    </CareerDate>
                </div>
                <div className="w-full max-w-xl grid grid-cols-2 gap-2">
                    <CareerButton href="https://github.com/kewldan/LogicalSystemRemaster" name="Github"
                                  icon="github.svg" iconNeedInvert={true}/>
                    <CareerButton href="https://kewldan.itch.io/logical-system" name="Itch" icon="itch.svg"
                                  iconNeedInvert={true}/>
                </div>
            </CareerSlot>
            <CareerSlot>
                <Image src="https://cdn.kyl-team.ru/projects/125910-LogicalSystem.gif" alt="Project" width={800}
                       height={400} className="object-fill rounded-md"/>
            </CareerSlot>
            <CareerSlot>
                <div className="w-full max-w-xl flex flex-col items-center gap-4">
                    <CareerSlotTitle>
                        {t('mention')}
                    </CareerSlotTitle>
                    <div className='w-full p-2'>
                        <YouTubeEmbed videoid="q_ve9SsuyvU" height={300} params="start=1547"/>
                    </div>
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