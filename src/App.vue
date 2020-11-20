<template>
  <v-app>
    <v-main>
      <app-header v-if="$route.meta.isHome"></app-header>
      <v-container fluid class="pt-0">
        <router-view></router-view>
      </v-container>
    </v-main>
<!--    <app-footer v-if="$route.meta.isHome"></app-footer>-->
  </v-app>
</template>

<script>
  import appHeader from './components/Home/Header.vue';
  // import appFooter from './components/Home/Footer.vue';

export default {

  name: 'App',
  components: {
    appHeader,
    // appFooter
  },
  data: () => ({
    //
  }),
};
</script>
