//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig =
  withBundleAnalyzer({
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
                       eslint: {
                         dirs: ['.'],
                       },
                       poweredByHeader: false,
                       trailingSlash: true,
                       basePath: '',
                       // The starter code load resources from `public` folder with `router.basePath` in React components.
                       // So, the source code is "basePath-ready".
                       // You can remove `basePath` if you don't need it.
                       reactStrictMode: true,
});

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
