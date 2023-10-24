import ProjectCard from "@/app/projects/ProjectCard";
import Tags from "./Tags";

export default function Projects() {
    return (
        <main className="flex flex-col items-center gap-y-2 pb-4">
            <h1 className="text-5xl font-bold py-6">🎮 Games</h1>

            <ProjectCard image="/projects/LogicalSystem.gif" title="Logical System"
                         tags={[Tags.CXX, Tags.Game, Tags.GLSL, Tags.OpenGL]}>
                In this game, you can create any electrical circuits. This game is Turing complete. I was able to
                create a full 8 bit gated adder in half an hour!

                The field of play is endless, there are many logical elements in the game, such as AND, XOR, OR, NOT
                and more.
            </ProjectCard>

            <ProjectCard image="/projects/VulkanEngine.gif" title="Vulkan Engine"
                         tags={[Tags.CXX, Tags.Vulkan, Tags.Library]}>
                My own Vulkan Engine WIP
            </ProjectCard>

            <ProjectCard image="/projects/PingPong.gif" title="PingPong"
                         tags={[Tags.CXX, Tags.SFML, Tags.Software]}>
                In console ASCII ping pong in c++ with WinApi
            </ProjectCard>

            <h1 className="text-5xl font-bold py-6">💽 Software</h1>

            <ProjectCard image="/projects/SummerTimer.gif" title="SummerTimer"
                         tags={[Tags.CXX, Tags.SFML, Tags.Software]}>
                In this game, you can create any electrical circuits. This game is Turing complete. I was able to
                create a full 8 bit gated adder in half an hour!

                The field of play is endless, there are many logical elements in the game, such as AND, XOR, OR, NOT
                and more
            </ProjectCard>

            <h1 className="text-5xl font-bold py-6">📕 Libraries</h1>

            <ProjectCard title="AAIO" tags={[Tags.Python, Tags.Library]} image={undefined}>
                This library is a wrapper for the https://aaio.io/ API from enthusiasts. All methods are described and
                all types are explicitly defined. The library does not handle any exceptions, so be careful. Methods
                that create requests to aaio.io return a pydantic's models for each response
            </ProjectCard>

            <ProjectCard title="MinecraftServerCore" tags={[Tags.CXX, Tags.Library]}
                         image="/projects/MinecraftServerCore.jpg">
                Minecraft server backend implementation from scratch WIP
            </ProjectCard>
        </main>
    )
}