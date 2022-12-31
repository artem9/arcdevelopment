const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = async (phase, { defaultConfig }) =>
  withPlugins(
    [
      [
        optimizedImages,
        {
          /* config for next-optimized-images */
        },
      ],
      // your other plugins here
    ],
    nextConfig
  )(phase, { ...defaultConfig, ...nextConfig });
