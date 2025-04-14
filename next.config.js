// next.config.js
const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

module.exports = {
  assetPrefix: isGithubPages ? '/horus/' : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
