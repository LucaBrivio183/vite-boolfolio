<script>
//components
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
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
    <router-link :to="{ name: 'project', params: { slug: project.slug } }">
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">{{ project.name }}</h3>
                <h6 class="card-subtitle mb-2 text-body-secondary">Version: {{ project.major_version }}.{{
                    project.minor_version }}.{{ project.patch_version }}</h6>
                <p class="card-text">{{ project.description }}</p>
            </div>
        </div>
    </router-link>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

router-link {
    &:hover {
        text-decoration: none;
    }
}
</style>