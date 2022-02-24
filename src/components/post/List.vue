<template>
  <v-row no-gutters>
    <v-col v-if="isVisible" cols="12">
      <div v-for="(post, index) in posts" :key="index">
        <Post :post="post"></Post>
        <ArticleAd v-if="index === 1"></ArticleAd>
      </div>
    </v-col>
    <v-col v-else cols="12" class="mb-5">
      <v-skeleton-loader type="image"></v-skeleton-loader>
    </v-col>
    <v-col cols="12">
      <div class="text-center">
        <v-pagination
          v-if="isVisible"
          v-model="page"
          color="green darken-2"
          :length="pages"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right" @input="changePage"
        ></v-pagination>
        <v-skeleton-loader v-else type="image" height="40px"
                           boilerplate class="mx-auto" width="150px"></v-skeleton-loader>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Post from '@/components/post/Post.vue';
import ArticleAd from '@/components/ads/ArticleAd.vue';

export default {
  name: 'List',
  components: { ArticleAd, Post },
  data() {
    return {
      page: 1,
      limit: 5,
      skip: 0,
    };
  },
  computed: {
    list() {
      return this.$store.getters['list/getList'];
    },
    posts() {
      return this.list && this.list.items;
    },
    getLoader() {
      return this.$store.getters['list/getLoader'];
    },
    isVisible() {
      return this.getLoader === false;
    },
    pages() {
      return this.list && Math.ceil(this.list.total / this.limit);
    },
    pagination() {
      return {
        limit: this.limit,
        skip: (this.page - 1) * this.limit,
      };
    },
  },
  methods: {
    getList() {
      this.$store.dispatch('list/getList', this.pagination);
    },
    changePage() {
      this.getList();
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>

</style>
