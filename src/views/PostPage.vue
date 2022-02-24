<template>
  <v-container >
    <v-row no-gutters justify="center">
      <v-col v-if="isVisible && post" cols="12" md="9" xl="6">
        <v-row no-gutters>
          <Course v-if="false"></Course>
          <v-col cols="12" class="mb-0 mt-10">
            <Title page :title="title"></Title>
          </v-col>
          <v-col cols="12">
            <p class="mb-0 text-caption">{{ createdAt }}</p>
          </v-col>
          <v-col cols="12" class="mb-5">
            <Tags :tags="tags" small></Tags>
          </v-col>
          <v-col cols="12" class="grey--text text--darken-4">
<!--            <div v-html="parsedDescription"></div>-->
            <RichTextRenderer :document="description"
                              :nodeRenderers="renderNodes()"
                              :markRenderers="renderMarks()"></RichTextRenderer>
          </v-col>
        </v-row>
        <v-divider class="my-5 green lighten-2"></v-divider>
        <v-row v-if="false" no-gutters>
          <Newsletter></Newsletter>
        </v-row>
      </v-col>
      <v-col v-else cols="12" md="9" xl="6">
        <v-skeleton-loader type="article"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { MARKS, BLOCKS } from '@contentful/rich-text-types';
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

import Tags from '@/components/post/Tags.vue';
import Title from '@/components/post/Title.vue';
import Newsletter from '@/components/widgets/Newsletter.vue';
import Course from '@/components/widgets/Course.vue';
import Code from '@/components/widgets/Code.vue';

export default {
  name: 'PostPage',
  props: {
    id: {
      type: String,
    },
  },
  data() {
    return {
      renderMarks: () => ({
        [MARKS.BOLD]: (text, key, h) => h('span', { key, class: 'font-weight-bold' }, text),
        [MARKS.CODE]: (text, key, h) => h('Code', { key }, text),
      }),
      renderNodes: () => ({
        [BLOCKS.HEADING_2]: (node, key, h, next) => h('h2', { key, class: 'mb-4 mt-5 text-h5 font-weight-bold' }, next(node.content, key, h, next)),
        [BLOCKS.PARAGRAPH]: (node, key, h, next) => h('p', { key, class: 'mb-2' }, next(node.content, key, h, next)),
      }),
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Course, Newsletter, Title, Tags, Code, RichTextRenderer,
  },
  computed: {
    post() {
      return this.$store.getters['post/getPost'];
    },
    fields() {
      return this.post && this.post.fields;
    },
    title() {
      return this.fields && this.fields.title;
    },
    description() {
      return this.fields && this.fields.description;
    },
    tags() {
      return this.post && this.post.tags;
    },
    createdAt() {
      const createdAt = this.post && this.post.createdAt;
      const date = new Date(createdAt);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    isLoading() {
      return this.$store.getters['post/getLoader'];
    },
    isVisible() {
      return this.isLoading === false;
    },
  },
  mounted() {
    this.$store.dispatch('post/getPost', {
      slug: this.id,
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('post/setPost', null);
    next();
  },
};
</script>

<style scoped>

</style>
