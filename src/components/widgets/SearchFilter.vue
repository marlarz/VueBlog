<template>
  <v-col cols="12" lg="4">
    <label>
      <span class="mb-0 text-h6">Szukaj</span>
      <v-combobox :items="items" item-text="fields.title" no-filter
                  :search-input.sync="searchText" v-model="selected"
                  :loading="loader" hide-details
                  color="green lighten-1" outlined id="search-bar"
                  dense append-icon=""></v-combobox>
    </label>
  </v-col>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  name: 'SearchFilter',
  data() {
    return {
      selected: null,
      searchText: null,
      debouncedSearch: debounce(this.search, 500),
    };
  },
  watch: {
    searchText(searchText) {
      this.onInput(searchText);
    },
    selected(selected) {
      if (selected && selected.fields.slug) {
        this.$router.push({
          name: 'Post',
          params: {
            id: selected.fields.slug,
          },
        });
      }
    },
  },
  computed: {
    items() {
      if (this.loader) {
        return [];
      }
      if (this.getResult.length === 0) {
        return this.noDataItem;
      }
      return this.getResult;
    },
    getResult() {
      return this.$store.getters['search/getResult'] || [];
    },
    noDataItem() {
      return [
        { header: 'Brak wyników' },
      ];
    },
    loader() {
      return this.$store.getters['search/getLoader'];
    },
  },
  methods: {
    onInput() {
      this.debouncedSearch();
    },
    search() {
      this.$store.dispatch('search/getResult', this.searchText);
    },
  },
};
</script>

<style scoped>

</style>
