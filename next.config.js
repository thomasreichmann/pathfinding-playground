/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		targets: {
			node: 'current',
		},
	},
};

module.exports = nextConfig;
