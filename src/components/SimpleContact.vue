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
      <div>
        <button id="updateButton" type="button" v-on:click="onUpdateClicked">
          Update
        </button>
        <button id="cancelButton" type="button" v-on:click="onCancelClicked">
          Cancel
        </button>
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
    },
    methods: {
      onUpdateClicked: function() {
        this.$emit('contact-updated', this.contact);
      },
      onCancelClicked: function() {
        this.$emit('cancel');
      }
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

