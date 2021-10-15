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
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Dark+ (default dark)',
            },
          },
        ],
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
        theme_color: `#4c4cf3`,
        display: `standalone`,
        icon: `src/images/icons-logo.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter\:700`, `Roboto\:400,400i,700,700i`],
        display: 'swap',
      },
    },
  ],
};
