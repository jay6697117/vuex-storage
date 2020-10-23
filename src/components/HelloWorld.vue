<template>
  <div>
    <input type="text" v-model="message">
    {{internalMessage}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  // Disable automatic attribute inheritance, so that $attrs are
  // passed to the <input>, even if it's not the root element.
  // https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance
  inheritAttrs: false,
  // Change the v-model event name to `update` to avoid changing
  // the behavior of the native `input` event.
  // https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
  model: {
    event: "update"
  },
  computed: {
    ...mapGetters("user", ["internalMessage"]),
    message: {
      get() {
        return this.internalMessage;
      },
      set(value) {
        console.log(value);
        this.setMessage(value);
      }
    }
  },
  methods: {
    ...mapActions("user", ["setMessage"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
