'use client';

import React from "react";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

export default function Connection({link, icon, text}: { link: string, icon: React.ReactNode, text: string }) {
    const router = useRouter();

    return (
        <Button className='w-full flex flex-row items-center gap-2' variant='secondary' onClick={() => {
            router.push(link);
        }}>
            {icon}
            {text}
        </Button>
    )
}