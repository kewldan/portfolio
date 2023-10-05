import {Tailwindest} from "tailwindest";


export default function LanguageTag({name, color}: { name: string, color: Tailwindest["backgroundColor"] }) {
    return (
        <span className={`${color} rounded-3xl px-2 mx-2`}>
            {name}
        </span>
    )
}