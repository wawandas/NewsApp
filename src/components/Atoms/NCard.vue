<template>
  <div class="news-card">
    <h3 class="news-card__title">
      {{ title }}
    </h3>
    <span class="news-card__body">
      {{ body }}
    </span>
    <h6 class="news-card__author">written by: {{ author }}</h6>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
.news-card {
  padding: 20px 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  box-shadow: 0 12px 15px rgba(0, 0, 0, 0.1), 0 17px 50px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;

  &:hover {
    cursor: pointer;
  }

  &__title {
    text-align: start;
    font-size: 24px;
    line-height: 36px;
    color: #303133;
    font-weight: 500;
    margin-bottom: 20px;
    letter-spacing: -0.5;
  }

  &__body {
    text-align: left;
    font-size: 16px;
    color: #777;
    line-height: 36px;
  }

  &__author {
    font-size: 12px;
    letter-spacing: 1.5px;
    font-weight: 500;
    text-transform: uppercase;
    color: #c8a482;
    margin-top: 0;
    margin-bottom: 20px;
    text-align: end;
  }
}
</style>
