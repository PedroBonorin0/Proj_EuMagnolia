import { createStore } from 'vuex';

export default createStore({
  state: {
    produtos: [
      {
        id: 1,
        cat: 1,
        nome: 'Parede tal',
        desc: 'Parede feita em tal lugar, alegrando a vinda de XXXXXX para esse mundão!',
        foto: 'infantil/inf-1.jpg',
      },
      {
        id: 2,
        cat: 1,
        nome: 'Parede outra tal',
        desc: 'Parede feita em tal lugar, alegrando a vinda de XXXXXX para esse mundão!',
        foto: 'infantil/inf-2.jpg',
      },
      {
        id: 3,
        cat: 1,
        nome: 'Parede mais uma tal',
        desc: 'Parede feita em tal lugar, alegrando a vinda de XXXXXX para esse mundão!',
        foto: 'infantil/inf-3.jpg',
      },
      {
        id: 4,
        cat: 1,
        nome: 'Parede mais uma tal',
        desc: 'Parede feita em tal lugar, alegrando a vinda de XXXXXX para esse mundão!',
        foto: 'infantil/inf-3.jpg',
      },
      {
        id: 5,
        cat: 1,
        nome: 'Parede mais uma tal',
        desc: 'Parede feita em tal lugar, alegrando a vinda de XXXXXX para esse mundão!',
        foto: 'infantil/inf-3.jpg',
      },
      {
        id: 6,
        cat: 1,
        nome: 'Parede mais uma tal',
        desc: 'Parede feita em tal lugar, alegrando a vinda de XXXXXX para esse mundão!',
        foto: 'infantil/inf-3.jpg',
      },
      {
        id: 7,
        cat: 1,
        nome: 'Parede mais uma tal',
        desc: 'Parede feita em tal lugar, alegrando a vinda de XXXXXX para esse mundão!',
        foto: 'infantil/inf-3.jpg',
      },
    ],
    categorias: [
      {
        id: 1, title: 'Infantil', img: 'infantil/infantil-home.jpg',
      },
      {
        id: 2, title: 'Empresarial', img: 'empresarial/empresarial-home.jpg',
      },
      {
        id: 3, title: 'Botânico', img: 'botanico/botanico-home.jpg',
      },
      {
        id: 4, title: 'Shopping', img: 'shopping/shopping-home.jpg',
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    allProdutos(state) {
      return state.produtos;
    },
    allCategorias(state) {
      return state.categorias;
    },
  },
  modules: {
  },
});
