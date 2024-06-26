import ProjectCategory from "@/app/projects/ProjectCategory";
import React, {ReactNode} from "react";
import {ProjectLanguage, ProjectLocale, ProjectStatus,} from "@/app/projects/types";
import ProjectCard from "@/app/projects/ProjectCard";
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

const projects: Record<string, {
    title: string;
    image: string;
    description: Readonly<ReactNode>;
    connections: any[];
    localization: ProjectLocale;
    language: ProjectLanguage;
    status: ProjectStatus;
    commercial?: boolean;
}[]> = {
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
            status: 'released'
        },
        {
            title: 'Vulkan Engine',
            image: "/projects/VulkanEngine.gif",
            language: 'cxx',
            connections: [connections.github('https://github.com/kewldan/VulkanEngine')],
            localization: 'en',
            status: 'closed',
            description: 'My own Vulkan Engine for 3d games'
        },
        {
            title: 'PingPong',
            image: '/projects/PingPong.gif',
            language: 'cxx',
            connections: [connections.github('https://github.com/kewldan/ConsolePong')],
            localization: 'en',
            status: 'released',
            description: 'In console ASCII ping pong in c++ made with WinAPI'
        },
        {
            image: '/projects/Vulkan2D.png',
            title: 'VulkanEngine 2D',
            language: 'cxx',
            connections: [],
            localization: 'en',
            status: 'paused',
            description: 'Vulkan Engine port focused for 2D game development'
        },
        {
            title: 'ShooterGame',
            image: '/projects/ShooterGame.jpg',
            language: 'cxx',
            connections: [],
            localization: 'en',
            status: 'closed',
            description: 'Test 3D game with OpenGL and built-in network tools'
        }
    ],
    'Software': [
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
            </p>
        },
        {
            title: "PassportChecker",
            image: '/projects/PassportChecker.png',
            connections: [connections.contact()],
            language: 'cxx',
            localization: 'ru',
            commercial: true,
            status: 'released',
            description: <p>
                Software for working with passports of the Russian Federation. It can check passports for validity,
                obtain TIN (ИНН) and export data to a file
            </p>
        },
        {
            title: 'PassportOCR',
            image: "/projects/PassportOCR.png",
            connections: [connections.contact()],
            language: 'cxx',
            localization: 'ru',
            commercial: true,
            status: 'paused',
            description: 'Software for OCR passports of the Russian Federation'
        }
    ]
}

