module.exports = {
  siteMetadata: {
    description: "Personal page of Tarek Hammami",
    locale: "en",
    title: "Tarek Hammami",
    formspreeEndpoint: "https://formspree.io/f/xwkddwvw",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-blue",
      },
    },
  ],
};
