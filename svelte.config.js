const preprocess = require("svelte-preprocess");

module.exports = {
    disableDependencyReinclusion: ["@roxi/routify"],

    preprocess: [
        preprocess({
            scss: {
                prependData: '@import "./src/scss/main.scss";',
            },
        }),
    ],
};
