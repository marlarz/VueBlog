<template>
  <v-card outlined flat rounded class="mb-5" width="100%">
    <v-card-subtitle class="mb-0 pb-0">
      <Tags :tags="tags"></Tags>
    </v-card-subtitle>
    <v-card-title class="pb-2">
      <router-link custom
                   :to="postLink"
                   v-slot="{ navigate, href }">
        <a :href="href" @click="navigate" class="text-decoration-none">
          <Title :title="post.fields.title"></Title>
        </a>
      </router-link>
    </v-card-title>
    <v-card-text v-if="post.fields.shortDescription" class="grey--text text--darken-3">
      {{ post.fields.shortDescription }}
    </v-card-text>
    <v-card-actions class="pt-0">
      <router-link custom
                   :to="postLink"
                   v-slot="{ navigate, href }">
        <v-btn :href="href" @click="navigate"
               text class="text-capitalize font-weight-bold"
               color="green darken-2">Czytaj dalej</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
import Tags from '@/components/post/Tags.vue';
import Title from '@/components/post/Title.vue';

export default {
  name: 'Post',
  components: { Title, Tags },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tags() {
      return this.post.metadata.tags.map((tag) => tag.sys.id);
    },
    postLink() {
      return {
        name: 'Post',
        params: { id: this.post && this.post.fields.slug },
      };
    },
  },
};
</script>

<style scoped>

</style>
