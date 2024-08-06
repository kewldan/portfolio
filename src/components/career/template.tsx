import {ReactNode} from "react";

export default function CareerTemplate({children, anchor}: { children: ReactNode; anchor: string }) {
    return (
        <div className="grid grid-cols-2 w-full slide" id={anchor}>
            {children}
        </div>
    )
}