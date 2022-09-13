<template>
  <div class="geral-produto">
    <div class="prod-img"><img :src="getImgUrl(prod.foto)" alt="Foto Produto"></div>
    <div class="prod-info">
      <h4>{{ prod.nome }}</h4>
      <p>{{ prod.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prod: { type: Object, required: true },
  },
  methods: {
    getImgUrl(ft) {
      return require(`@/assets/${ft}`);
    },
  },
};
</script>

<style scoped>
.geral-produto {
  margin: 20px;
  width: 230px;
  border: 1px solid #B598CA80;
}

.prod-info h4 {
  font-size: 1.4rem;
}

.prod-info p {
  font-size: .8rem;
}

.geral-produto img {
  height: 250px;
  width: 100%;
}

.geral-produto .prod-info {
  padding: 5px;
}
</style>
