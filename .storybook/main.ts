import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { Configuration } from "webpack";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config: Configuration) => {
    // 添加别名配置
    config.resolve!.alias!["@"] = path.resolve(__dirname, "../src");

    return config;
  },
};
export default config;
