import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 esto reemplaza a `next export`
  images: {
    unoptimized: true, // necesario para GitHub Pages
  },
  basePath: "/spacataleya", // 👈 nombre de tu repo (ajústalo)
  assetPrefix: "/spacataleya/", // 👈 importante para rutas correctas
};

export default nextConfig;