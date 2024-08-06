import {StackCardItem} from "@/components/sections/skills/stackCard";

export type Technology =
    'aiogram'
    | 'android'
    | 'beanie'
    | 'clion'
    | 'cloudflare'
    | 'docker'
    | 'fastapi'
    | 'git'
    | 'github'
    | 'glfw'
    | 'intellij'
    | 'itch'
    | 'kvm'
    | 'mongodb'
    | 'nextjs'
    | 'nginx'
    | 'notion'
    | 'opengl'
    | 'tailwind'
    | 'prisma'
    | 'pycharm'
    | 'redis'
    | 'traefik'
    | 'ubuntu'
    | 'vcpkg'
    | 'vulkan'
    | 'webstorm'
    | 'windows'
    | 'telegram';

export const technologies: Record<Technology, StackCardItem> = {
    aiogram: {type: 'framework', name: 'Aiogram', icon: 'aiogram.webp'},
    android: {type: 'os', name: 'Android', icon: 'android.svg'},
    beanie: {type: 'lib', name: 'Beanie', icon: 'beanie.svg'},
    clion: {type: 'software', name: 'CLion', icon: 'clion.svg'},
    cloudflare: {type: 'service', name: 'Cloudflare', icon: 'cloudflare.svg'},
    docker: {type: 'software', name: 'Docker', icon: 'docker.svg'},
    fastapi: {type: 'framework', name: 'FastAPI', icon: 'fastapi.svg'},
    git: {type: 'software', name: 'Git', icon: 'git.svg'},
    github: {type: 'service', name: 'Github', icon: 'github.svg', needToInvert: true},
    glfw: {type: 'framework', name: 'GLFW', icon: 'glfw3.png'},
    intellij: {type: 'lib', name: 'Intellij', icon: 'intellij.svg'},
    itch: {type: 'service', name: 'Itch', icon: 'itch.svg', needToInvert: true},
    kvm: {type: 'software', name: 'KVM', icon: 'kvm.svg'},
    mongodb: {type: 'db', name: 'MongoDB', icon: 'mongodb.svg'},
    nextjs: {type: 'framework', name: 'NextJS', icon: 'nextjs.svg', needToInvert: true},
    nginx: {type: 'software', name: 'Nginx', icon: 'nginx.svg'},
    notion: {type: 'software', name: 'Notion', icon: 'notion.svg', needToInvert: true},
    opengl: {type: 'framework', name: 'OpenGL', icon: 'opengl.svg'},
    prisma: {type: 'framework', name: 'Prisma', icon: 'prisma.svg', needToInvert: true},
    pycharm: {type: 'ide', name: 'Pycharm', icon: 'pycharm.svg'},
    redis: {type: 'framework', name: 'Redis', icon: 'redis.svg'},
    tailwind: {type: 'framework', name: 'Tailwind', icon: 'tailwind.svg'},
    telegram: {type: 'service', name: 'Telegram', icon: 'telegram.svg', needToInvert: true},
    traefik: {type: 'software', name: 'Traefik', icon: 'traefik.svg'},
    ubuntu: {type: 'os', name: 'Ubuntu', icon: 'ubuntu.svg'},
    vcpkg: {type: 'software', name: 'Vcpkg', icon: 'vcpkg.svg'},
    vulkan: {type: 'framework', name: 'Vulkan', icon: 'vulkan.svg'},
    webstorm: {type: 'ide', name: 'WebStorm', icon: 'webstorm.svg'},
    windows: {type: 'os', name: 'Windows', icon: 'windows.svg'},
}
