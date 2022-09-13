<template>
  <router-link :to="`/prods-cat/${catInfo.id}`" class="categorias"
    :style="{'background-image': 'url('+require(`../../assets/${catInfo.img}`)+')'}"
  >
    <h4>{{ catInfo.title }}</h4>
  </router-link>
</template>

<script>
export default {
  props: {
    catInfo: { type: Object, required: true },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.categorias {
  flex-grow: 1;
  border-bottom: 2px solid #B598CA;
  border-left: 1px solid #B598CA;
  border-right: 1px solid #B598CA;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition: .3s;
}

.categorias h4 {
  font-size: 18px;
  padding: 2px 4px;
  color: white;
  background: #b598ca80;
  width: fit-content;
}

.categorias:hover {
  flex-grow: 2;
}
</style>
