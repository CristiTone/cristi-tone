/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'assets/source',
    });
    return config;
  },
};

module.exports = nextConfig;