export default function Projects() {
    return (
        <main className="flex flex-col items-center gap-6 py-4">
            {
                Object.keys(projects).map(category => (
                    <ProjectCategory key={category} title={category}>
                        {
                            projects[category].map(project => (
                                <ProjectCard title={project.title} image={project.image}
                                             localization={project.localization} connections={project.connections}
                                             language={project.language} status={project.status}
                                             commercial={project.commercial} key={project.image}>
                                    {project.description}
                                </ProjectCard>
                            ))
                        }
                    </ProjectCategory>
                ))
            }

            <ProjectCategory title={'🤖 Bots'}>
                <ProjectCard image="/projects/SolverBot.png" title="SolverBot" language={'python'}
                             connections={[connections.telegram('https://t.me/kwld_solver_bot')]}
                             localization={'ru'} status={'released'}>
                    Bot for solving РЕШУ ОГЭ/ВПР/ЕГЭ tests
                </ProjectCard>

                <ProjectCard image="/projects/ShopBot.png" title="ShopBot" language={'python'}
                             localization={'ru'} connections={[connections.telegram('https://t.me/FreeShopPain_Bot')]}
                             commercial={true} status={'released'}>
                    Bot for selling digital goods
                </ProjectCard>

                <ProjectCard image="/projects/PassportCheckerBot.png" title="PassportCheckerBot"
                             localization={'ru'}
                             language={'cxx'}
                             connections={[connections.telegram('https://t.me/passport_validate_bot')]}
                             commercial={true} status={'closed'}>
                    Bot-mirror for PassportChecker
                </ProjectCard>

                <ProjectCard image="/projects/AllSms.png" title="AllSMS"
                             localization={'ru'}
                             language={'python'}
                             connections={[connections.telegram('https://t.me/allsmska_bot')]} commercial={true}
                             status={'closed'}>
                    Bot for rent temp phone numbers for registration
                </ProjectCard>

                <ProjectCard image="/projects/ChemistryBot.png" title="Chemistry bot"
                             localization={'ru'}
                             language={'python'}
                             connections={[connections.telegram('https://t.me/kwld_chemistry_bot')]} status={'paused'}>
                    Bot for solving chemistry problems
                </ProjectCard>

                <ProjectCard image="/projects/CumBot.png" title="Fun Cum Bot" language={'python'}
                             connections={[connections.telegram('https://t.me/kwld_cum_bot')]}
                             localization={'ru'} commercial={true} status={'maintained'}>
                    Fun bot to edit images
                </ProjectCard>
            </ProjectCategory>

            <ProjectCategory title={'🌐 Web'}>
                <ProjectCard image="/projects/Gigachat.png" title="Gigachat" language={'ts'}
                             connections={[connections.open('https://kwld-giga-chat.vercel.app/'), connections.github('https://github.com/khokhden/giga-chat')]}
                             localization={'ru'} status={'released'}>
                    Global online chat
                </ProjectCard>

                <ProjectCard image="/projects/GradeApp.png" title="GradeApp" language={'ts'}
                             connections={[connections.telegram('https://t.me/grade_app_bot')]}
                             localization={'ru'} commercial={true} status={'released'}>
                    Shoes store in Telegram Web App
                </ProjectCard>

                <ProjectCard image="/projects/ComplexSMS.png" title="Complex SMS" language={'ts'}
                             connections={[connections.telegram('https://t.me/complexsms_bot')]}
                             localization={'ru'} commercial={true} status={'in-dev'}>
                    ComplexSMS is a service for rent phone numbers to register temp accounts
                </ProjectCard>

                <ProjectCard image="/projects/Sudooky.png" title="Sudooky" language={'ts'}
                             connections={[connections.telegram('https://t.me/sudooky_bot')]}
                             localization={'ru'} commercial={false} status={'maintained'}>
                    Sudooky is a bot with a Telegram Web App where you can play Sudoku.
                    In the future I plan to add other games like Minesweeper, Durak and Tetris.
                    I also want to add a friend and record system to compete with each other
                </ProjectCard>

                <ProjectCard image="/projects/Itmax.png" title="ITMAX Заявки" language={'ts'}
                             connections={[]}
                             localization={'ru'} commercial={true} status={'released'}>
                    Application for receipt of requests
                </ProjectCard>
            </ProjectCategory>

            <ProjectCategory title={'📕 Libraries'}>
                <ProjectCard title="AAIO" language={'python'}
                             localization={'ru'}
                             connections={[connections.docs('aaio.kewldan.ru'), connections.github('https://github.com/kewldan/AAIO')]}
                             image={'/projects/AAIO.png'} status={'released'}>
                    This library is a wrapper for the https://aaio.io/ API from enthusiasts. All methods are described
                    and
                    all types are explicitly defined. The library does not handle any exceptions, so be careful. Methods
                    that create requests to aaio.io return a pydantic&apos;s models for each response
                </ProjectCard>

                <ProjectCard title="aaio.js" language={'ts'}
                             localization={'ru'}
                             connections={[connections.github('https://github.com/kewldan/aaio.js')]}
                             image={'/projects/aaio.js.png'} status={'released'}>
                    This library is a wrapper for the https://aaio.io/ API from enthusiasts. All methods are described
                    and
                    all types are explicitly defined
                </ProjectCard>

                <ProjectCard title="MinecraftServerCore" language={'cxx'}
                             localization={'en'}
                             connections={[connections.github('https://github.com/kewldan/MinecraftServerCore')]}
                             image="/projects/MinecraftServerCore.jpg" status={'paused'}>
                    Minecraft server backend implementation from scratch
                </ProjectCard>
            </ProjectCategory>
        </main>
    )
}