<template>
  <div class="sorting-block">
    <button v-for="item in items" type="button" :key="item" class="sorting-block__button" @click="$emit('sort', item)">
      {{ item }}
      <i v-if="sortedBy === item && direction === 'asc'">▲</i>
      <i v-else-if="sortedBy === item && direction === 'desc'">▼</i>
    </button>
  </div>
</template>

<script>
export default {
  name: "SortingBlock",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    sortedBy: {
      type: String,
      default: "",
    },
    direction: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped lang="scss">
.sorting-block {
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;

  &__button {
    display: inline-block;
    line-height: 1.5;
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    background-color: rgba(255, 255, 255, 0.6);
    border: 1px solid transparent;
    border-radius: 4px;

    > i {
      font-size: 10px;
    }
  }
}
</style>
