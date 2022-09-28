const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    // WARNING: Mandatory for the postcss config (postcss.config.js) and Tailwind to be loaded
    postcss: {}, // <------ this is the important part :)
  }), // can pass the options here using { }, but we use svelte.preprocess.config.js for that (gives us more context)
};
