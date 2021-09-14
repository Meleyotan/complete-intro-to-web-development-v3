module.exports = {
  siteMetadata: {
    title: "Complete Intro to Web Dev v3",
    subtitle: "Learn HTML, CSS, and JavaScript",
    author: "Brian",
    authorSubtitle: "Stripe",
    authorImage: "author.jpg", // this image should go in /static
    courseImage: "courseImage.png", // this also should go in /static
    twitter: "https://twitter.com/holtbt", // make empty string to omit socials
    linkedin: "https://linkedin.com/in/btholt",
    github: "https://github.com/btholt",
    description:
      "Learn from scratch how to write HTML, CSS, and JavaScript from Brian Holt, a veteran coder from Netflix, Stripe, Microsoft, and more.",
    keywords: [
      "html",
      "javascript",
      "css",
      "brian holt",
      "web development",
      "complete intro",
      "web dev",
      "frontend masters",
    ],
  },
  pathPrefix: "/complete-intro-to-web-development-v3",
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
