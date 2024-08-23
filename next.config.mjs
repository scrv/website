import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH,
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // NOTE: by default mdx will only match and compile files with the .mdx extension. however, it can be configured to handle files with the .md extension too.
  //       source: https://www.npmjs.com/package/@next/mdx.
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
