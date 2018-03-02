<template>
  <div class="simple-counter">
    <button v-on:click="increment">increment</button>
    <button v-on:click="decrement">decrement</button>
    {{counter}}
  </div>
</template>

<script>
  export default {
    name: 'simple-counter',

    props: {
      'initialCounterValue': {type: Number, required: true}
    },

    data() {
      return {
        counter: this.initialCounterValue
      };
    },

    methods: {
      increment: function () {
        this.counter += 1;
        this.$emit('update', this.counter);
      },
      decrement: function () {
        this.counter -= 1;
        this.$emit('update', this.counter);
      }
    }
  };
</script>

<style lang="css" scoped>
  .simple-counter {
    border: solid green;
    padding: 4px;
  }
  button {
    color: blue;
  }
</style>

