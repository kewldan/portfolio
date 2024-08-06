import React from "react";
import {cn} from "@/lib/utils";

export interface SlotProps
    extends React.BaseHTMLAttributes<HTMLHeadingElement> {
}

const CareerSlotTitle = React.forwardRef<HTMLHeadingElement, SlotProps>(
    ({className, ...props}, ref) => {
        return (
            <h3 className={cn("text-4xl font-bold", className)}
                ref={ref} {...props}/>
        )
    }
)
CareerSlotTitle.displayName = "CareerSlotTitle"

export {CareerSlotTitle};