import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgs.xkcd.com',
                port: '',
                pathname: '/comics/*.png',
                search: '',
            },
        ],
    },
};

export default nextConfig;
