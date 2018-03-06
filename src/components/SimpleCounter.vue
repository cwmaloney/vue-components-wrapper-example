<template>
  <div class="simple-counter">
    <button v-on:click="decrement"> - </button>
    <input type="number" v-model.number="counterValue" v-on:input="update" />
    <button v-on:click="increment"> + </button>
  </div>
</template>

<script>
  export default {
    name: 'simple-counter',

    props: {
      initialCount: {type: Number, required: true}
    },

    data() {
      return {
        counterValue: this.initialCount
      };
    },

    methods: {
      increment: function () {
        this.counterValue += 1;
        this.$emit('count-updated', this.counterValue);
      },
      decrement: function () {
        this.counterValue -= 1;
        this.$emit('count-updated', this.counterValue);
      },
      update: function() {
        this.$emit('count-updated', this.counterValue);
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

