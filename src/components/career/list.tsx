import React, {ReactNode} from "react";

export default function CareerList({items}: { items: ReactNode[] }) {
    return (
        <ul className="list-disc space-y-2 pl-2">
            {
                items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))
            }
        </ul>
    )
}