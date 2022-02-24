<template>
  <v-col cols="12" lg="7" class="mt-3">
    <p class="mb-0 text-h6">Kategorie</p>
    <v-chip-group v-if="isVisible" column>
      <v-chip v-for="(tag, index) in tags" :key="index"
              class="rounded"
              @click="select(tag.sys.id)"
              :color="selected === tag.sys.id ? 'green darken-2' : ''"
              :text-color="selected === tag.sys.id ? 'white' : ''">
        {{ tag.name }}
      </v-chip>
    </v-chip-group>
    <v-chip-group v-else>
      <v-skeleton-loader type="chip" height="32px"
                         class="mt-2 mr-2" boilerplate></v-skeleton-loader>
      <v-skeleton-loader type="chip" height="32px" class="mt-2" boilerplate></v-skeleton-loader>
    </v-chip-group>
  </v-col>
</template>

<script>
export default {
  name: 'TagsFilter',
  data() {
    return {
      selected: null,
    };
  },
  computed: {
    tags() {
      return this.$store.getters['tags/getTags'];
    },
    loader() {
      return this.$store.getters['tags/getLoader'];
    },
    isVisible() {
      return this.loader === false;
    },
  },
  methods: {
    select(item) {
      this.selected = this.selected === item ? null : item;
    },
  },
  created() {
    this.$store.dispatch('tags/getTags');
  },
};
</script>

<style scoped>

</style>
