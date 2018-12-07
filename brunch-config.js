module.exports.config = {
  files: {
    javascripts: {
      joinTo: "app.js",
    },
    stylesheets: {
      joinTo: "app.css",
    },
  },

  plugins: {
    static: {
      processors: [
        require("html-brunch-static")({
          processors: [
            require("pug-brunch-static")(),
            require("marked-brunch-static")(),
          ],
          partials: /(partials?|\.md)/,
          minify: true,
        }),
      ],
    },

    postcss: {
      processors: [
        require("postcss-preset-env")({stage: 0}),
      ],
    },
  },
};
