import {ReactNode} from "react";

export default function CareerDescription({children}: { children: ReactNode }) {
    return (
        <p className="text-lg text-neutral-400">
            {children}
        </p>
    )
}