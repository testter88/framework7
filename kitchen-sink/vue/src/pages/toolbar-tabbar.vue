<template>
  <f7-page>
    <f7-navbar title="Toolbar & Tabbar" back-link="Back"></f7-navbar>
    <f7-toolbar :position="toolbarPosition">
      <f7-link>Left Link</f7-link>
      <f7-link>Right Link</f7-link>
    </f7-toolbar>
    <!-- example-hidden-start -->
    <f7-list inset-md strong dividers-ios outline-ios class="example-hidden">
      <f7-list-item link="./tabbar/" title="Tabbar" />
      <f7-list-item link="./tabbar-icons/" title="Tabbar With Icons" />
      <f7-list-item link="./tabbar-scrollable/" title="Tabbar Scrollable" />
      <f7-list-item link="./toolbar-hide-scroll/" title="Hide Toolbar On Scroll" />
    </f7-list>
    <!-- example-hidden-end -->
    <f7-block-title>Toolbar Position</f7-block-title>
    <f7-block>
      <p>
        Toolbar supports both top and bottom positions. Click the following button to change its
        position.
      </p>
      <p>
        <f7-button fill @click="toggleToolbarPosition">Toggle Toolbar Position</f7-button>
      </p>
    </f7-block>
  </f7-page>
</template>
<script>
import {
  f7Navbar,
  f7Page,
  f7Toolbar,
  f7List,
  f7ListItem,
  f7Button,
  f7Link,
  f7BlockTitle,
  f7Block,
} from '@xenknight/framework7-vue';

export default {
  components: {
    f7Navbar,
    f7Page,
    f7Toolbar,
    f7List,
    f7ListItem,
    f7Button,
    f7Link,
    f7BlockTitle,
    f7Block,
  },
  data() {
    return {
      toolbarPosition: 'bottom',
    };
  },
  methods: {
    toggleToolbarPosition() {
      this.toolbarPosition = this.toolbarPosition === 'top' ? 'bottom' : 'top';
    },
  },
};
</script>
