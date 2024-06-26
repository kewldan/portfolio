import ProjectCategory from "@/app/projects/ProjectCategory";
import React, {ReactNode} from "react";
import {
    CLOSED,
    CXX,
    DEVELOPMENT,
    ENG,
    MAINTAINED,
    PAUSED,
    ProjectStatus,
    PYTHON,
    RELEASED,
    RUS,
    TS
} from "@/app/projects/types";
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
    localization: ReactNode;
    language: ReactNode;
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
            localization: ENG,
            language: CXX,
            status: RELEASED
        },
        {
            title: 'Vulkan Engine',
            image: "/projects/VulkanEngine.gif",
            language: CXX,
            connections: [connections.github('https://github.com/kewldan/VulkanEngine')],
            localization: ENG,
            status: CLOSED,
            description: 'My own Vulkan Engine for 3d games'
        },
        {
            title: 'PingPong',
            image: '/projects/PingPong.gif',
            language: CXX,
            connections: [connections.github('https://github.com/kewldan/ConsolePong')],
            localization: ENG,
            status: RELEASED,
            description: 'In console ASCII ping pong in c++ made with WinAPI'
        },
        {
            image: '/projects/Vulkan2D.png',
            title: 'VulkanEngine 2D',
            language: CXX,
            connections: [],
            localization: ENG,
            status: PAUSED,
            description: 'Vulkan Engine port focused for 2D game development'
        },
        {
            title: 'ShooterGame',
            image: '/projects/ShooterGame.jpg',
            language: CXX,
            connections: [],
            localization: ENG,
            status: CLOSED,
            description: 'Test 3D game with OpenGL and built-in network tools'
        }
    ],
    'Software': [
        {
            title: 'SummerTimer',
            image: '/projects/SummerTimer.gif',
            language: CXX,
            connections: [connections.github('https://github.com/kewldan/SummerTimer')],
            localization: RUS,
            status: RELEASED,
            description: <p>
                A programme made as a joke from a video I saw in TikTok. It counts down to the beginning of summer
                from the beginning of autumn
            </p>
        },
        {
            title: "PassportChecker",
            image: '/projects/PassportChecker.png',
            connections: [connections.contact()],
            language: CXX,
            localization: RUS,
            commercial: true,
            status: RELEASED,
            description: <p>
                Software for working with passports of the Russian Federation. It can check passports for validity,
                obtain TIN (ИНН) and export data to a file
            </p>
        },
        {
            title: 'PassportOCR',
            image: "/projects/PassportOCR.png",
            connections: [connections.contact()],
            language: CXX,
            localization: RUS,
            commercial: true,
            status: PAUSED,
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
                <ProjectCard image="/projects/SolverBot.png" title="SolverBot" language={PYTHON}
                             connections={[connections.telegram('https://t.me/kwld_solver_bot')]}
                             localization={RUS} status={RELEASED}>
                    Bot for solving РЕШУ ОГЭ/ВПР/ЕГЭ tests
                </ProjectCard>

                <ProjectCard image="/projects/ShopBot.png" title="ShopBot" language={PYTHON}
                             localization={RUS} connections={[connections.telegram('https://t.me/FreeShopPain_Bot')]}
                             commercial={true} status={RELEASED}>
                    Bot for selling digital goods
                </ProjectCard>

                <ProjectCard image="/projects/PassportCheckerBot.png" title="PassportCheckerBot"
                             localization={RUS}
                             language={CXX}
                             connections={[connections.telegram('https://t.me/passport_validate_bot')]}
                             commercial={true} status={CLOSED}>
                    Bot-mirror for PassportChecker
                </ProjectCard>

                <ProjectCard image="/projects/AllSms.png" title="AllSMS"
                             localization={RUS}
                             language={PYTHON}
                             connections={[connections.telegram('https://t.me/allsmska_bot')]} commercial={true}
                             status={CLOSED}>
                    Bot for rent temp phone numbers for registration
                </ProjectCard>

                <ProjectCard image="/projects/ChemistryBot.png" title="Chemistry bot"
                             localization={RUS}
                             language={PYTHON}
                             connections={[connections.telegram('https://t.me/kwld_chemistry_bot')]} status={PAUSED}>
                    Bot for solving chemistry problems
                </ProjectCard>

                <ProjectCard image="/projects/CumBot.png" title="Fun Cum Bot" language={PYTHON}
                             connections={[connections.telegram('https://t.me/kwld_cum_bot')]}
                             localization={RUS} commercial={true} status={MAINTAINED}>
                    Fun bot to edit images
                </ProjectCard>
            </ProjectCategory>

            <ProjectCategory title={'🌐 Web'}>
                <ProjectCard image="/projects/Gigachat.png" title="Gigachat" language={TS}
                             connections={[connections.open('https://kwld-giga-chat.vercel.app/'), connections.github('https://github.com/khokhden/giga-chat')]}
                             localization={RUS} status={RELEASED}>
                    Global online chat
                </ProjectCard>

                <ProjectCard image="/projects/GradeApp.png" title="GradeApp" language={TS}
                             connections={[connections.telegram('https://t.me/grade_app_bot')]}
                             localization={RUS} commercial={true} status={RELEASED}>
                    Shoes store in Telegram Web App
                </ProjectCard>

                <ProjectCard image="/projects/ComplexSMS.png" title="Complex SMS" language={TS}
                             connections={[connections.telegram('https://t.me/complexsms_bot')]}
                             localization={RUS} commercial={true} status={DEVELOPMENT}>
                    ComplexSMS is a service for rent phone numbers to register temp accounts
                </ProjectCard>

                <ProjectCard image="/projects/Sudooky.png" title="Sudooky" language={TS}
                             connections={[connections.telegram('https://t.me/sudooky_bot')]}
                             localization={RUS} commercial={false} status={MAINTAINED}>
                    Sudooky is a bot with a Telegram Web App where you can play Sudoku.
                    In the future I plan to add other games like Minesweeper, Durak and Tetris.
                    I also want to add a friend and record system to compete with each other
                </ProjectCard>

                <ProjectCard image="/projects/Itmax.png" title="ITMAX Заявки" language={TS}
                             connections={[]}
                             localization={RUS} commercial={true} status={RELEASED}>
                    Application for receipt of requests
                </ProjectCard>
            </ProjectCategory>

            <ProjectCategory title={'📕 Libraries'}>
                <ProjectCard title="AAIO" language={PYTHON}
                             localization={RUS}
                             connections={[connections.docs('aaio.kewldan.ru'), connections.github('https://github.com/kewldan/AAIO')]}
                             image={'/projects/AAIO.png'} status={RELEASED}>
                    This library is a wrapper for the https://aaio.io/ API from enthusiasts. All methods are described
                    and
                    all types are explicitly defined. The library does not handle any exceptions, so be careful. Methods
                    that create requests to aaio.io return a pydantic&apos;s models for each response
                </ProjectCard>

                <ProjectCard title="aaio.js" language={TS}
                             localization={RUS}
                             connections={[connections.github('https://github.com/kewldan/aaio.js')]}
                             image={'/projects/aaio.js.png'} status={RELEASED}>
                    This library is a wrapper for the https://aaio.io/ API from enthusiasts. All methods are described
                    and
                    all types are explicitly defined
                </ProjectCard>

                <ProjectCard title="MinecraftServerCore" language={CXX}
                             localization={ENG}
                             connections={[connections.github('https://github.com/kewldan/MinecraftServerCore')]}
                             image="/projects/MinecraftServerCore.jpg" status={PAUSED}>
                    Minecraft server backend implementation from scratch
                </ProjectCard>
            </ProjectCategory>
        </main>
    )
}