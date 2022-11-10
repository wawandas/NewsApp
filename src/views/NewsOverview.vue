<template>
  <div class="view">
    <div class="controls">
      <TextField v-model="search" placeholder="Filter news by title" />
      <SortingBlock
        :items="sortingItems"
        :sortedBy="sortedBy"
        :direction="direction"
        @sort="handleSorting"
      />
    </div>
    <form class="form" @submit.prevent>
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
    <NewsCard
      v-for="newsItem in filteredAndSortedItems"
      :key="newsItem.id"
      :title="newsItem.title"
      :body="newsItem.body"
      :author="newsItem.author"
      @click="handleNavigation(newsItem.id)"
      class="edit-news-card"
    >
    </NewsCard>
  </div>
</template>

<script>
import NewsCard from "@/components/Atoms/NewsCard.vue";
import TextField from "@/components/Atoms/TextField.vue";
import TextArea from "@/components/Atoms/TextArea.vue";
import NButton from "@/components/Atoms/NButton.vue";
import SortingBlock from "@/components/Atoms/SortingBlock.vue";
import uniqid from "uniqid";

import { mapState, mapMutations } from "vuex";

export default {
  name: "NewsOverview",
  component: {
    NewsCard,
    TextField,
    SortingBlock,
    TextArea,
    NButton
  },
  data() {
    return {
      form: {
        title: "",
        body: "",
        author: ""
      },
      search: "",
      sortedBy: "",
      direction: "asc",
      sortingItems: ["title", "body", "author"]
    };
  },
  components: {
    NewsCard,
    TextField,
    SortingBlock,
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
