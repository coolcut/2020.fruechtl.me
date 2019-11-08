// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = {
  siteName: '2020.fruechtl.me',
  plugins: [{
    use: '@gridsome/source-contentful',
    options: {
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      host: 'cdn.contentful.com',
      environment: 'master',
      typeName: 'Contentful'
    }
  }, {
    use: 'gridsome-plugin-rss',
    options: {
      contentTypeName: 'ContentfulBlogpost',
      feedOptions: {
        title: 'My Awesome Blog',
        feed_url: 'https://2020.fruechtl.me/rss.xml',
        site_url: 'https://2020.fruechtl.me'
      },
      feedItemOptions: node => ({
        title: node.title,
        description: node.body,
        url: 'https://2020.fruechtl.me/post/',
        author: "Jan Früchtl"
      }),
      output: {
        dir: './static',
        name: 'feed.xml'
      }
    }
  }
  ],
  transformers: {
    remark: {}
  }
}
