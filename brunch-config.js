const buildHash = require("child_process")
  .execSync("git rev-parse HEAD")
  .toString().trim();

module.exports.config = {
  files: {
    javascripts: {
      joinTo: `app.${buildHash}.js`,
    },
    stylesheets: {
      joinTo: `app.${buildHash}.css`,
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
          defaultContext: {
            buildHash: buildHash,
          },
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
