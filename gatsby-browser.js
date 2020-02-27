/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
require("./node_modules/prismjs/themes/prism-okaidia.css");

export const onServiceWorkerUpdateReady = () => {
    window.location.reload()
}