/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export
  output: "export",
  // If the site is served from a sub-path, configure `basePath`
  // Replace 'my-repo-name' with your repository name
  // basePath: "/dobromirkralev.github.io.git",
  // Optional: If you want to handle trailing slashes in paths
  trailingSlash: true,
};

export default nextConfig;
