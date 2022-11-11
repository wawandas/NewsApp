<template>
  <nav>
    <router-link to="/home"> Home</router-link>
    <router-link to="/overview"> News overview </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
<style scoped lang="scss">
nav {
  display: flex;
  background-color: #5597b4;
  box-shadow: 0 1px 1px #ccc;
  border-radius: 2px;
}

nav a {
  display: inline-block;
  padding: 18px 30px;
  color: #fff !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

.router-link-active {
  background-color: #52b0d1;
}
</style>
