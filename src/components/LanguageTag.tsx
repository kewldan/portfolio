import Tag from "@/app/projects/Tags";

export default function LanguageTag({tag}: { tag: Tag }) {
    return (
        <span className={`${tag.color} rounded-full px-3`}>
            {tag.name}
        </span>
    )
}