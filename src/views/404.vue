<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="auto" class="text-center grey lighten-5 pa-10 px-16 rounded-lg">
        <p class="mb-0 text-body-2 font-weight-bold green--text text--lighten-2">
          Zgubiłeś się!
        </p>
        <p class="text-h1 mb-0 font-weight-bold green--text text--lighten-2">404</p>
        <router-link custom :to="{ name: 'Home' }" v-slot="{ href, navigate }">
          <v-btn @click="navigate" :href="href" block
                 outlined small color="green">Strona główna</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>

</style>
