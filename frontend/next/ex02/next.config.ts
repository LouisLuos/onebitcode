import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Limita o número de threads para CPUs com menos recursos
    workerThreads: false, 
    cpus: 1 
  },
}

export default nextConfig;
