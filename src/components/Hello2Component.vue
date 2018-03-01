<template>
  <div class="hello-world2">
    <p class="hello-text">Greetings {{name}} {{tag}}</p>
  </div>
</template>

<script>
  export default {
    name : 'hello2-component',

    props: {
      name: { type: String, required: true }
    },

    data() {
      return {
        tag: 'from the hello-world2 component'
      };
    }
  };
</script>

<style lang="less" scoped>
  .hello-world2 {
    .hello-text {
      color: red;
    }
  }
</style>
