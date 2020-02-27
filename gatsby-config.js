module.exports = {
	siteMetadata: {
		title: 'ORI Solutions',
		description: 'Internet stranice, trgovine i aplikacije. WordPress, Drupal, Magento, Angular, ReactJS i AWS Cloud rješenja.',
		author: 'Goran Štimac',
		siteUrl: 'https://hr.ori.solutions',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				useMozJpeg: true,
				stripMetadata: true,
				defaultQuality: 50,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'ORI Solutions (HR)',
				short_name: 'ORI Solutions (HR)',
				start_url: '/',
				background_color: '#ffffff',
				theme_color: '#ffffff',
				display: 'standalone',
				icon: 'src/images/ori-logotips/logo.png', // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-111464931-4',
				head: true,
				anonymize: true,
				respectDNT: true,
			},
		},
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: 'https://hr.ori.solutions',
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/blog`,
				name: 'blog',
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'blog-files',
						}
					},
					{
						resolve: 'gatsby-remark-embed-video',
						options: {
							width: 930,
							related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
							noIframeBorder: true //Optional: Disable insertion of <style> border: 0
						}
					},
					'gatsby-remark-responsive-iframe',
					'gatsby-remark-prismjs',
				]
			}
		},
		'gatsby-plugin-catch-links',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#0069ff',
				showSpinner: false,
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://hr.ori.solutions',
				sitemap: 'https://hr.ori.solutions/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Ubuntu`,
						subsets: [`latin-ext`],
						variants: [`100`, `200`,`300`, `400`,`500`, `600`, `700`, `800`, `900`],
					},
					{
						family: `Open Sans`,
						subsets: [`latin-ext`],
						variants: [`100`, `200`,`300`, `400`,`500`, `600`, `700`, `800`, `900`],
					},
				],
			},
		}
	],
};
