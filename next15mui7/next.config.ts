import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.*.*','172.22.*.*'] // 在開發模式下允許跨源網址。
};

export default nextConfig;
