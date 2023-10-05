import ProjectView from "@/app/projects/ProjectView";
import Tags from "./Tags";

export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center px-36 pt-8">
            <h1 className="text-3xl font-bold">🎮 Games</h1>

            <ProjectView image="/projects/logical-system.png" title="Logical System"
                         tags={[Tags.CXX, Tags.Game, Tags.GLSL, Tags.OpenGL]}>
                In this game, you can create any electrical circuits. This game is Turing complete. I was able to
                create a full 8 bit gated adder in half an hour!

                The field of play is endless, there are many logical elements in the game, such as AND, XOR, OR, NOT
                and more.
            </ProjectView>

            <ProjectView image="/projects/logical-system.png" title="Vulkan Engine"
                         tags={[Tags.CXX, Tags.Vulkan, Tags.Library]}>
                In this game, you can create any electrical circuits. This game is Turing complete. I was able to
                create a full 8 bit gated adder in half an hour!

                The field of play is endless, there are many logical elements in the game, such as AND, XOR, OR, NOT
                and more.
            </ProjectView>

            <h1 className="text-3xl font-bold">📕 Libraries</h1>

            <ProjectView title="AAIO" tags={[Tags.Library, Tags.Python]} image={undefined}>
                In this game, you can create any electrical circuits. This game is Turing complete. I was able to
                create a full 8 bit gated adder in half an hour!

                The field of play is endless, there are many logical elements in the game, such as AND, XOR, OR, NOT
                and more.
            </ProjectView>
        </main>
    )
}