import Image from "next/image";

export default function Hero() {
    return (
        <div className="">
            <div className="flex flex-row items-center justify-between flex-wrap">
                <div className="flex flex-col items-center">
                    <Image src="/avatar.jpg" alt="alt" width="400" height="100" className="rounded-2xl m-3"/>
                </div>

                <div className="flex flex-col items-center justify-between">
                    <h1 className="text-3xl font-bold">👋 Hi there</h1>
                    <p className="mt-10 text-xl max-w-xl">
                        My name is Daniil. I&apos;m a 16 year-old developer from Saint-Petersburg, Russia.

                        Currently, I work as a indie dev. And focusing on my own projects and POCs
                    </p>
                </div>
            </div>
            <div className="my-8 h-1 rounded bg-gray-300"></div>
            <div className="flex flex-row items-center justify-center">
                <a href="/vk">
                    <Image src="/socials/vk.svg" width="40" height="40"
                           className="h-8 w-8 rounded-full md:h-10 md:w-10 m-3 hover:scale-105 transition-all"
                           alt="VK"/>
                </a>
                <a href="/github">
                    <Image src="/socials/github.svg" width="40" height="40"
                           className="h-8 w-8 rounded-full md:h-10 md:w-10 m-3 hover:scale-105 transition-all"
                           alt="Github"/>
                </a>
                <a href="/stack-overflow">
                    <Image src="/socials/stack-overflow.svg" width="40" height="40"
                           className="h-8 w-8 rounded-full md:h-10 md:w-10 m-3 hover:scale-105 transition-all"
                           alt="Stack overflow"/>
                </a>
            </div>
        </div>
    )
}