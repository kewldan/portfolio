import Image from "next/image";
import {FaGithub, FaStackOverflow, FaTelegram} from "react-icons/fa6";

export default function Hero() {
    return (
        <div>
            <div className="flex flex-row items-center justify-between flex-wrap">
                <div className="flex flex-col items-center grow">
                    <Image src="/avatar.jpg" alt="alt" width="400" height="100" className="rounded-2xl m-3"/>
                </div>

                <div className="flex flex-col items-center grow">
                    <h1 className="text-5xl font-bold">👋 Hi there</h1>
                    <span className="mt-10 text-xl max-w-xl">
                        My name is Daniil. I&apos;m a 16 year-old developer from Saint-Petersburg, Russia.

                        Currently, I work as a indie dev. And focusing on my own projects and POCs
                    </span>
                </div>
            </div>
            <div className="my-8 h-1 rounded bg-gray-300"></div>
            <div className="flex flex-row items-center justify-center gap-x-4">
                <a href="/telegram">
                    <FaTelegram size={40}/>
                </a>
                <a href="/github">
                    <FaGithub size={40}/>
                </a>
                <a href="/stack-overflow">
                    <FaStackOverflow size={40}/>
                </a>
            </div>
        </div>
    )
}