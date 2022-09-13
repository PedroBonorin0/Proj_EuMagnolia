<template>
  <NavBar />
  <router-view/>
  <PageFooter />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
