<template>
  <f7-page>
    <f7-navbar title="Skeleton Elements" back-link="Back"></f7-navbar>
    <f7-block strong-ios outline-ios>
      <p>
        Skeleton (or Ghost) elements designed to improve perceived performance and make app feels
        faster.
      </p>
      <p>
        Framework7 comes with two types of such elements: Skeleton Block and Skeleton Text. Skeleton
        block is a gray box that can be used as placeholder for any element. Skeleton text uses
        special built-in skeleton font to render each character of such text as gray rectangle.
        Skeleton text allows to make such elements responsive and feel more natural.
      </p>
      <p>It can be used in any places and with any elements.</p>
    </f7-block>

    <f7-block-title>Skeleton List</f7-block-title>
    <f7-list outline-ios strong-ios dividers-ios media-list class="skeleton-text">
      <f7-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <template #media>
          <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </f7-list-item>
      <f7-list-item
        title="Title"
        subtitle="Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum."
      >
        <template #media>
          <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </f7-list-item>
    </f7-list>

    <f7-block-title>Skeleton Card</f7-block-title>
    <f7-card
      outline
      class="skeleton-text"
      title="Card Header"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit."
      footer="Card Footer"
    ></f7-card>

    <f7-block-title>Loading Effects</f7-block-title>
    <f7-block strong-ios outline-ios>
      <p>It supports few loading effects:</p>
      <p class="grid grid-cols-3 grid-gap">
        <f7-button fill small round @click="load('fade')">Fade</f7-button>
        <f7-button fill small round @click="load('wave')">Wave</f7-button>
        <f7-button fill small round @click="load('pulse')">Pulse</f7-button>
      </p>
    </f7-block>
    <f7-list v-if="loading" outline-ios strong-ios dividers-ios media-list>
      <f7-list-item
        v-for="n in 3"
        :key="n"
        :class="`skeleton-text skeleton-effect-${effect}`"
        title="Full Name"
        subtitle="Position"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <f7-skeleton-block style="width: 40px; height: 40px; border-radius: 50%" />
        </template>
      </f7-list-item>
    </f7-list>
    <f7-list v-else outline-ios strong-ios dividers-ios media-list>
      <f7-list-item
        title="John Doe"
        subtitle="CEO"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis et massa ac interdum. Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/1"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        title="Jane Doe"
        subtitle="Marketing"
        text="Cras consequat felis at consequat hendrerit. Aliquam vestibulum vitae lorem ac iaculis. Praesent nec pharetra massa, at blandit lectus. Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/2"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
      <f7-list-item
        title="Kate Johnson"
        subtitle="Admin"
        text="Sed tincidunt, lectus eu convallis elementum, nibh nisi aliquet urna, nec imperdiet felis sapien at enim."
      >
        <template #media>
          <img
            src="https://placeimg.com/80/80/people/3"
            style="width: 40px; height: 40px; border-radius: 50%"
          />
        </template>
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
import {
  f7Page,
  f7Navbar,
  f7BlockTitle,
  f7Block,
  f7List,
  f7ListItem,
  f7Button,
  f7SkeletonBlock,
  f7Card,
} from '@xenknight/framework7-vue';

export default {
  components: {
    f7Page,
    f7Navbar,
    f7BlockTitle,
    f7Block,
    f7List,
    f7ListItem,
    f7Button,
    f7SkeletonBlock,
    f7Card,
  },
  data() {
    return {
      loading: false,
      effect: null,
    };
  },
  methods: {
    load(effect) {
      const self = this;
      if (self.loading) return;
      self.effect = effect;
      self.loading = true;
      setTimeout(() => {
        self.loading = false;
      }, 3000);
    },
  },
};
</script>
