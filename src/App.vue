<template>
  <NavBar />
  <div>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/Layout/NavBar.vue";

import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    NavBar
  },
  computed: {
    ...mapState({
      items: state => state.items
    }),
    filteredAndSortedItems() {
      const items = this.items
        .filter(({ title }) => {
          return title.toLowerCase().includes(this.search.toLowerCase());
        })
        .sort((itemA, itemB) => {
          let dir = this.direction === "asc" ? 1 : -1;
          if (itemA[this.sortedBy] > itemB[this.sortedBy]) {
            return 1 * dir;
          }
          if (itemA[this.sortedBy] < itemB[this.sortedBy]) {
            return -1 * dir;
          }
        });
      return items;
    }
  },
  methods: {
    ...mapMutations(["addItem"]),
    handleSorting(sortField) {
      this.direction = this.direction === "asc" ? "desc" : "asc";
      this.sortedBy = sortField;
    },
    handleSubmit() {
      this.addItem({ ...this.form });
    }
  }
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background: #eff0f2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.view {
  padding: 0 20px;
}

.controls {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  &__field {
    margin-bottom: 20px;
  }
}

.edit-news-card {
  margin-bottom: 20px;
}
</style>
