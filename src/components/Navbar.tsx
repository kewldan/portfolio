import Image from "next/image";
import Link from "next/link";
import NavbarDropdown from "./NavbarDropdown";

const PATHS = [
    {path: "/", name: "Home"},
    {path: "/projects", name: "Projects"},
    {path: "/gists", name: "Gists"},
    {path: "/socials", name: "Contact me"},
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-20 flex justify-center bg-slate-900 py-3 shadow">
            <div className="mx-4 flex w-full max-w-7xl items-center justify-center text-left">
                <NavbarDropdown paths={PATHS}/>
                <Link href="/">
                    <div className="flex items-center gap-2">
                        <Image src="/avatar.jpg" width="32" height="32" className="h-8 w-8 rounded-full md:h-10 md:w-10"
                               alt="Soothe Logo"/>
                        <h1 className="text-lg font-bold text-slate-300 transition-all duration-300 hover:text-slate-200 md:text-xl ml-2">
                            kewldan
                        </h1>
                    </div>
                </Link>
                <nav className="flex w-full justify-end gap-2 text-right">
                    {PATHS.map(({path, name}) =>
                        <Link
                            key={path}
                            href={path}
                            className="hidden rounded px-2 py-1.5 transition-all duration-300 hover:text-slate-300 md:block"
                        >
                            {name}
                        </Link>
                    )}
                    <a
                        href="/github"
                        target="_blank"
                        className="rounded bg-[#284475] px-3 py-1.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-[#0972ca] md:text-base"
                    >
                        <Image src="/github.svg" alt="d" width="16" height="16" className="inline"/>

                        <p className="ml-2 inline">
                            Github
                        </p>
                    </a>
                </nav>
            </div>
        </header>
    );
}