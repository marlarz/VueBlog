<template>
  <v-chip-group column>
    <v-chip v-for="(tag, index) in tags" :key="index"
            color="grey darken-2"
            class="rounded"
            outlined
            :small="small">
      {{ tag }}
    </v-chip>
  </v-chip-group>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
