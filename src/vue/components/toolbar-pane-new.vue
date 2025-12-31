<template>
  <div ref="elRef" :class="classes">
    <slot />
  </div>
</template>
<script>
import { computed } from 'vue';
import { classNames } from '../shared/utils.js';

export default {
  name: 'f7-toolbar-pane-new',
  props: {},
  setup() {
    const classes = computed(() => {
      return classNames('toolbar-new-pane');
    });

    return { classes };
  },
};
</script>

