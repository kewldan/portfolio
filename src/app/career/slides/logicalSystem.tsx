import React from "react";
import {YouTubeEmbed} from '@next/third-parties/google'
import Image from "next/image";
import {CheckCircle} from "lucide-react";
import CareerTemplate from "@/components/career/template";
import CareerTitle from "@/components/career/title";
import CareerList from "@/components/career/list";
import {CareerButton} from "@/components/career/button";
import CareerDescription from "@/components/career/description";
import CareerDate from "@/components/career/date";
import {CareerSlot} from "@/components/career/slot";
import {CareerSlotTitle} from "@/components/career/slotTitle";
import {getTranslations} from "next-intl/server";
import {FaGithub, FaItchIo} from "react-icons/fa6";

const anchor = "LogicalSystem"

export default async function LogicalSystem() {
    const t = await getTranslations('LogicalSystem');

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
                                  icon={<FaGithub size={24}/>} iconNeedInvert={true}/>
                    <CareerButton href="https://kewldan.itch.io/logical-system" name="Itch" icon={<FaItchIo size={24}/>}
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
        </CareerTemplate>
    )
}