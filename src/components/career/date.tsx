import {ReactNode} from "react";

export default function CareerDate({children}: { children: ReactNode }) {
    return (
        <p className="text-neutral-400">
            {children}
        </p>
    )
}