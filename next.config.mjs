/** @type {import('next').NextConfig} */
import nextPwa from "next-pwa";

const withPWA = nextPwa({
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    // exclude: [
    //     ({asset, compilation}) => {
    //         if (
    //             asset.name.startsWith("server/") ||
    //             asset.name.match(/^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/)
    //         ) {
    //             return true;
    //         }
    //         if (process.env.NODE_ENV&& !asset.name.startsWith("static/runtime/")) {
    //             return true;
    //         }
    //         return false;
    //     }
    // ],
    // fallbacks: {
    //     image: '/static/images/fallback.png'
    //     // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
    //     // font: '/static/font/fallback.woff2',
    //     // audio: ...,
    //     // video: ...,
    // }
});

const nextConfig = withPWA({
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'ALLOWALL'
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-ancestors 'self' https://your-allowed-domain.com"
                    }
                ],
            },
        ];
    },
});

export default nextConfig;