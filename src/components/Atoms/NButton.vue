<template>
  <button class="button" :class="{ button__round: round }">
    <slot />
  </button>
</template>
<script>
export default {
  name: "NButton",
  props: {
    round: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped lang="scss">
.button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  min-width: 64px;
  line-height: 1.5;
  vertical-align: middle;
  text-align: center;
  text-overflow: ellipsis;
  text-transform: uppercase;
  color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
  background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-size: 14px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: box-shadow 0.2s;

  &__round {
    width: 50px;
    line-height: 50px;
    height: 50px;
    font-size: 25px;
    padding: 0;
    min-width: auto;
    border-radius: 60px;
  }
}

.button::-moz-focus-inner {
  border: none;
}

/* Hover, Focus */
.button:hover,
.button:focus {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
