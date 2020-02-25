<template>
  <div id="app">
    <div id="nav">
     <router-link to="/"></router-link> 
      <router-link to="/detail"></router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
