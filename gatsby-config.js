module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,

  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Technical Blogs by Siddhant`,
    author: `Siddhant Goswami`,
    description: `Welcome to my technical blog.`,
    social: [
      {
        name: `twitter`,
        url: `twitter.com/geeksiddhant`,
      },
      {
        name: `github`,
        url: `github.com/Siddhant-Goswami`,
      },
    ],
  },
  // Path prefix
  pathPrefix: `/blog`,
}
