/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,


  images: {   
  /*   unoptimized: true, */
    remotePatterns: [
      /*   {
            protocol: 'https',
            hostname: '***',
            port: '',
            pathname: '**',
          }, */
      {
        protocol: "https",
        hostname: "nomadetech.online",
        port: "",
        pathname: "/wallpapers/imagens/**",
      },
      {
        protocol: "https",
        hostname: "i-love-wallpapers-api-production.up.railway.app/",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
