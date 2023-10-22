import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
    stories: [
        "../../src/**/*.stories.mdx",
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
            }
        },
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions",
        "storybook-css-modules",
        '@storybook/addon-actions',
        'storybook-addon-mock/register',
        'storybook-addon-themes'
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
};
export default config;
