/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.notion.so",
      "lh5.googleusercontent.com",
    ],
  },
};

export default nextConfig;
