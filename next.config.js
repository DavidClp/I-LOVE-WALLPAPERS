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
    ],
  },
};

module.exports = nextConfig;
