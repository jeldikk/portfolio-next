/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.pixabay.com",
      "www.trio.dev",
      "pluralsight2.imgix.net",
      "www.lambdatest.com",
      "upload.wikimedia.org",
      "www.datocms-assets.com",
      "www.angularjswiki.com",
      "w7.pngwing.com",
    ],
  },
};

module.exports = nextConfig;
