<template>
  <div class="hello-world">
    <p class="hello-text">Hello {{name}} {{tag}}</p>
  </div>
</template>

<script>
  export default {
    name : 'hello-component',

    props: {
      name: { type: String, required: true }
    },

    data() {
      return {
        tag: 'from the hello-world component'
      };
    }
  };
</script>

<style lang="less" scoped>
  .hello-world {
    .hello-text {
      color: blue;
    }
  }
</style>
