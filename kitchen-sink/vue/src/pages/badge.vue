<template>
  <f7-page>
    <f7-navbar sliding back-link="Back" title="Badge">
      <f7-nav-right>
        <f7-link icon-only>
          <f7-icon ios="f7:person_circle_fill" md="material:person">
            <f7-badge color="red">5</f7-badge>
          </f7-icon>
        </f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar bottom tabbar icons>
      <f7-link tab-link="#tab-1" tab-link-active>
        <f7-icon ios="f7:envelope_fill" md="material:email">
          <f7-badge color="green">5</f7-badge>
        </f7-icon>
        <span class="tabbar-label">Inbox</span>
      </f7-link>
      <f7-link tab-link="#tab-2">
        <f7-icon ios="f7:calendar_fill" md="material:today">
          <f7-badge color="red">7</f7-badge>
        </f7-icon>
        <span class="tabbar-label">Calendar</span>
      </f7-link>
      <f7-link tab-link="#tab-3">
        <f7-icon ios="f7:cloud_upload_fill" md="material:file_upload">
          <f7-badge color="red">1</f7-badge>
        </f7-icon>
        <span class="tabbar-label">Upload</span>
      </f7-link>
    </f7-toolbar>

    <f7-list strong-ios outline-ios dividers-ios>
      <f7-list-item title="Foo Bar" badge="0">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item title="Ivan Petrov" badge="CEO" badge-color="blue">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item title="John Doe" badge="5" badge-color="green">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
      <f7-list-item title="Jane Doe" badge="NEW" badge-color="orange">
        <template #media>
          <f7-icon icon="icon-f7" />
        </template>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import {
  f7Navbar,
  f7NavRight,
  f7Toolbar,
  f7Page,
  f7Link,
  f7Badge,
  f7List,
  f7ListItem,
  f7Icon,
} from '@xenknight/framework7-vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7NavRight,
    f7Toolbar,
    f7Link,
    f7Badge,
    f7List,
    f7ListItem,
    f7Icon,
  },
};
</script>
