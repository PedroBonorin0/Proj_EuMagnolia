<template>
  <div class="geral-prods-cat">
    <div class="container bg-light">
      <div class="title pt-3">
        <h1>{{ catInfo.title }}</h1>
      </div>
      <div class="prods">
        <InfoProduto
          v-for="prod in prodsCat"
          :key="prod.id"
          :prod="prod"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InfoProduto from '../components/InfoProduto.vue';

export default {
  components: { InfoProduto },
  data() {
    return {
      catInfo: {},
      prodsCat: [],
    };
  },

  created() {
    this.catInfo = this.allCategorias.filter((cat) => cat.id === Number(this.$route.params.id))[0];

    this.allProdutos.forEach((prod) => {
      if (prod.cat === Number(this.catInfo.id)) { this.prodsCat.push(prod); }
    });
  },

  computed: {
    ...mapGetters(['allCategorias', 'allProdutos']),
  },
};
</script>

<style scoped>
.geral-prods-cat {
  flex-grow: 1;
  background: #B598CA80;
}

.container {
  min-height: 100%;
  width: 80%;
}

.container h1{
  text-align: center;
  color: #B598CA;
}

.prods {
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
</style>
