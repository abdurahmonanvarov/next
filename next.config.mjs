/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/**", // Rasmlar shu yo'nalishdan kelayotganini ko'rsatadi
      },
    ],
  },
};

export default nextConfig;
