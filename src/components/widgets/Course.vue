<template>
  <v-col cols="12" class="mt-3 mb-0 green lighten-5 py-2 rounded">
    <v-row align="center">
      <v-col cols="auto">
        <p class="mb-0 text-body-2 px-3 green--text text--darken-4 font-weight-bold">
          VueMaster - Nowoczesny kurs Vue.js
        </p>
        <div class="px-3">
          <v-chip x-small color="green darken-4" class="mr-1" dark>Vue.js</v-chip>
          <v-chip x-small color="green darken-4" class="mr-1" dark>Vuex</v-chip>
          <v-chip x-small color="green darken-4" class="mr-1" dark>Vue Router</v-chip>
          <v-chip x-small color="green darken-4" class="mr-1" dark>JavaScript</v-chip>
          <v-chip x-small color="green darken-4" class="mr-1" dark>Vuetify</v-chip>
          <v-chip x-small color="green darken-4" class="mr-1" dark>VeeValidate</v-chip>
          <v-chip x-small color="green darken-4" class="mr-1" dark>Webpack</v-chip>
          <v-chip x-small color="green darken-4" dark>Docker</v-chip>
        </div>
      </v-col>
      <v-col cols="auto" v-if="false">
        <p class="mb-0 text-h6">VueMaster - Kurs od juniora do seniora</p>
        <p class="mb-2 text-body-2">
          Zawarte w kursie:
        </p>
        <ul>
          <li>Vue.js</li>
          <li>Vuex</li>
          <li>Vue Router</li>
          <li>Webpack</li>
          <li>Docker</li>
          <li>5 praktycznych projektów</li>
        </ul>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto">
        <v-btn v-if="false" color="green lighten-1" class="mr-3" dark>Zapisz mnie</v-btn>
        <v-btn color="green darken-4" text small class="text-capitalize">Strona kursu</v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'Course',
};
</script>

<style scoped>

</style>
