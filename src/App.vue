<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Liste des mobs</router-link> |
      <router-link to="/mob">Mob</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
*,  *::before, *::after {
    box-sizing: border-box;
}
body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: #404040;
  margin: 0;
}
.container {
  padding: 20px;
}

.router-link-exact-active, .router-link-active, a {
  text-decoration: none;
  color: inherit;
}
h1 {
  font-size: 1.125em;
  color: #D8D8D8;
  font-weight: 400;
  margin: 5px 0;
}
h2 {
  font-size: 1.5em;
  color: #404040;
  font-weight: 400;
  margin: 5px 0;
}
input {
  background-color: #EDEDED;
  border-style: none;
  padding: 11px 20px;
  width: 100%;
  font-size: .875em;
  font-family: 'Montserrat', sans-serif;
  color: #9D9C9C;
  margin: 10px 0;
  transition: background-color .3s;
  &:focus {
    background-color: #c3ae8686;
  }
}

</style>
