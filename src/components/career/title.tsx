import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Image from "next/image";
import React from "react";
import {useTranslations} from "next-intl";

export default function CareerTitle({anchor, name, opensource}: {
    anchor: string;
    name: string;
    opensource?: boolean
}) {
    const t = useTranslations('Career');

    return (
        <div className="flex flex-row items-end gap-2">
            <Link href={`#${anchor}`} className="font-extrabold tracking-tighter text-7xl">
                {name}
            </Link>
            {
                opensource && (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <Image src="/icons/stack/github.svg" alt="Open Source" width={32} height={32}
                                       className="dark:invert pb-2"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t('osi')}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )
            }
        </div>
    )
}