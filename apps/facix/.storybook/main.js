import webpack from "webpack";

const path = require("path");
module.exports = {
  webpackFinal: async (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"]
      })
    );

    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {
      nextConfigPath: path.resolve(__dirname, "../next.config.js")
    }
  },
  core: {
    builder: {
      name: "webpack5",
      options: {
        fsCache: true
      }
    }
  },
  babel: async (options) => ({
    ...options,
    presets: ["next/babel"],
    plugins: ["macros"]
  }),
  stories: [
    {
      directory: "../components/",
      files: "**/*.stories.tsx",
      titlePrefix: "Component"
    }
  ],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-essentials"],
  env: (config) => {
    return {
      ...config,
      // Allow to adapt the application configuration for the storybook environnement
      IS_STORYBOOK: true
    };
  },
  docs: {
    autodocs: true
  }
};
