exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/work`,
    toPath: `/`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
