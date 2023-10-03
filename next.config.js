/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/github",
                destination: "https://github.com/kewldan",
                permanent: true,
            }
        ];
    },
}

module.exports = nextConfig
