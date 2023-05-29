<script>
//libraries
import axios from 'axios';
//commponents
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "ProjectsPage",
    components: {
        ProjectCard
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
                    this.projects = response.data.results;
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
    <main>
        <div class="container">
            <h1 class="mt-5 mb-3">Projects</h1>
            <div class="row gy-2">
                <div class="col-4 p-2" v-for="project in projects">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
</style>