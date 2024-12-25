'use client';

import React, {ReactNode} from "react";
import {toast} from "sonner";
import {cn} from "@/lib/utils";

export default function CopyText({value, children, className}: {
    value: string;
    children: ReactNode;
    className?: string
}) {
    return (
        <button className={cn("font-sans hover:underline underline-offset-2", className)} onClick={() => {
            toast.promise(async () => {
                await navigator.clipboard.writeText(value);
            }, {
                success: 'Скопировано',
                error: err => `${err}`,
            })
        }}>{children}</button>
    )
}