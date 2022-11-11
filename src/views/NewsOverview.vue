<template>
  <div class="view">
    <div class="controls">
      <TextField v-model="search" placeholder="Filter news by title" />
      <NButton @click="toggleFormVisibility" round> + </NButton>
      <NSorting
        :items="sortingItems"
        :sortedBy="sortedBy"
        :direction="direction"
        @sort="handleSorting"
      />
    </div>
    <form v-if="isFormVisible" class="form" @submit.prevent>
      <TextField
        class="form__field"
        v-model="form.title"
        placeholder="Enter the title"
      />
      <TextArea
        class="form__field"
        v-model="form.body"
        placeholder="Enter the news"
      />
      <TextField
        class="form__field"
        v-model="form.author"
        placeholder="Enter author name"
      />
      <NButton @click="handleSubmit"> Add news </NButton>
    </form>
    <NCard
      v-for="newsItem in filteredAndSortedItems"
      :key="newsItem.id"
      :title="newsItem.title"
      :body="newsItem.body"
      :author="newsItem.author"
      @click="handleNavigation(newsItem.id)"
      class="edit-news-card"
    >
    </NCard>
  </div>
</template>

<script>
import TextField from "@/components/Atoms/TextField.vue";
import TextArea from "@/components/Atoms/TextArea.vue";
import NButton from "@/components/Atoms/NButton.vue";

import NCard from "@/components/Layout/NCard.vue";
import NSorting from "@/components/Layout/NSorting.vue";

import uniqid from "uniqid";

import { mapState, mapMutations } from "vuex";

export default {
  name: "NewsOverview",
  component: {
    NButton,
    NCard,
    TextField,
    NSorting,
    TextArea
  },
  data() {
    return {
      form: {
        title: "",
        body: "",
        author: ""
      },
      isFormVisible: false,
      search: "",
      sortedBy: "",
      direction: "asc",
      sortingItems: ["title", "body", "author"]
    };
  },
  components: {
    NCard,
    TextField,
    NSorting,
    TextArea,
    NButton
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
      this.addItem({ id: uniqid(), ...this.form });
    },
    handleNavigation(id) {
      this.$router.push({ name: "edit", params: { id } });
    },
    toggleFormVisibility() {
      this.isFormVisible = !this.isFormVisible;
    }
  }
};
</script>
<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  &__field {
    margin-bottom: 20px;
  }
}
</style>
