<template>
  <button @click="$emit('click')">
    <slot>
      <span>
        {{ label }}
      </span>
    </slot>
  </button>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click'])

defineProps({
  label: {
    type: String,
    default: ""
  }
})
</script>
