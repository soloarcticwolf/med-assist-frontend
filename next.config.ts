import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
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
