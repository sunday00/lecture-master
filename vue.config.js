const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        '@a': path.join(__dirname, 'src/api/'),
        '@c': path.join(__dirname, 'src/components/'),
        '@v': path.join(__dirname, 'src/views/'),
        '@u': path.join(__dirname, 'src/utils/'),
        '@s': path.join(__dirname, 'src/store/'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
      },
    },
  },
};
