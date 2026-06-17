import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  search: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/service/:slug*',
        destination: '/sdk/:slug*',
        permanent: true,
      },
      {
        source: '/chain/nodes/beam-node',
        destination: '/chain/nodes/introduction',
        permanent: true,
      },
      {
        source: '/chain/nodes/validator',
        destination: '/chain/nodes/introduction',
        permanent: true,
      },
      {
        source: '/nodes/delegation/stake_node_tokens',
        destination: '/nodes/delegation/stake_beam',
        permanent: true,
      },
      {
        source: '/nodes/rewards/primary',
        destination: '/nodes/rewards/composition',
        permanent: true,
      },
      {
        source: '/nodes/rewards/secondary',
        destination: '/nodes/rewards/composition',
        permanent: true,
      },
      {
        source: '/nodes/requirements/mint',
        destination: '/nodes/requirements',
        permanent: true,
      },
      {
        source: '/nodes/requirements/node_token',
        destination: '/nodes/requirements',
        permanent: true,
      },
    ];
  },
};

export default withNextra(nextConfig);
