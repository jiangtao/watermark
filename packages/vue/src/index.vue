<template>
  <div>
    hello world
  </div>
</template>

<script>
  import Watermark from '@pansy/watermark';

  export default {
    name: 'watermark',
    methods: {
      createWatermark() {
        let container = this.$el;

        console.log(container);
      }
    }
  }
</script>
