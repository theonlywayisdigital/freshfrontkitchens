module.exports = function(eleventyConfig) {
  // Pass through static assets (paths relative to project root, not src)
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "css": "css" });
  eleventyConfig.addPassthroughCopy({ "images": "images" });
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes"
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
