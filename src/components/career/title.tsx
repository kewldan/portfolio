import Link from "next/link";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import React from "react";
import {getTranslations} from "next-intl/server";
import {FaGithub} from "react-icons/fa6";

export default async function CareerTitle({anchor, name, opensource}: {
    anchor: string;
    name: string;
    opensource?: boolean
}) {
    const t = await getTranslations('Career');

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
                                <FaGithub size={24}/>
                            </TooltipTrigger>
                            <TooltipContent>
                                {t('osi')}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )
            }
        </div>
    )
}