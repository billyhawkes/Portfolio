/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config()

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Billy Hawkes",
        email: "billyhawkes02@gmail.com",
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-styled-components",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
    ],
}
