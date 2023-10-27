import Image from "next/image";
import {FaGithub, FaNetworkWired, FaStackOverflow, FaTelegram} from "react-icons/fa6";
import {SiNextdotjs, SiTelegram, SiUnrealengine} from "react-icons/si";

const focuses = [
    {icon: <SiUnrealengine size={26}/>, name: 'Unreal Engine 5', value: 0},
    {icon: <SiNextdotjs size={26}/>, name: 'Next.JS', value: 40},
    {icon: <SiTelegram size={26}/>, name: 'Telegram web apps', value: 67},
    {icon: <FaNetworkWired size={26}/>, name: 'Highly loaded networks', value: 3}
].toSorted((a, b) => -a.value + b.value)

export default function Hero() {
    return (
        <main className='flex flex-col items-center gap-y-3 p-2'>
            <div className="flex flex-row items-center justify-between flex-wrap gap-6">
                <div className="flex flex-col items-center grow">
                    <Image src="/avatar.jpg" alt="alt" width={348} height={348} className="rounded-2xl" priority/>
                </div>

                <div className="flex flex-col items-center grow">
                    <h1 className="text-5xl font-medium">👋Hi there</h1>
                    <span className="mt-10 text-xl max-w-lg">
                        My name is Daniil. I{'\''}m a 16 year-old developer from <code className='tooltip'
                                                                                       data-tip="Russia">Saint-Petersburg</code>.

                        Today, I work as a indie dev. And focusing on my own projects and POCs
                    </span>
                </div>
            </div>
            <h2 className='font-medium text-2xl mt-4'>Currently learning</h2>
            <div className='flex flex-row items-center gap-x-3 w-full'>
                <div className='flex flex-col gap-y-3'>
                    {
                        focuses.map(({icon}, index) => (
                            <p key={`icon-${index}`}>{icon}</p>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-y-3 min-w-fit'>
                    {
                        focuses.map(({name}, index) => (
                            <span key={`name-${index}`}>{name}</span>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-y-3 w-full'>
                    {
                        focuses.map(({value}, index) => (
                            <progress key={`progress-${index}`} className="progress w-full my-2 progress-secondary"
                                      value={value}
                                      max="100"></progress>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-y-3'>
                    {
                        focuses.map(({value}, index) => (
                            <code key={`value-${index}`}>{value}%</code>
                        ))
                    }
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex flex-row items-center justify-center gap-x-4">
                <a href="/telegram" className='hover:text-gray-300 transition-all'>
                    <FaTelegram size={26}/>
                </a>
                <a href="/github" className='hover:text-gray-300 transition-all'>
                    <FaGithub size={26}/>
                </a>
                <a href="/stack-overflow" className='hover:text-gray-300 transition-all'>
                    <FaStackOverflow size={26}/>
                </a>
            </div>
        </main>
    )
}