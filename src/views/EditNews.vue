<template>
  <div class="view">
    <form class="form" @submit.prevent>
      <TextField
        v-model="form.title"
        class="form__field"
        placeholder="Enter the title"
      />
      <TextArea
        v-model="form.body"
        class="form__field"
        placeholder="Enter the news"
        rows="15"
      />
      <TextField
        class="form__field"
        v-model="form.author"
        placeholder="Enter author name"
      />
      <NButton @click="handleSubmit"> Edit </NButton>
    </form>

    <router-link to="/overview">
      <NButton class="button__back"> go to overview </NButton>
    </router-link>
  </div>
</template>

<script>
import TextField from "@/components/Atoms/TextField.vue";
import TextArea from "@/components/Atoms/TextArea.vue";
import NButton from "@/components/Atoms/NButton.vue";

import { mapState, mapMutations } from "vuex";

export default {
  name: "EditNews",
  components: {
    TextField,
    TextArea,
    NButton
  },
  data() {
    return {
      form: {
        title: "",
        body: "",
        author: ""
      }
    };
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      items: state => state.items
    })
  },
  mounted() {
    this.form = {
      ...this.items.find(item => item.id === this.id)
    };
  },
  methods: {
    ...mapMutations(["updateItem"]),
    handleSubmit() {
      this.updateItem({
        id: this.id,
        ...this.form
      });
    }
  }
};
</script>
<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 80px;

  &__field {
    margin-bottom: 20px;
  }
}

.button__back {
  background-color: transparent;
  color: #000;
}
</style>
