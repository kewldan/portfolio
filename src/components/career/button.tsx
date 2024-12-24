import Link from "next/link";
import {ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";
import React, {ReactNode} from "react";
import {cn} from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href: string;
    icon?: ReactNode;
    iconNeedInvert?: boolean;
    name: string;
}

const CareerButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, href, icon, iconNeedInvert, name, ...props}, ref) => {
        return (
            <Button className={cn('w-full', className)} variant="secondary" asChild ref={ref} {...props}>
                <Link href={href}
                      className="w-full flex flex-row items-center justify-between">
                            <span className="w-full">
                                {icon}
                            </span>
                    {name}
                    <div className="w-full flex flex-row items-center justify-end">
                        <ExternalLink/>
                    </div>
                </Link>
            </Button>
        )
    }
)
CareerButton.displayName = "CareerButton"

export {CareerButton};