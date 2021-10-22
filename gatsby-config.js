module.exports = {
  // pathPrefix: '/blog',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thoughts`,
        path: `${__dirname}/thoughts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: 'Dark+ (default dark)', // Or install your favorite theme from GitHub
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
        // theme_color: `#BDDDF4`,
        display: `standalone`,
        icon: `src/images/gem-stone.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inter\:700`, `Roboto\:400,400i,700,700i`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        // autoGenHomeLabel: optional 'Home' is default
        autoGenHomeLabel: `home`,
        // exclude: optional, include this array to exclude paths you don't want to
        // generate breadcrumbs for (see below for details).
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`,
        ],
        // isMatchOptions: optional, include this object to configure the wildcard-match library.
        excludeOptions: {
          separator: '.',
        },
        // crumbLabelUpdates: optional, update specific crumbLabels in the path
        crumbLabelUpdates: [{}],
        // trailingSlashes: optional, will add trailing slashes to the end
        // of crumb pathnames. default is false
        trailingSlashes: false,
        // usePathPrefix: optional, if you are using pathPrefix above
        // usePathPrefix: '/blog',
      },
    },
  ],
};
