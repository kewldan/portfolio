import React from "react";
import {cn} from "@/lib/utils";

export interface SlotProps
    extends React.BaseHTMLAttributes<HTMLDivElement> {
}

const CareerSlot = React.forwardRef<HTMLDivElement, SlotProps>(
    ({className, ...props}, ref) => {
        return (
            <div className={cn("flex flex-col items-center justify-center gap-4 w-full", className)}
                 ref={ref} {...props}/>
        )
    }
)
CareerSlot.displayName = "CareerSlot"

export {CareerSlot};