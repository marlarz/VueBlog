<template>
  <v-app>
    <v-system-bar color="green lighten-1" app height="8"></v-system-bar>
    <v-app-bar app color="white" flat
               style="border-bottom: thin solid rgba(0, 0, 0, 0.12) !important;">
      <v-container>
          <v-row no-gutters dense align="center">
            <v-toolbar-title>
              <router-link custom :to="{ name: 'Home' }" v-slot="{ href, navigate }">
                <a :href="href" @click="navigate"
                   class="row no-gutters justify-center align-center text-decoration-none">
                  <v-icon color="green darken-2" class="col-auto mr-1">mdi-cube-scan</v-icon>
                  <span class="col-auto font-weight-bold green--text text--darken-2">
                    VueMaster
                  </span>
                </a>
              </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn v-if="false" text depressed :ripple="false" large
                   class="text-capitalize font-weight-bold">Kontakt</v-btn>
          </v-row>
        </v-container>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer padless class="mt-4">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>VueMaster</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
