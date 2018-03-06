<template>
  <div class="simple-contact">
    <form>
      <div>
        <label for="name">Name:</label>
        <input id="name" v-model="contact.name" type="text"/>
       </div>
      <div>
        <label for="phone">Phone:</label>
        <input id="phone" v-model="contact.phone" type="text"/>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'simple-contact',

    props: {
      initialContact: {type: Object, required: true}
    },

    data() {
      return {
        contact: JSON.parse(JSON.stringify(this.initialContact))
      };
    }
  };
</script>

<style lang="css" scoped>
  .simple-contact {
    background-color: lightblue;
    border: solid navy;
    padding: 4px;
    display: inline-block;
    margin: 5px 2px;
  }
  button {
    color: blue;
  }
</style>

