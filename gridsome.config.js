// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '2020.fruechtl.me',
  plugins: [{
    use: "@gridsome/source-filesystem",
    options: {
      path: "content/blog/**/*.md",
      typeName: "Post",
      route: '/blog/:slug'
    }
  },{
    use: '@gridsome/source-contentful',
    options: {
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: 'cdn.contentful.com',
      environment: 'master',
      typeName: 'Contentful'
    }
  }],
  transformers: {
    remark: {}
  }
}
