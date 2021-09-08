module.exports = {
  siteMetadata: {
    title: 'Adam Ali—Experience designer, developer, & researcher',
    siteURL: 'https://adamalexali.com',
    description:
      'Adam Ali is a multidisciplinary experience designer exploring the intersections of people, design, and technology.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-image',
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adam Ali's Website`,
        short_name: `Adam Ali`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fdcc57`,
        display: `standalone`,
        icon: `src/images/icons-logo.svg`,
      },
    },
  ],
};
