<template>
  <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button"
      data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-start text-bg-light" tabindex="-1"
    id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">EuMagnólia</h5>
        <button type="button" class="btn-close btn-close-white"
        data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link to="/" class="nav-link dropdown-toggle" role="button"
            data-bs-toggle="dropdown" aria-expanded="false">
              Produtos
            </router-link>
            <ul class="dropdown-menu">
              <li v-for="cat in allCategorias" :key="cat.id">
                <router-link :to="`/prods-cat/${cat.id}`"
                class="dropdown-item">{{ cat.title }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <router-link to="/" class="navbar-brand"><img src="@/assets/logo.png" alt="Logo EuMagnolia"
    width="200"></router-link>
    <div></div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['allCategorias']),
  },
};
</script>

<style scoped>
nav {
  box-shadow: 2px 2px 2px #bebebe;
  height: 80px;
  flex-grow: 0;
}

.offcanvas {
  max-width: 300px;
}

.offcanvas-title {
  color: #B598CA;
}

.navbar-toggler {
  color: #B598CA
}

.dropdown-item:hover {
  background: #b598ca80;
}
</style>
