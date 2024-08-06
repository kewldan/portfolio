import {ReactNode} from "react";

export default function CareerTemplate({children, anchor}: { children: ReactNode; anchor: string }) {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full slide" id={anchor}>
            {children}
        </div>
    )
}