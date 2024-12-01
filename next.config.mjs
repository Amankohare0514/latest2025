import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add other configurations here
};

export default nextConfig;
