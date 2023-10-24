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
            }
        ];
    },
}

module.exports = nextConfig
