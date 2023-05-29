<script>
//components
export default {
    name: 'AppHeader',
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
    <header class="p-3">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

header {
    background-color: darkgrey;
}
</style>
