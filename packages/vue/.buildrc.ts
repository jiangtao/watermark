const PluginVue = require('rollup-plugin-vue');

export default {
  name: 'watermark',
  entries: [
    './src/index.vue'
  ],
  rollupPlugins: [
    PluginVue()
  ],
}
