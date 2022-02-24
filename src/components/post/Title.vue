<template>
  <component v-bind:is="page ? 'h1' : 'span'"
             class="grey--text text--darken-4 text-h4 font-weight-bold"
        :class="{ 'text-h5' : !page }">
    {{ title }}
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
    page: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
