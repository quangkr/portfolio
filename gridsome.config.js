// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/blogs/**/*.md',
        typeName: 'BlogPost',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/projects/**/*.md',
        typeName: 'ProjectPost',
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
        configPath: 'src/cms/config.yml',
        htmlTitle: 'Netlify CMS'
      }
    },
  ],
  templates: {
    BlogPost: '/blog/:year/:month/:day/:title',
  }
}
