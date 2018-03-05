<template>
  <div class="simple-counter">
    <button v-on:click="decrement"> - </button>
    {{counter}}
    <button v-on:click="increment"> + </button>
  </div>
</template>

<script>
  export default {
    name: 'simple-counter',

    props: {
      'initialValue': {type: Number, required: true}
    },

    data() {
      return {
        counter: this.initialValue
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
    background-color: lightgray;
    border: solid navy;
    padding: 4px;
    display: inline-block;
    margin: 5px 2px;
  }
  button {
    color: blue;
  }
</style>

