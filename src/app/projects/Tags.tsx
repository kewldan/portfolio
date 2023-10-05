import {Tailwindest} from "tailwindest";

export default class Tag {
    name: string | undefined
    color: Tailwindest['backgroundColor']

    static CXX: Tag = {name: 'C++', color: 'bg-[#f34b7e]'}
    static C: Tag = {name: 'C', color: 'bg-[#555555]'}
    static Java: Tag = {name: 'Java', color: 'bg-[#af7219]'}
    static Python: Tag = {name: 'Python', color: 'bg-[#3573a6]'}
    static JS: Tag = {name: 'JavaScript', color: 'bg-[#f1e05a]'}
    static GLSL: Tag = {name: 'GLSL', color: 'bg-red-500'}
    static TS: Tag = {name: 'TypeScript', color: 'bg-[#3178c6]'}
    static Vulkan: Tag = {name: 'Vulkan', color: 'bg-red-500'}
    static OpenGL: Tag = {name: 'OpenGL', color: 'bg-red-500'}
    static Web: Tag = {name: 'Web', color: 'bg-red-500'}
    static Game: Tag = {name: 'Game', color: 'bg-red-500'}
    static Library: Tag = {name: 'Library', color: 'bg-red-500'}
}