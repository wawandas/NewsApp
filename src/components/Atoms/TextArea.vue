<template>
  <textarea
    type="text"
    class="text-area"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  name: "TextArea",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped lang="scss">
.text-area {
  font-size: 16px;
  line-height: 1.5;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  background-size: 20px 20px;
  border-bottom: 1px solid #c5cbd5;
  min-width: 200px;
  padding: 0.5rem;

  &::placeholder {
    color: #838d99;
  }

  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 1px solid #84a2fa;
  }
}
</style>
