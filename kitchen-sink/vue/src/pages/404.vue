<template>
  <f7-page>
    <f7-navbar title="Not found" back-link="Back"></f7-navbar>
    <f7-block>
      <p>Sorry</p>
      <p>Requested content not found.</p>
    </f7-block>
  </f7-page>
</template>

<script>
import { f7Page, f7Navbar, f7Block } from '@xenknight/framework7-vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7Block,
  },
};
</script>
