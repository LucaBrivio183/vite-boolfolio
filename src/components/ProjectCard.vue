<script>
//components
export default {
    name: 'ProjectCard',
    props: {
        projects: Object,
    },
    components: {
    },
    data() {
        return {

        }
    },
    created() {

    }
}
</script>

<template>
    <main>
        <div class="container py-5">
            <div class="row gy-2">
                <div class="col-4 p-2" v-for="project in projects">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Version: {{ project.major_version }}.{{
                                project.minor_version }}.{{ project.patch_version }}</h6>
                            <p class="card-text">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
</style>