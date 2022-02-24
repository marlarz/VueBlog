<template>
  <v-col cols="12">
    <label for="newsletter">
      <p class="mb-0 text-h6">Newsletter</p>
    </label>
    <p class="mb-2 text-body-2">
      Jeśli chcesz dostawać raz na jakiś
      czas mail z listą nowych artykułów na temat front-endu
      to ten Newsletter jest dla ciebie. Zero spamu!
    </p>
    <v-row no-gutters>
      <v-col cols="9">
        <v-text-field solo outlined flat dense hide-details id="newsletter"
                      class="rounded-0 rounded-l" placeholder="Twój Email"
                      color="green lighten-1" filled></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn block depressed color="green darken-2" height="40px"
               class="white--text rounded-0 rounded-r text-capitalize">Zapisz</v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'Newsletter',
};
</script>

<style scoped>

</style>
