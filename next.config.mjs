import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/kewldan",
                permanent: true
            },
            {
                source: "/telegram",
                destination: "https://t.me/kewldan",
                permanent: true
            },
            {
                source: "/vk",
                destination: "https:/vk.com/kewldan",
                permanent: true
            },
            {
                source: "/stack-overflow",
                destination: "https://stackoverflow.com/users/15113869/kewldan",
                permanent: true
            }
        ];
    },
}

const millionConfig = {
    auto: true,
}

export default million.next(nextConfig, millionConfig);
