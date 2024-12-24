import {StackCardItem} from "@/components/sections/skills/stackCard";

export type Technology =
    'aiogram'
    | 'beanie'
    | 'clion'
    | 'docker'
    | 'fastapi'
    | 'git'
    | 'intellij'
    | 'mongodb'
    | 'nextjs'
    | 'nginx'
    | 'tailwind'
    | 'pycharm'
    | 'redis'
    | 'traefik'
    | 'vcpkg'
    | 'vulkan'
    | 'webstorm';

export const technologies: Record<Technology, StackCardItem> = {
    aiogram: {type: 'framework', name: 'Aiogram', icon: 'aiogram.webp'},
    beanie: {type: 'framework', name: 'Beanie', icon: 'beanie.svg'},
    clion: {type: 'ide', name: 'CLion', icon: 'clion.svg'},
    docker: {type: 'software', name: 'Docker', icon: 'docker.svg'},
    fastapi: {type: 'framework', name: 'FastAPI', icon: 'fastapi.svg'},
    git: {type: 'software', name: 'Git', icon: 'git.svg'},
    intellij: {type: 'ide', name: 'Intellij', icon: 'intellij.svg'},
    mongodb: {type: 'db', name: 'MongoDB', icon: 'mongodb.svg'},
    nextjs: {type: 'framework', name: 'NextJS', icon: 'nextjs.svg', needToInvert: true},
    nginx: {type: 'software', name: 'Nginx', icon: 'nginx.svg'},
    pycharm: {type: 'ide', name: 'Pycharm', icon: 'pycharm.svg'},
    redis: {type: 'framework', name: 'Redis', icon: 'redis.svg'},
    tailwind: {type: 'framework', name: 'Tailwind', icon: 'tailwind.svg'},
    traefik: {type: 'software', name: 'Traefik', icon: 'traefik.svg'},
    vcpkg: {type: 'software', name: 'Vcpkg', icon: 'vcpkg.svg'},
    vulkan: {type: 'framework', name: 'Vulkan', icon: 'vulkan.svg'},
    webstorm: {type: 'ide', name: 'WebStorm', icon: 'webstorm.svg'},
}
