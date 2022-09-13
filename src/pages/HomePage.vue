<template>
  <div class="home">
    <ProdCategorias
    v-for="cat in allCategorias"
    :key="cat"
    :catInfo="cat" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProdCategorias from '../components/home/ProdCategorias.vue';

export default {
  name: 'HomeView',
  components: {
    ProdCategorias,
  },
  computed: {
    ...mapGetters(['allCategorias']),
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-grow: 1;
}
</style>
