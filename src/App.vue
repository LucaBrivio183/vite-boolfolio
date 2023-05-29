<script>
//libraries
import axios from 'axios';
//components
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiURLs: {
        projects: '/projects',
      },
      projects: [],
    }
  },
  methods: {
    getProjects() {
      axios.get(this.apiBaseUrl + this.apiURLs.projects).
        then((response) => {
          this.projects = response.data.result;
          console.log(this.projects);
        }).catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    this.getProjects();
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss' as *;
</style>
