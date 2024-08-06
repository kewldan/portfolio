import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.kyl-team.ru',
                protocol: 'https',
            }
        ]
    },
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
            },
            {
                source: "/npm",
                destination: "https://www.npmjs.com/~kewldan",
                permanent: true
            }
        ];
    },
}

export default withNextIntl(nextConfig);
