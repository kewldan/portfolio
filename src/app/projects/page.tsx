import ProjectCategory from "@/app/projects/projectCategory";
import React from "react";
import ProjectCard, {ProjectCardItem} from "@/app/projects/projectCard";
import Connection from "@/app/projects/connection";
import {FaGithub, FaItchIo, FaLink, FaTelegram} from "react-icons/fa6";
import {BiLockAlt} from "react-icons/bi";
import {SiDocsdotrs} from "react-icons/si";

const connections = {
    github: (link: string) => <Connection link={link} icon={<FaGithub size={26}/>} text="Github"/>,
    itch: (link: string) => <Connection link={link} icon={<FaItchIo size={26}/>} text='Itch.io'/>,
    contact: () => <Connection {...{link: '/telegram', icon: <BiLockAlt size={26}/>, text: 'Contact me'}}/>,
    telegram: (link: string) => <Connection {...{link, icon: <FaTelegram size={26}/>, text: 'Telegram'}}/>,
    open: (link: string) => <Connection {...{link, icon: <FaLink size={26}/>, text: 'Open'}}/>,
    docs: (link: string) => <Connection {...{link, icon: <SiDocsdotrs size={26}/>, text: 'Docs'}}/>
}

const projects: Record<string, ProjectCardItem[]> = {
    'Games': [
        {
            image: '/projects/LogicalSystem.gif',
            title: 'Logical System',
            description: (
                <p>In this game, you can create any electrical circuits. This game is Turing complete. I was able to
                    create a full 8 bit gated adder in half an hour!

                    The field of play is endless, there are many logical elements in the game, such as AND, XOR, OR, NOT
                    and more.</p>),
            connections: [connections.itch('https://kewldan.itch.io/logical-system'), connections.github('https://github.com/kewldan/LogicalSystemRemaster')],
            localization: 'en',
            language: 'cxx',
            status: 'released',
            gold: true,
            difficulty: 4
        },
        {
            title: 'Vulkan Engine',
            image: "/projects/VulkanEngine.gif",
            language: 'cxx',
            connections: [connections.github('https://github.com/kewldan/VulkanEngine')],
            localization: 'en',
            status: 'closed',
            description: 'My own Vulkan Engine for 3d games',
            difficulty: 4
        },
        {
            title: 'PingPong',
            image: '/projects/PingPong.gif',
            language: 'cxx',
            connections: [connections.github('https://github.com/kewldan/ConsolePong')],
            localization: 'en',
            status: 'released',
            description: 'In console ASCII ping pong in c++ made with WinAPI',
            difficulty: 2
        },
        {
            image: '/projects/Vulkan2D.png',
            title: 'VulkanEngine 2D',
            language: 'cxx',
            connections: [],
            localization: 'en',
            status: 'paused',
            description: 'Vulkan Engine port focused for 2D game development',
            difficulty: 3
        },
        {
            title: 'ShooterGame',
            image: '/projects/ShooterGame.jpg',
            language: 'cxx',
            connections: [],
            localization: 'en',
            status: 'closed',
            description: 'Test 3D game with OpenGL and built-in network tools',
            difficulty: 4
        }
    ],
    'Software': [
        {
            title: "PassportChecker",
            image: '/projects/PassportChecker.png',
            connections: [connections.contact()],
            language: 'cxx',
            localization: 'ru',
            cost: 150,
            status: 'released',
            description: <p>
                Software for working with passports of the Russian Federation. It can check passports for validity,
                obtain TIN (ИНН) and export data to a file
            </p>,
            gold: true,
            difficulty: 4
        },
        {
            title: 'SummerTimer',
            image: '/projects/SummerTimer.gif',
            language: 'cxx',
            connections: [connections.github('https://github.com/kewldan/SummerTimer')],
            localization: 'ru',
            status: 'released',
            description: <p>
                A programme made as a joke from a video I saw in TikTok. It counts down to the beginning of summer
                from the beginning of autumn
            </p>,
            difficulty: 1
        },
        {
            title: 'PassportOCR',
            image: "/projects/PassportOCR.png",
            connections: [connections.contact()],
            language: 'cxx',
            localization: 'ru',
            cost: 50,
            status: 'paused',
            description: 'Software for OCR passports of the Russian Federation',
            difficulty: 2
        }
    ],
    'Bots': [
        {
            title: 'ShopBot',
            image: '/projects/ShopBot.png',
            language: 'python',
            localization: 'ru',
            connections: [connections.telegram('https://t.me/FreeShopPain_Bot')],
            cost: 100,
            gold: true,
            difficulty: 3,
            status: 'released',
            description: 'Bot for selling digital goods'
        },
        {
            title: 'SolverBot',
            language: 'python',
            connections: [connections.telegram('https://t.me/kwld_solver_bot')],
            image: '/projects/SolverBot.png',
            localization: 'ru',
            status: 'released',
            description: 'Bot for solving РЕШУ ОГЭ/ВПР/ЕГЭ tests',
            difficulty: 3
        },
        {
            title: 'PassportCheckerBot',
            image: '/projects/PassportCheckerBot.png',
            localization: 'ru',
            language: 'cxx',
            connections: [connections.telegram('https://t.me/passport_validate_bot')],
            status: 'closed',
            difficulty: 1,
            description: 'Bot-mirror for PassportChecker'
        },
        {
            title: 'AllSMS',
            image: '/projects/AllSms.png',
            localization: 'ru',
            language: 'python',
            connections: [connections.telegram('https://t.me/allsmska_bot')],
            cost: 50,
            status: 'closed',
            description: 'Bot for rent temp phone numbers for registration',
            difficulty: 2
        },
        {
            title: 'Chemistry bot',
            image: '/projects/ChemistryBot.png',
            localization: 'ru',
            language: 'python',
            connections: [connections.telegram('https://t.me/kwld_chemistry_bot')],
            status: 'closed',
            description: 'Bot for solving chemistry problems',
            difficulty: 2
        },
        {
            title: 'Cum bot',
            image: '/projects/CumBot.png',
            language: 'python',
            connections: [connections.telegram('https://t.me/kwld_cum_bot')],
            localization: 'ru',
            status: 'maintained',
            difficulty: 1,
            description: 'Fun bot to edit images'
        }
    ],
    'Web': [
        {
            title: 'GradeApp',
            image: '/projects/GradeApp.png',
            language: 'ts',
            connections: [connections.telegram('https://t.me/grade_app_bot')],
            localization: 'ru',
            cost: 200,
            status: 'released',
            gold: true,
            difficulty: 2,
            description: 'Shoes store in Telegram Web App'
        },
        {
            title: 'Gigachat',
            image: '/projects/Gigachat.png',
            language: 'ts',
            localization: 'ru',
            status: 'released',
            connections: [connections.open('https://kwld-giga-chat.vercel.app/'), connections.github('https://github.com/khokhden/giga-chat')],
            difficulty: 1,
            description: 'Global online chat'
        },
        {
            title: 'Complex SMS',
            image: '/projects/ComplexSMS.png',
            language: 'ts',
            localization: 'ru',
            status: 'in-dev',
            connections: [connections.telegram('https://t.me/complexsms_bot')],
            description: 'ComplexSMS is a service for rent phone numbers to register temp accounts',
            difficulty: 3,
            cost: 300
        },
        {
            title: 'Sudooky',
            image: '/projects/Sudooky.png',
            language: 'ts',
            localization: 'ru',
            status: 'maintained',
            connections: [connections.telegram('https://t.me/sudooky_bot')],
            difficulty: 1,
            description: <p>
                Sudooky is a bot with a Telegram Web App where you can play Sudoku.
                In the future I plan to add other games like Minesweeper, Durak and Tetris.
                I also want to add a friend and record system to compete with each other
            </p>
        },
        {
            title: 'ITMAX leads',
            language: 'ts',
            localization: 'ru',
            image: '/projects/Itmax.png',
            status: 'released',
            cost: 30,
            difficulty: 1,
            connections: [],
            description: 'Application for receipt of requests'
        }
    ],
    'Libraries': [
        {
            title: 'aaio.py',
            image: '/projects/AAIO.png',
            language: 'python',
            localization: 'ru',
            connections: [connections.docs('aaio.kewldan.ru'), connections.github('https://github.com/kewldan/AAIO')],
            status: 'released',
            difficulty: 1,
            description: <p>
                This library is a wrapper for the https://aaio.io/ API from enthusiasts. All methods are described
                and
                all types are explicitly defined. The library does not handle any exceptions, so be careful. Methods
                that create requests to aaio.io return a pydantic&apos;s models for each response
            </p>
        },
        {
            title: 'aaio.js',
            language: 'ts',
            localization: 'ru',
            connections: [connections.github('https://github.com/kewldan/aaio.js')],
            image: '/projects/aaio.js.png',
            status: 'released',
            difficulty: 1,
            description: <p>
                This library is a wrapper for the https://aaio.io/ API from enthusiasts. All methods are described
                and
                all types are explicitly defined
            </p>
        },
        {
            title: 'MinecraftServerCore',
            image: '/projects/MinecraftServerCore.jpg',
            connections: [connections.github('https://github.com/kewldan/MinecraftServerCore')],
            language: 'cxx',
            localization: 'en',
            status: 'paused',
            difficulty: 2,
            description: 'Minecraft server backend implementation from scratch'
        }
    ],
}

export default function Projects() {
    return (
        <main className="flex flex-col items-center gap-6 py-4 w-full px-16">
            {
                Object.keys(projects).map(category => (
                    <ProjectCategory key={category} title={category}>
                        {
                            projects[category].map(item => (
                                <ProjectCard item={item} key={item.title}/>
                            ))
                        }
                    </ProjectCategory>
                ))
            }
        </main>
    )
}