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
            },
            {
                source: "/x",
                destination: "https://x.com/kewldanil",
                permanent: true
            },
            {
                source: "/linked-in",
                destination: "https://www.linkedin.com/in/kewldan/",
                permanent: true
            }
        ];
    },
    async headers() {
        return [
            {
                source: '/:all*(svg|jpg|png|gif|json)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=604800, must-revalidate',
                    }
                ],
            },
        ]
    },
}

export default withNextIntl(nextConfig);
