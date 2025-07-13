import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	basePath: process.env.NEXT_PUBLIC_API_BASE_URL,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'placehold.co',
				port: '',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
			},
		],
		dangerouslyAllowSVG: true,
	},
}

export default nextConfig
