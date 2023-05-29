<script>
//libraries
import axios from 'axios';
export default {
    name: "ProjectPage",
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiURLs: {
                projects: '/projects',
            },
            project: null,
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiBaseUrl + this.apiURLs.projects + "/" + this.$route.params.slug)
                .then((response) => {
                    this.project = response.data.results;
                })
        }
    },
    created() {
        this.getProject();
    }
}

</script>


<template>
    <main>
        <div class="container">
            <h1 class="py-2">{{ project.name }}</h1>
            <small class="text-body-secondary">Version: {{ project.major_version }}.{{ project.minor_version }}.{{
                project.patch_version }}</small>
            <h3 class="py-2">{{ project.description }}</h3>
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
</style>