import Tag from "@/app/projects/Tags";

export default function LanguageTag({tag}: { tag: Tag }) {
    return (
        <span className={`${tag.color} rounded-3xl px-2 mx-2`}>
            {tag.name}
        </span>
    )
}