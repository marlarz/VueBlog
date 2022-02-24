<template>
  <v-container>
    <v-row no-gutters class="mt-3 flex-column">
      <SearchFilter></SearchFilter>
      <TagsFilter v-if="false"></TagsFilter>
    </v-row>
    <v-row justify="space-between">
      <v-col cols="12" lg="7">
        <List></List>
      </v-col>
      <v-col cols="12" lg="4">
        <v-row no-gutters>
          <v-col cols="12" class="mb-5">
            <v-card flat>
              <v-divider class="green lighten-4 mb-5"></v-divider>
              <v-row justify="center" align="center">
                <v-col cols="auto">
                  <v-avatar size="128" color="grey lighten-2">
                    <v-img alt="Marcin portret" :lazy-src="require('/src/assets/person.png')"
                           :src="require('/src/assets/person.png')"></v-img>
                  </v-avatar>
                </v-col>
                <v-col>
                  Cześć! Jestem Marcin,
                  Lorem Ipsum
                </v-col>
              </v-row>
              <v-divider class="green lighten-4 mt-5"></v-divider>
            </v-card>
          </v-col>
          <Newsletter v-if="false"></Newsletter>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from '@/components/post/List.vue';
import Newsletter from '@/components/widgets/Newsletter.vue';
import TagsFilter from '@/components/widgets/TagsFilter.vue';
import SearchFilter from '@/components/widgets/SearchFilter.vue';

export default {
  name: 'Home',
  components: {
    SearchFilter,
    TagsFilter,
    Newsletter,
    List,
  },
};
</script>
